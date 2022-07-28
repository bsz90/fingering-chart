import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Accidental, Formatter, StaveNote, Vex, Voice } from "vexflow";
import {
  keyDiagrams,
  instrumentFingerings,
  notes,
  instrumentRanges,
  instrumentClef,
} from "./constants";
import { InstrumentKeyGroup } from "./InstrumentKeyGroup";
import { KeyGroup, Note, InstrumentKeys, Instrument, Notes } from "./types";
import { checkArray, checkNestedArray, getRegex } from "./utils";

export const SingleReedFingeringChart = ({
  currentInstrument,
  setCurrentInstrument,
}: {
  currentInstrument: Instrument;
  setCurrentInstrument: Dispatch<SetStateAction<Instrument>>;
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

  const [activeKeys, setActiveKeys] = useState<InstrumentKeys[] | undefined>(
    []
  );

  //note displayed on mouse hover
  const [noteState, setNoteState] = useState<Note | undefined>(undefined);
  const [nextNote, setNextNote] = useState<Note | undefined>(undefined);

  //event handlers
  const handlePointerMove = (top: number, clientY: number, buttons: number) => {
    if (currentInstrumentRange) {
      const windowSize = 384;
      const pixelsBetweenNotes = 5;
      const offsetY = 70;
      const y = Math.min(
        Math.max(Math.floor((clientY - top - offsetY) / 7.5), 0),
        currentInstrumentRange.length
      );
      setNextNote(
        currentInstrumentRange[currentInstrumentRange.length - (y + 1)]
      );
      if (buttons) {
        setDraggingNote(true);
        if (nextNote) changeNote(nextNote);
      }
      if (!buttons) setDraggingNote(false);
    }
  };
  const changeNote = (nextNote: Note) => {
    setActiveKeys((prev) => {
      if (prev) {
        const index = nextNote.staffPosition;
        const newFingering = possibleInstrumentFingerings[index];
        if (newFingering === undefined) return [];
        if (Array.isArray(newFingering[0]))
          return [...(newFingering[0] as InstrumentKeys[])];
        return [...(newFingering as InstrumentKeys[])];
      }
    });
  };

  const handleButtonClick = (
    buttonType: string,
    currentFingeringKeys: InstrumentKeys[][]
  ) => {
    const currentIndex = currentFingeringKeys.findIndex((array) =>
      checkArray(array, activeKeys)
    );
    const change = buttonType === "right" ? 1 : -1;
    const newActiveKeys = [...currentFingeringKeys[currentIndex + change]];
    setActiveKeys(newActiveKeys);
  };

  //array of notes available to the instrument
  const currentInstrumentRange = useMemo(() => {
    const range = instrumentRanges[currentInstrument];

    if (range) return notes.slice(range.lowestNote, range.highestNote + 1);
  }, [currentInstrument]);

  //memo'd values
  const possibleInstrumentFingerings = useMemo(
    () => instrumentFingerings[currentInstrument],
    [currentInstrument]
  );

  const currentInstrumentKeyGroups = useMemo(() => {
    const currentKeyGroup = Object.entries(keyDiagrams)
      .flatMap(([string, keyGroup]) => {
        if (string === currentInstrument) return keyGroup;
      })
      .filter(Boolean);

    const sortedArray: KeyGroup[][] = [[], [], []];

    currentKeyGroup.forEach((arrayItem) => {
      if (arrayItem) sortedArray[arrayItem.position].push(arrayItem);
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
  }, [currentInstrument]);

  const currentInstrumentClef = useMemo(
    () => instrumentClef[currentInstrument],
    [currentInstrument]
  );

  const currentFingeringKeys:
    | InstrumentKeys[]
    | InstrumentKeys[][]
    | undefined = useMemo(() => {
    if (noteState && possibleInstrumentFingerings)
      return possibleInstrumentFingerings[noteState.staffPosition];
  }, [possibleInstrumentFingerings, noteState]);

  const currentFingeringNote = useMemo(() => {
    if (noteState && currentInstrumentRange) {
      const newState = currentInstrumentRange.find(
        ({ name, staffPosition }) => staffPosition == noteState.staffPosition
      );

      if (newState) {
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
    }
  }, [noteState, currentInstrumentRange]);

  useEffect(() => {
    if (noteState) {
      const fingeringIsCorrect =
        possibleInstrumentFingerings[noteState.staffPosition] === activeKeys;

      if (fingeringIsCorrect) {
        const index = Object.values(possibleInstrumentFingerings).findIndex(
          (fingering) => {
            if (typeof fingering[0] === "string") {
              return checkArray(fingering as InstrumentKeys[], activeKeys);
            }
            return checkNestedArray(
              fingering as InstrumentKeys[][],
              activeKeys
            );
          }
        );
        if (index > -1 && currentInstrumentRange)
          setNoteState(currentInstrumentRange[index]);
      }
    }
  }, [
    activeKeys,
    currentInstrumentRange,
    noteState,
    possibleInstrumentFingerings,
  ]);

  useEffect(() => {
    if (ref) {
      const renderer = new Renderer(ref, Renderer.Backends.SVG);

      renderer.resize(384, 400);
      const context = renderer.getContext().scale(2.5, 2.5);

      const stave = new Stave(0, 0, 137);

      stave
        .addClef(currentInstrumentClef)
        .setEndBarType(3)
        .setX(8)
        .setY(20)
        .setGroupStyle({ strokeStyle: "#000" });

      const currentFingeringRegex = getRegex(currentFingeringNote);

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
      const nextNoteRegex = getRegex(nextNote);

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
    currentInstrumentClef,
    currentInstrumentRange,
    draggingNote,
    nextNote,
    ref,
  ]);

  //disables button if there are no alternate fingerings
  const disabled = (buttonType: string) => {
    if (!currentFingeringNote) return true;
    if (currentFingeringNote && currentFingeringKeys) {
      if (currentFingeringKeys.some((item) => typeof item === "string"))
        return true;

      const currentFingeringIndex = currentFingeringKeys.findIndex(
        (array) => typeof array !== "string" && checkArray(array, activeKeys)
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
                {currentInstrument}
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
                  if (nextNote && possibleInstrumentFingerings) {
                    setNoteState(nextNote);
                    changeNote(nextNote);
                  }
                }}
                onPointerLeave={() => {
                  setNextNote(undefined);
                }}
              ></div>
            </div>
            <div className="h-[15%]">
              <h2 className="w-full p-4 text-[40px] font-serif text-center">
                {displayNote()}
                {JSON.stringify(noteState)}
              </h2>
            </div>
          </div>
        </div>
        <div className="w-96 h-[700px] flex flex-col items-center justify-start">
          <div className="w-full h-full flex items-center justify-center">
            {currentInstrumentKeyGroups.map((keyGroup, id) => {
              return (
                <InstrumentKeyGroup
                  key={id}
                  keyGroup={keyGroup}
                  position={id}
                  toggleKeyOn={toggleKeyOn}
                  setToggleKeyOn={setToggleKeyOn}
                  currentInstrument={currentInstrument}
                  activeKeys={activeKeys}
                  setActiveKeys={setActiveKeys}
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
                  currentFingeringKeys as InstrumentKeys[][]
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
                  currentFingeringKeys as InstrumentKeys[][]
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
