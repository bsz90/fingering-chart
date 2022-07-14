import { Dispatch, SetStateAction, useEffect, useMemo, useRef } from "react";
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
  const { Renderer, Stave } = Vex.Flow;

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const renderer = new Renderer(ref.current, Renderer.Backends.SVG);

      renderer.resize(350, 200);
      const context = renderer.getContext().scale(2, 2);

      const stave = new Stave(0, 0, 150);

      stave.addClef(currentInstrument.clef ? "bass" : "treble");

      const notes = [
        new StaveNote({
          keys: ["cb/5"],
          duration: "q",
        }).setXShift(50),
      ];

      // Create a voice in 4/4 and add above notes
      const voices = [
        new Voice({
          num_beats: 1,
          beat_value: 4,
        }).addTickables(notes),
      ];

      new Formatter().formatToStave(voices, stave);

      voices.forEach(function (v) {
        v.draw(context, stave);
      });

      stave.setContext(context).draw();
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

  const toggleKey = (newKey: SaxophoneKeys) => {
    setCurrentInstrument((prev) => {
      if (prev) {
        return {
          ...prev,
          activeKeys: prev.activeKeys.includes(newKey)
            ? prev.activeKeys.filter((activeKey) => activeKey !== newKey)
            : [...prev.activeKeys, newKey],
        };
      }
    });
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
    <div className="w-full h-screen flex flex-col items-center justify-start">
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
                  toggleKey={toggleKey}
                  activeKeys={currentInstrument.activeKeys}
                  position={id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
