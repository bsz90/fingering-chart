import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Accidental, Formatter, StaveNote, Vex, Voice } from "vexflow";
import { notes } from "./constants";
import { InstrumentKeyGroup } from "./InstrumentKeyGroup";
import { SaxophoneKeys, Woodwind, KeyGroup, Note } from "./types";

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

  const instrumentRange = notes.slice(
    currentInstrument.range.lowestNote,
    currentInstrument.range.highestNote + 1
  );

  const initialFingering = (() => {
    const index = Object.values(currentInstrument.fingerings).findIndex(
      (fingering) => fingering.length === 0
    );
    if (index > -1) return instrumentRange[index];
  })();

  const currentFingering = useMemo(() => {
    if (currentInstrument.activeKeys.length === 0) {
      return initialFingering;
    }

    const checkArray = (array: SaxophoneKeys[]) => {
      return (
        array.every((key) => currentInstrument.activeKeys.includes(key)) &&
        array.length === currentInstrument.activeKeys.length
      );
    };

    const checkNestedArray = (nestedArray: SaxophoneKeys[][]) => {
      return nestedArray.some((array) => checkArray(array));
    };

    const index = Object.values(currentInstrument.fingerings).findIndex(
      (fingering) => {
        if (typeof fingering[0] === "string") {
          return checkArray(fingering as SaxophoneKeys[]);
        }
        return checkNestedArray(fingering as SaxophoneKeys[][]);
      }
    );

    if (index > -1) return instrumentRange[index];
  }, [
    currentInstrument.activeKeys,
    currentInstrument.fingerings,
    initialFingering,
    instrumentRange,
  ]);

  useEffect(() => {
    if (ref.current) {
      const renderer = new Renderer(ref.current, Renderer.Backends.SVG);

      renderer.resize(384, 400);
      const context = renderer.getContext().scale(2.5, 2.5);

      const stave = new Stave(0, 0, 137);

      stave
        .addClef(currentInstrument.clef ? "bass" : "treble")
        .setEndBarType(3)
        .setX(8)
        .setY(20);

      const match = (() => {
        const regex = /([A-G])(♭|♯)?(\d)/;
        if (currentFingering) {
          if (typeof currentFingering.name === "string") {
            return currentFingering.name.match(regex);
          }

          const match = currentFingering.name.sort((string) => {
            if (!string?.includes("♭" || "♯")) {
              return -1;
            }
            return 1;
          });

          return match[0].match(regex);
        }
        return;
      })();

      const currentNote = (() => {
        if (match) {
          const [_, note, modifier, octave] = match;
          return { note, modifier, octave };
        }
      })();

      const notes = currentNote
        ? [
            new StaveNote({
              keys: [`${currentNote.note}/${currentNote.octave}`],
              duration: "w",
            }).setXShift(30),
          ]
        : [
            new StaveNote({
              keys: [`c/4`],
              duration: "w",
            }).setXShift(30),
          ];

      if (currentNote?.modifier) {
        notes[0].addModifier(
          new Accidental(currentNote.modifier === "♭" ? "b" : "#").setXShift(
            -20
          )
        );
      }

      // Create a voice in 4/4 and add above notes
      const voices = [
        new Voice({
          num_beats: 4,
          beat_value: 4,
        }).addTickables(notes),
      ];

      const formatter = new Formatter().formatToStave(voices, stave);

      stave.setContext(context).draw();

      voices.forEach(function (v) {
        v.draw(context, stave);
      });

      // return () => {
      //   ref.current = null;
      // };
    }
  }, [Renderer, Stave, currentFingering, currentInstrument]);

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

  return (
    <div className="w-[1024px] px-24 py-20 h-full bg-white drop-shadow-md  flex flex-col justify-center items-center">
      <div className="flex justify-between w-full h-fullbg-white">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="flex items-end h-[15%]">
            <h1 className="h-20 text-[40px] capitalize text-bold text-center font-serif flex items-center">
              {currentInstrument.name}
            </h1>
          </div>
          <div className="w-[384px] rounded-xl flex flex-col justify-center items-center">
            <div
              className="w-full flex justify-center overflow-hidden"
              ref={ref}
              onPointerDown={() => {}}
            ></div>
          </div>
          <div className="h-[15%]">
            <h2 className="w-full p-4 text-[40px] font-serif text-center">
              {displayNote()}
            </h2>
          </div>
        </div>
        <div className="w-96 h-[700px] flex items-center justify-center">
          {sortKeyGroups(currentInstrument.keyGroups).map((keyGroup, id) => {
            return (
              <InstrumentKeyGroup
                key={id}
                keyGroup={keyGroup}
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
