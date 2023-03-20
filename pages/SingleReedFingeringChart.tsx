import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import {
  woodwindKeyDiagrams,
  instrumentFingerings,
  notes,
  instrumentRanges,
  instrumentClef,
} from "./constants";
import { Stave } from "./Stave";
import { ToggleFingeringButtons } from "./ToggleFingeringButtons";
import { ToggleOctaveButtons } from "./ToggleOctaveButtons";
import {
  WoodwindKeyGroup,
  Note,
  InstrumentKeys,
  Notes,
  WoodwindInstrument,
  Instrument,
} from "./types";
import { checkIfSameFingerings } from "./utils";
import { WoodwindKeyGroups } from "./WoodwindKeyGroups";

export const SingleReedFingeringChart = ({
  currentInstrument,
}: {
  currentInstrument: WoodwindInstrument;
  setCurrentInstrument: Dispatch<SetStateAction<Instrument>>;
}) => {
  //Drag functionality for keys
  const [toggleKeyOn, setToggleKeyOn] = useState<boolean>(false);

  const [noteState, setNoteState] = useState<Note>({
    name: [""],
    staffPosition: -1,
  });

  const [displayEnharmonics, setDisplayEnharmonics] = useState<boolean>(false);

  const [activeKeys, setActiveKeys] = useState<InstrumentKeys[] | undefined>(
    []
  );

  const allPossibleInstrumentFingerings = useMemo(
    () => instrumentFingerings[currentInstrument],
    [currentInstrument]
  );

  const currentInstrumentKeyGroups = useMemo(() => {
    const currentKeyGroup = woodwindKeyDiagrams[currentInstrument];

    //sort keyGroups
    const sortedArray: WoodwindKeyGroup[][] = [[], [], []];

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

  const currentNotesPossibleFingerings = useMemo(
    () => allPossibleInstrumentFingerings[noteState.staffPosition],
    [allPossibleInstrumentFingerings, noteState]
  );

  const currentFingeringsPossibleNotes = useMemo(
    () =>
      Object.entries(allPossibleInstrumentFingerings).filter(
        ([staffPosition, fingering]) =>
          checkIfSameFingerings(fingering, activeKeys)
      ),
    [activeKeys, allPossibleInstrumentFingerings]
  );

  const fingeringIsCorrect = useMemo(
    () =>
      checkIfSameFingerings(
        allPossibleInstrumentFingerings[noteState.staffPosition],
        activeKeys
      ),
    [activeKeys, noteState, allPossibleInstrumentFingerings]
  );

  useEffect(() => {
    setActiveKeys([]);
    setNoteState({
      name: [""],
      staffPosition: -1,
    });
  }, [currentInstrument]);

  useEffect(() => {
    if (!fingeringIsCorrect) {
      if (currentFingeringsPossibleNotes.length > 1) {
        const findClosestNote = (a: string, b: string) =>
          Math.abs(+a - noteState.staffPosition) -
          Math.abs(+b - noteState.staffPosition);

        const closestNote = currentFingeringsPossibleNotes.sort(([a], [b]) =>
          findClosestNote(a, b)
        )[0][0];

        const newNoteState = notes[+closestNote];
        setNoteState({ ...newNoteState });
      }
      if (currentFingeringsPossibleNotes.length === 1) {
        const newNoteState = notes[+currentFingeringsPossibleNotes[0][0]];
        setNoteState({ ...newNoteState });
      }
      if (noteState.staffPosition > -1)
        setNoteState({
          name: [""],
          staffPosition: -1,
        });
    }
  }, [
    activeKeys,
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
            noteState={noteState}
            currentInstrument={currentInstrument}
            currentInstrumentClef={currentInstrumentClef}
            allPossibleInstrumentFingerings={allPossibleInstrumentFingerings}
            setActiveKeys={setActiveKeys}
            setNoteState={setNoteState}
            displayEnharmonics={displayEnharmonics}
            setDisplayEnharmonics={setDisplayEnharmonics}
          />
        </div>
        <ToggleOctaveButtons
          noteState={noteState}
          setNoteState={setNoteState}
          currentFingeringsPossibleNotes={currentFingeringsPossibleNotes}
          displayEnharmonics={displayEnharmonics}
          setDisplayEnharmonics={setDisplayEnharmonics}
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
          />
        </div>
      </div>
    </div>
  );
};
