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
import { SaxophoneKeys, Woodwind, KeyGroup } from "./types";

export const SingleReedFingeringChart = ({
  currentInstrument,
  setCurrentInstrument,
}: {
  currentInstrument: Woodwind;
  setCurrentInstrument: Dispatch<SetStateAction<Woodwind | undefined>>;
}) => {
  //Drag functionality
  const [toggleOn, setToggleOn] = useState<boolean>(false);
  const initialElement = useRef<HTMLButtonElement | null>(null);

  //VexFlow
  const { Renderer, Stave } = Vex.Flow;

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const renderer = new Renderer(ref.current, Renderer.Backends.SVG);

      renderer.resize(400, 200);
      const context = renderer.getContext().scale(2, 2);

      const stave = new Stave(0, 0, 175);

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

  const displayNote = () => {
    if (currentFingering) {
      if (typeof currentFingering.name === "string") {
        return currentFingering.name;
      }
      return currentFingering.name[0].concat(" or ", currentFingering.name[1]);
    }
    return;
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
    <div className="w-[1024px] px-24 h-full flex flex-col justify-center items-center">
      <h1 className="h-20 text-3xl capitalize text-bold text-center flex items-center">
        {currentInstrument.name}
      </h1>
      <div className="flex w-full h-full border-4 rounded-xl drop-shadow-md bg-white">
        <div className="w-3/4 h-full flex flex-col items-center justify-center">
          <h2 className="w-full p-4 text-3xl font-bold text-center">
            {displayNote()}
          </h2>
          <div className="w-[500px] rounded-xl flex flex-col justify-center items-center">
            <div
              className="w-full flex justify-center overflow-hidden"
              ref={ref}
              onPointerDown={() => {}}
            ></div>
          </div>
        </div>
        <div className="w-1/2 h-[600px] flex items-center justify-center">
          {sortKeyGroups(currentInstrument.keyGroups).map((keyGroup, id) => {
            return (
              <InstrumentKeyGroup
                key={id}
                keyGroup={keyGroup}
                activeKeys={currentInstrument.activeKeys}
                position={id}
                toggleOn={toggleOn}
                setToggleOn={setToggleOn}
                currentInstrument={currentInstrument}
                setCurrentInstrument={setCurrentInstrument}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
