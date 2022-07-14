import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Formatter, StaveNote, TickContext, Vex, Voice } from "vexflow";
import { notes } from "./constants";
import { InstrumentKeyGroup } from "./InstrumentKeyGroup";
import { SaxophoneKeys, Woodwind, KeyGroup, DragState } from "./types";

export const SingleReedFingeringChart = ({
  currentInstrument,
  setCurrentInstrument,
}: {
  currentInstrument: Woodwind;
  setCurrentInstrument: Dispatch<SetStateAction<Woodwind | undefined>>;
}) => {
  //Drag functionality
  const [dragState, setDragState] = useState<DragState>({
    dragging: false,
    startingButtonActive: false,
  });
  const initialElement = useRef<HTMLButtonElement | null>(null);

  //VexFlow
  const { Renderer, Stave } = Vex.Flow;

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const renderer = new Renderer(ref.current, Renderer.Backends.SVG);

      renderer.resize(350, 200);
      const context = renderer.getContext().scale(2, 2);

      const stave = new Stave(0, 0, 150);

      stave
        .addClef(currentInstrument.clef ? "bass" : "treble")
        .setEndBarType(3);

      const notes = [
        new StaveNote({
          keys: ["b/3"],
          duration: "w",
        }).setXShift(50),
      ];

      // Create a voice in 4/4 and add above notes
      const voices = [
        new Voice({
          num_beats: 4,
          beat_value: 4,
        }).addTickables(notes),
      ];

      const formatter = new Formatter().formatToStave(voices, stave);

      voices.forEach(function (v) {
        v.draw(context, stave);
      });

      stave.setContext(context).draw();
      return () => {
        ref.current = null;
      };
    }
  }, [Renderer, Stave, currentInstrument]);

  const sortKeyGroups = (keyGroup: KeyGroup[]) => {
    const sortedArray: KeyGroup[][] = [[], [], []];

    keyGroup.forEach((arrayItem) => {
      sortedArray[arrayItem.position].push(arrayItem);
    });
    for (let i = 0; i < sortedArray.length; i++) {
      sortedArray[i].sort((keyGroupA, keyGroupB) => {
        if (keyGroupA.position === keyGroupB.position) {
          return keyGroupA.section < keyGroupB.section ? -1 : 1;
        }
        return keyGroupA.position < keyGroupB.position ? -1 : 1;
      });
    }
    return sortedArray;
  };

  const currentFingering = useMemo(() => {
    const instrumentRange = notes.slice(
      currentInstrument.range.lowestNote,
      currentInstrument.range.highestNote + 1
    );

    const { activeKeys, fingerings } = currentInstrument;

    const checkArray = (array: SaxophoneKeys[]) => {
      return (
        array.every((key) => activeKeys.includes(key)) &&
        array.length === activeKeys.length
      );
    };

    const checkNestedArray = (nestedArray: SaxophoneKeys[][]) => {
      return nestedArray.some((array) => checkArray(array));
    };

    const index = Object.values(fingerings).findIndex((fingering) => {
      if (typeof fingering[0] === "string") {
        return checkArray(fingering as SaxophoneKeys[]);
      }
      return checkNestedArray(fingering as SaxophoneKeys[][]);
    });

    if (index > -1) return instrumentRange[index];
  }, [currentInstrument]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start touch-none">
      <div className="w-5/6">
        <div className="w-full flex justify-center">
          <h1 className="text-3xl font-bold underline text-center">
            {currentInstrument.name} {JSON.stringify(currentFingering)}
          </h1>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-1/2 h-96  bg-gray-300 flex justify-center items-center">
            <div className="w-4/5 overflow-hidden" ref={ref}></div>
          </div>
          <div className="w-1/2 h-[700px] flex justify-center">
            {sortKeyGroups(currentInstrument.keyGroups).map((keyGroup, id) => {
              return (
                <InstrumentKeyGroup
                  key={id}
                  keyGroup={keyGroup}
                  activeKeys={currentInstrument.activeKeys}
                  position={id}
                  dragState={dragState}
                  setDragState={setDragState}
                  currentInstrument={currentInstrument}
                  setCurrentInstrument={setCurrentInstrument}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
