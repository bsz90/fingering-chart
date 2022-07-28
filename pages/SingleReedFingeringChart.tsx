import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import {
  keyDiagrams,
  instrumentFingerings,
  notes,
  instrumentRanges,
  instrumentClef,
} from "./constants";
import { InstrumentKeyGroup } from "./InstrumentKeyGroup";
import { Stave } from "./Stave";
import { KeyGroup, Note, InstrumentKeys, Instrument, Notes } from "./types";
import { checkArray, checkNestedArray } from "./utils";

export const SingleReedFingeringChart = ({
  currentInstrument,
}: {
  currentInstrument: Instrument;
  setCurrentInstrument: Dispatch<SetStateAction<Instrument>>;
}) => {
  //Drag functionality for keys
  const [toggleKeyOn, setToggleKeyOn] = useState<boolean>(false);

  const [activeKeys, setActiveKeys] = useState<InstrumentKeys[] | undefined>(
    []
  );

  //note displayed on mouse hover
  const [noteState, setNoteState] = useState<Note | undefined>(undefined);

  //event handlers

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

    //sort keyGroups
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

  return (
    <div className="w-[1024px] px-24 py-20 h-full overflow-scroll bg-white drop-shadow-md  flex flex-col justify-start items-center">
      <div className="flex justify-between w-full h-full bg-white">
        <div className="flex justify-start">
          <Stave
            currentInstrument={currentInstrument}
            currentInstrumentClef={currentInstrumentClef}
            currentInstrumentRange={currentInstrumentRange}
            possibleInstrumentFingerings={possibleInstrumentFingerings}
            currentFingeringNote={currentFingeringNote}
            setActiveKeys={setActiveKeys}
            setNoteState={setNoteState}
          />
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
