import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import {
  keyDiagrams,
  instrumentFingerings,
  notes,
  instrumentRanges,
  instrumentClef,
} from "./constants";
import { Stave } from "./Stave";
import { ToggleFingeringButtons } from "./ToggleFingeringButtons";
import { ToggleOctaveButtons } from "./ToggleOctaveButtons";
import { KeyGroup, Note, InstrumentKeys, Instrument, Notes } from "./types";
import { checkIfSameFingerings } from "./utils";
import { WoodwindKeyGroups } from "./WoodwindKeyGroups";

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

  //get memo'd values from constants using currentInstrument
  const currentInstrumentRange = useMemo(() => {
    const range = instrumentRanges[currentInstrument];

    if (range) return notes.slice(range.lowestNote, range.highestNote + 1);
  }, [currentInstrument]);

  const allPossibleInstrumentFingerings = useMemo(
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

  const currentNotesPossibleFingerings:
    | InstrumentKeys[]
    | InstrumentKeys[][]
    | undefined = useMemo(() => {
    if (noteState && allPossibleInstrumentFingerings)
      return allPossibleInstrumentFingerings[noteState.staffPosition];
  }, [allPossibleInstrumentFingerings, noteState]);

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

  const currentFingeringsPossibleNotes = useMemo(
    () =>
      Object.entries(allPossibleInstrumentFingerings).filter(
        ([staffPosition, fingering]) =>
          checkIfSameFingerings(fingering, activeKeys)
      ),
    [activeKeys, allPossibleInstrumentFingerings]
  );

  const fingeringIsCorrect = useMemo(() => {
    if (noteState && activeKeys)
      return checkIfSameFingerings(
        allPossibleInstrumentFingerings[noteState.staffPosition],
        activeKeys
      );
  }, [activeKeys, noteState, allPossibleInstrumentFingerings]);

  useEffect(() => {
    if (!fingeringIsCorrect && noteState && currentFingeringsPossibleNotes) {
      if (currentFingeringsPossibleNotes.length > 0 && currentInstrumentRange) {
        const findClosestNote = (a: string, b: string) =>
          Math.abs(+a - noteState.staffPosition) -
          Math.abs(+b - noteState.staffPosition);

        const closestNote = currentFingeringsPossibleNotes.sort(([a], [b]) =>
          findClosestNote(a, b)
        )[0][0];

        const newNoteState = currentInstrumentRange.find(
          (obj) => obj.staffPosition === +closestNote
        );

        if (newNoteState) setNoteState({ ...newNoteState });
      }
    }
  }, [
    activeKeys,
    currentInstrumentRange,
    fingeringIsCorrect,
    noteState,
    allPossibleInstrumentFingerings,
    currentFingeringsPossibleNotes,
  ]);

  return (
    <div className="w-[1024px] px-4 py-20 h-full overflow-scroll bg-white drop-shadow-md  flex flex-col justify-start items-center">
      <div className="flex justify-around w-full h-full bg-white">
        <div className="flex justify-start">
          <Stave
            currentInstrument={currentInstrument}
            currentInstrumentClef={currentInstrumentClef}
            currentInstrumentRange={currentInstrumentRange}
            allPossibleInstrumentFingerings={allPossibleInstrumentFingerings}
            currentFingeringNote={currentFingeringNote}
            setActiveKeys={setActiveKeys}
            setNoteState={setNoteState}
          />
        </div>
        <ToggleOctaveButtons
          noteState={noteState}
          setNoteState={setNoteState}
          currentInstrumentRange={currentInstrumentRange}
          currentFingeringsPossibleNotes={currentFingeringsPossibleNotes}
        />
        <div className="w-96 h-[700px] flex flex-col items-center justify-start">
          <div className="w-full h-full flex items-center justify-center">
            {currentInstrumentKeyGroups.map((keyGroup, id) => {
              return (
                <WoodwindKeyGroups
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
          <ToggleFingeringButtons
            activeKeys={activeKeys}
            setActiveKeys={setActiveKeys}
            currentNotesPossibleFingerings={currentNotesPossibleFingerings}
            currentFingeringNote={currentFingeringNote}
          />
        </div>
      </div>
    </div>
  );
};
