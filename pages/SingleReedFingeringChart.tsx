import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Accidental, Element, Formatter, StaveNote, Vex, Voice } from "vexflow";
import { notes } from "./constants";
import { InstrumentKeyGroup } from "./InstrumentKeyGroup";
import { SaxophoneKeys, Woodwind, KeyGroup, Note } from "./types";

//converts constant into a useable string
const match = (currentFingering: Note) => {
  const regex = /([A-G])(♭|♯)?(\d)/;
  if (currentFingering) {
    if (typeof currentFingering.name === "string") {
      return currentFingering.name.match(regex);
    }

    return currentFingering.name[0].match(regex);
  }
  return;
};

export const SingleReedFingeringChart = ({
  currentInstrument,
  setCurrentInstrument,
}: {
  currentInstrument: Woodwind;
  setCurrentInstrument: Dispatch<SetStateAction<Woodwind | undefined>>;
}) => {
  //Drag functionality for keys
  const [toggleKeyOn, setToggleKeyOn] = useState<boolean>(false);

  //display newNote on pointerMove?
  const [draggingNote, setDraggingNote] = useState<boolean>(false);

  //Ref for VexFlow Renderer
  const initialElement = useRef<HTMLButtonElement | null>(null);

  //VexFlow
  const { Renderer, Stave } = Vex.Flow;

  //HTMLref for Vexflow
  const [ref, setRef] = useState<HTMLDivElement | null>(null!);

  //note displayed on mouse hover
  const [nextNote, setNextNote] = useState<Note | null>(null);

  const changeNote = (nextNote: Note) => {
    setCurrentInstrument((prev) => {
      if (prev) {
        const index = nextNote.staffPosition;
        const newFingering = prev.fingerings[index];

        if (newFingering === undefined) return { ...prev, activeKeys: [] };

        if (Array.isArray(newFingering[0]))
          return { ...prev, activeKeys: [...newFingering[0]] };
        return {
          ...prev,
          activeKeys: [...(newFingering as SaxophoneKeys[])],
        };
      }
    });
  };

  //array of notes available to the instrument
  const instrumentRange = notes.slice(
    currentInstrument.range.lowestNote,
    currentInstrument.range.highestNote + 1
  );

  //first fingering intialized
  const initialFingering = (() => {
    const index = Object.values(currentInstrument.fingerings).findIndex(
      (fingering) => fingering.length === 0
    );
    if (index > -1) return instrumentRange[index];
  })();

  //memoized valueof the displayed fingering
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

    if (index > -1) {
      const newState = instrumentRange[index];
      if (typeof newState.name === "string") return newState;
      newState.name.sort((stringA, stringB) => {
        const hasAccidental = (string: string) => {
          if (string.includes("♯") || string.includes("♭")) return true;
          return false;
        };

        if (hasAccidental(stringA) && !hasAccidental(stringB)) {
          return 1;
        }
        if (!hasAccidental(stringA) && hasAccidental(stringB)) {
          return -1;
        }
        return 0;
      });
      return newState;
    }
  }, [
    currentInstrument.activeKeys,
    currentInstrument.fingerings,
    initialFingering,
    instrumentRange,
  ]);

  useEffect(() => {
    if (ref) {
      const renderer = new Renderer(ref, Renderer.Backends.SVG);

      renderer.resize(384, 400);
      const context = renderer.getContext().scale(2.5, 2.5);

      const stave = new Stave(0, 0, 137);

      stave
        .addClef(currentInstrument.clef)
        .setEndBarType(3)
        .setX(8)
        .setY(20)
        .setGroupStyle({ strokeStyle: "#000" });

      const currentNote = (() => {
        if (currentFingering) {
          const regex = match(currentFingering);
          if (regex) {
            const [_, note, modifier, octave] = regex;
            return { note, modifier, octave };
          }
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
              keys: [`e/4`],
              duration: "w",
            })
              .setXShift(30)
              .setStyle({ fillStyle: "rgba(0, 0, 0, 0)" }),
          ];

      //add accidental if exists
      if (currentNote?.modifier) {
        notes[0].addModifier(
          new Accidental(currentNote.modifier === "♭" ? "b" : "#").setXShift(
            -20
          )
        );
      }

      // retrieve string from nextNote state to use
      const nextNoteRegex = (() => {
        if (nextNote) {
          const regex = match(nextNote);
          if (regex) {
            const [_, note, modifier, octave] = regex;
            return { note, modifier, octave };
          }
        }
      })();

      //note displayed on hover
      const newNote = (() => {
        if (nextNote && nextNoteRegex) {
          const staveNote = [
            new StaveNote({
              keys: [`${nextNoteRegex.note}/${nextNoteRegex.octave}`],
              duration: "w",
            })
              .setXShift(30)
              .setStyle({
                fillStyle: draggingNote ? "rgba(0, 0, 0, 0)" : "#DEDEDE",
              }),
          ];
          if (nextNoteRegex.note !== currentNote?.note) return staveNote;
          if (nextNoteRegex.octave !== currentNote?.octave) return staveNote;
        }
        return [
          new StaveNote({
            keys: [`e/4`],
            duration: "w",
          })
            .setXShift(30)
            .setStyle({ fillStyle: "rgba(0, 0, 0, 0)" }),
        ];
      })();

      newNote[0].setLedgerLineStyle({
        strokeStyle: draggingNote ? "rgba(0, 0, 0, 0)" : "#DEDEDE",
      });

      const voices = [
        new Voice({
          num_beats: 4,
          beat_value: 4,
        }).addTickables(notes),
        new Voice({
          num_beats: 4,
          beat_value: 4,
        })
          .addTickables(newNote)
          .setGroupStyle({ strokeStyle: "rgba(0, 0, 0, 0.5)" }),
      ];

      const formatter = new Formatter().formatToStave(voices, stave);

      stave.setContext(context).draw();

      voices.forEach(function (v) {
        v.draw(context, stave);
      });

      return () => {
        ref.innerHTML = "";
      };
    }
  }, [
    Renderer,
    Stave,
    currentFingering,
    currentInstrument,
    draggingNote,
    nextNote,
    ref,
  ]);

  //function to sort the array of notes in order to display properly
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

  //function to display notes below staff
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
              ref={setRef}
              onPointerDown={() => {
                setDraggingNote(true);
              }}
              onPointerUp={() => {
                setDraggingNote(false);
              }}
              onPointerMove={({ currentTarget, clientY, buttons }) => {
                const { top } = currentTarget.getBoundingClientRect();
                const windowSize = 384;
                const pixelsBetweenNotes = 5;
                const offsetY = 70;
                const y = Math.min(
                  Math.max(Math.floor((clientY - top - offsetY) / 7.5), 0),
                  instrumentRange.length
                );
                setNextNote(instrumentRange[instrumentRange.length - (y + 1)]);
                if (buttons) {
                  setDraggingNote(true);
                  if (nextNote) changeNote(nextNote);
                }
                if (!buttons) setDraggingNote(false);
              }}
              onClick={() => {
                if (nextNote) {
                  changeNote(nextNote);
                }
              }}
              onPointerLeave={() => {
                // console.log("leaving");
                setNextNote(null);
              }}
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
                toggleKeyOn={toggleKeyOn}
                setToggleKeyOn={setToggleKeyOn}
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
