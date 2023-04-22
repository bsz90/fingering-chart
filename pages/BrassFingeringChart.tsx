import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import {
  woodwindFingerings,
  notes,
  instrumentClef,
  brassDiagrams,
  additionalFingerings,
} from "./constants";
import { Stave } from "./Stave";
import { ToggleFingeringButtons } from "./ToggleFingeringButtons";
import { ToggleOctaveButtons } from "./ToggleOctaveButtons";
import {
  Note,
  InstrumentKeys,
  Instrument,
  BrassInstrument,
  DisplayState,
  Action,
  Notes,
  DisplayType,
  InstrumentProp,
} from "./types";
import {
  checkIfSameFingerings,
  deepCopyArray,
  deepCopyFingerings,
} from "./utils";
import { InstrumentKey } from "./InstrumentKey";

export const BrassFingeringChart = ({
  currentInstrument,
  display,
  displayDispatch,
}: {
  currentInstrument: BrassInstrument;
  setCurrentInstrument: Dispatch<SetStateAction<Instrument>>;
  display: DisplayState;
  displayDispatch: Dispatch<Action>;
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

  const [displayEnharmonics, setDisplayEnharmonics] = useState<boolean>(false);

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

  const allPossibleInstrumentFingerings = useMemo(() => {
    const standardFingerings = woodwindFingerings[currentInstrument];

    //if display has no alternate options, return standardFingerings
    if (Object.keys(display).length === 0) return standardFingerings;

    const currentAdditionalFingerings = additionalFingerings[currentInstrument];

    //if there are no additional fingerings return standardFingerings
    if (!currentAdditionalFingerings) return standardFingerings;

    //find all props that are true in display state
    const trueProps = Object.entries(display)
      .filter(([instrumentProp, boolean]) => boolean)
      .map(([instrumentProp, boolean]) => instrumentProp);

    //function to get an array of fingerings based on trueProps
    const getFingeringsToAdd = (
      prop: string,
      fingerings: {
        type: InstrumentProp;
        fingerings: Partial<Record<Notes, InstrumentKeys[][]>>;
      }[]
    ) =>
      fingerings
        .filter((additionalFingerings) => additionalFingerings.type === prop)
        .map((additionalFingerings) => additionalFingerings.fingerings);

    //the actual arrays of all additionalFingerings
    const fingeringsToAdd = trueProps
      .map((trueProp) =>
        getFingeringsToAdd(trueProp, currentAdditionalFingerings)
      )
      .flatMap((arrayOfFingerings) => arrayOfFingerings)
      .flatMap((fingerings) => Object.entries(fingerings));

    //function to add newFingerings to old ones
    const addFingerings = (
      prevFingerings: Partial<Record<Notes, InstrumentKeys[][]>>,
      fingeringsToAdd: [string, InstrumentKeys[][]][]
    ) => {
      let newObj: Partial<Record<Notes, InstrumentKeys[][]>> =
        deepCopyFingerings(prevFingerings);

      for (let i = 0; i < fingeringsToAdd.length; i++) {
        const array = fingeringsToAdd[i];
        const fingering = newObj[+array[0] as Notes];
        if (!fingering) {
          newObj[+array[0] as Notes] = array[1];
          continue;
        }
        const newFingering = [...array[1], ...fingering];
        newObj[+array[0] as Notes] = newFingering;
      }
      return newObj;
    };

    return addFingerings(standardFingerings, fingeringsToAdd);
  }, [currentInstrument, display]);

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

        const possibleNotes = [...currentFingeringsPossibleNotes];

        const closestNote = possibleNotes.sort(([a], [b]) =>
          findClosestNote(a, b)
        )[0][0];

        const newNoteState = notes[+closestNote];
        setNoteState({ ...newNoteState });
      }
      if (currentFingeringsPossibleNotes.length === 1) {
        const newNoteState = notes[+currentFingeringsPossibleNotes[0][0]];
        setNoteState({ ...newNoteState });
      }
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
          display={display}
          displayDispatch={displayDispatch}
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
