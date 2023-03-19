import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import {
  instrumentFingerings,
  notes,
  instrumentClef,
  brassDiagrams,
} from "./constants";
import { Stave } from "./Stave";
import { ToggleFingeringButtons } from "./ToggleFingeringButtons";
import { ToggleOctaveButtons } from "./ToggleOctaveButtons";
import {
  Note,
  InstrumentKeys,
  Instrument,
  BrassInstrument,
  Notes,
  BrassKeyGroup,
} from "./types";
import { checkIfSameFingerings } from "./utils";
import { InstrumentKey } from "./InstrumentKey";
import { current } from "immer";

export const BrassFingeringChart = ({
  currentInstrument,
}: {
  currentInstrument: BrassInstrument;
  setCurrentInstrument: Dispatch<SetStateAction<Instrument>>;
}) => {
  //Drag functionality for keys
  const [toggleKeyOn, setToggleKeyOn] = useState<boolean>(false);

  const [noteState, setNoteState] = useState<Note>({
    name: [""],
    staffPosition: -1,
  });

  const [activeKeys, setActiveKeys] = useState<InstrumentKeys[] | undefined>(
    []
  );

  const [displayTrigger, setDisplayTrigger] = useState(false);

  const [displayFourthValve, setDisplayFourthValve] = useState(false);

  const currentDiagram = useMemo(() => {
    const correctDiagram = brassDiagrams[currentInstrument].find(
      (item) =>
        item.fourthValve === displayFourthValve &&
        item.trigger === displayTrigger
    );

    return correctDiagram
      ? correctDiagram
      : brassDiagrams[currentInstrument][0];
  }, [currentInstrument, displayFourthValve, displayTrigger]);

  const allPossibleInstrumentFingerings = useMemo(
    () => instrumentFingerings[currentInstrument],
    [currentInstrument]
  );

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
          />
        </div>
        <ToggleOctaveButtons
          noteState={noteState}
          setNoteState={setNoteState}
          currentFingeringsPossibleNotes={currentFingeringsPossibleNotes}
        />
        <div className="w-96 h-[700px] flex items-center justify-start">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <div className="w-full h-96 flex flex-col gap-8 items-center justify-center">
              <div className={currentDiagram.containerClassName}>
                {currentDiagram.keys.map(({ name, className }) => {
                  return (
                    <InstrumentKey
                      key={name}
                      currentInstrument={currentInstrument}
                      name={name}
                      className={className}
                      toggleKeyOn={toggleKeyOn}
                      setToggleKeyOn={setToggleKeyOn}
                      activeKeys={activeKeys}
                      setActiveKeys={setActiveKeys}
                    ></InstrumentKey>
                  );
                })}
              </div>
            </div>
            <ToggleFingeringButtons
              activeKeys={activeKeys}
              setActiveKeys={setActiveKeys}
              currentNotesPossibleFingerings={currentNotesPossibleFingerings}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
