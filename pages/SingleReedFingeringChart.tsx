import { prepareServerlessUrl } from "next/dist/server/base-server";
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

//array comparison utils
const checkArray = (array: SaxophoneKeys[], currentInstrument: Woodwind) => {
  return (
    array.every((key) => currentInstrument.activeKeys.includes(key)) &&
    array.length === currentInstrument.activeKeys.length
  );
};

const checkNestedArray = (
  nestedArray: SaxophoneKeys[][],
  currentInstrument: Woodwind
) => {
  return nestedArray.some((array) => checkArray(array, currentInstrument));
};

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

  //event handlers
  const handlePointerMove = (top: number, clientY: number, buttons: number) => {
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
  };

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

  const handleButtonClick = (
    buttonType: string,
    currentFingeringKeys: SaxophoneKeys[][],
    currentInstrument: Woodwind
  ) => {
    const currentIndex = currentFingeringKeys.findIndex((array) =>
      checkArray(array, currentInstrument)
    );
    const change = buttonType === "right" ? 1 : -1;
    const newActiveKeys = [...currentFingeringKeys[currentIndex + change]];
    setCurrentInstrument((prev) => {
      if (prev) return { ...prev, activeKeys: newActiveKeys };
    });
  };

  //array of notes available to the instrument
  const instrumentRange = notes.slice(
    currentInstrument.range.lowestNote,
    currentInstrument.range.highestNote + 1
  );

  //memoized value of the index of the current fingering
  const fingeringIndex = useMemo(() => {
    if (currentInstrument.activeKeys.length === 0) {
      const index = Object.values(currentInstrument.fingerings).findIndex(
        (fingering) => fingering.length === 0
      );
      if (index > -1) return index;
    }

    const index = Object.values(currentInstrument.fingerings).findIndex(
      (fingering) => {
        if (typeof fingering[0] === "string") {
          return checkArray(fingering as SaxophoneKeys[], currentInstrument);
        }
        return checkNestedArray(
          fingering as SaxophoneKeys[][],
          currentInstrument
        );
      }
    );

    if (index > -1) return index;
  }, [currentInstrument]);

  const currentFingeringKeys = useMemo(() => {
    if (fingeringIndex)
      return Object.values(currentInstrument.fingerings)[fingeringIndex];
  }, [currentInstrument.fingerings, fingeringIndex]);

  const currentFingeringNote = useMemo(() => {
    if (fingeringIndex) {
      const newState = instrumentRange[fingeringIndex];
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
  }, [fingeringIndex, instrumentRange]);

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

      const currentFingeringRegex = (() => {
        if (currentFingeringNote) {
          const regex = match(currentFingeringNote);
          if (regex) {
            const [_, note, modifier, octave] = regex;
            return { note, modifier, octave };
          }
        }
      })();

      const currentStaveNote = currentFingeringRegex
        ? [
            new StaveNote({
              keys: [
                `${currentFingeringRegex.note}/${currentFingeringRegex.octave}`,
              ],
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
      if (currentFingeringRegex?.modifier) {
        currentStaveNote[0].addModifier(
          new Accidental(
            currentFingeringRegex.modifier === "♭" ? "b" : "#"
          ).setXShift(-20)
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
      const nextStaveNote = (() => {
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
          if (nextNoteRegex.note !== currentFingeringRegex?.note)
            return staveNote;
          if (nextNoteRegex.octave !== currentFingeringRegex?.octave)
            return staveNote;
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

      const currentStaveNoteFirst = (() => {
        if (currentStaveNote && nextStaveNote) {
          const currentStaveNotePosition = currentStaveNote[0].getLineNumber();
          const nextStaveNotePosition = nextStaveNote[0].getLineNumber();

          if (Math.abs(currentStaveNotePosition - nextStaveNotePosition) < 1) {
            return false;
          }
          if (currentStaveNotePosition >= 1 && currentStaveNotePosition <= 5)
            return true;
          if (currentStaveNotePosition > 5)
            return nextStaveNotePosition < currentStaveNotePosition;
          if (currentStaveNotePosition < 1)
            return nextStaveNotePosition > currentStaveNotePosition;

          return false;
        }
      })();

      nextStaveNote[0].setLedgerLineStyle({
        strokeStyle: draggingNote ? "rgba(0, 0, 0, 0)" : "#DEDEDE",
      });

      const voices = [
        new Voice({
          num_beats: 4,
          beat_value: 4,
        }).addTickables(
          currentStaveNoteFirst ? currentStaveNote : nextStaveNote
        ),
        new Voice({
          num_beats: 4,
          beat_value: 4,
        })
          .addTickables(
            currentStaveNoteFirst ? nextStaveNote : currentStaveNote
          )
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
    currentFingeringNote,
    currentInstrument,
    draggingNote,
    nextNote,
    ref,
  ]);

  //disables button if there are no alternate fingerings
  const disabled = (buttonType: string) => {
    if (currentFingeringNote && fingeringIndex && currentFingeringKeys) {
      if (currentFingeringKeys.some((item) => typeof item === "string"))
        return true;

      const currentFingeringIndex = currentFingeringKeys.findIndex(
        (array) =>
          typeof array !== "string" && checkArray(array, currentInstrument)
      );

      if (
        buttonType === "right" &&
        typeof currentFingeringKeys[currentFingeringIndex + 1] === "undefined"
      )
        return true;
      if (
        buttonType === "left" &&
        typeof currentFingeringKeys[currentFingeringIndex - 1] === "undefined"
      )
        return true;
    }

    return false;
  };

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
    if (currentFingeringNote) {
      if (typeof currentFingeringNote.name === "string") {
        return currentFingeringNote.name;
      }
      return currentFingeringNote.name[0].concat(
        " or ",
        currentFingeringNote.name[1]
      );
    }
    return;
  };

  return (
    <div className="w-[1024px] px-24 py-20 h-full overflow-scroll bg-white drop-shadow-md  flex flex-col justify-start items-center">
      <div className="flex justify-between w-full h-full bg-white">
        <div className="flex justify-start">
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
                onPointerMove={({ currentTarget, clientY, buttons }) => {
                  const { top } = currentTarget.getBoundingClientRect();
                  handlePointerMove(top, clientY, buttons);
                }}
                onClick={() => {
                  if (nextNote) {
                    changeNote(nextNote);
                  }
                }}
                onPointerLeave={() => {
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
        </div>
        <div className="w-96 h-[700px] flex flex-col items-center justify-start">
          <div className="w-full h-full flex items-center justify-center">
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
          <div className="flex justify-center items-center gap-20">
            <button
              className={`w-12 h-6 bg-slate-600 text-white flex items-center text-center justify-center rounded-md drop-shadow-md ${
                disabled("left") ? "opacity-30" : "opacity-100"
              }`}
              disabled={disabled("left")}
              onClick={() =>
                handleButtonClick(
                  "left",
                  currentFingeringKeys as SaxophoneKeys[][],
                  currentInstrument
                )
              }
            >
              &larr;
            </button>
            <button
              className={`w-12 h-6 bg-slate-600 text-white flex flex-row items-center text-center justify-center rounded-md drop-shadow-md ${
                disabled("right") ? "opacity-30" : "opacity-100"
              }`}
              disabled={disabled("right")}
              onClick={() =>
                handleButtonClick(
                  "right",
                  currentFingeringKeys as SaxophoneKeys[][],
                  currentInstrument
                )
              }
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
