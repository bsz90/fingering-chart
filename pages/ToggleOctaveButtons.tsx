import { Dispatch, SetStateAction, useMemo } from "react";
import { AdjustmentsDropdown } from "./AdjustmentsDropdown";
import { notes } from "./constants";
import { Action, DisplayState, InstrumentKeys, Note } from "./types";

export const ToggleOctaveButtons = ({
  noteState,
  setNoteState,
  currentFingeringsPossibleNotes,
  displayEnharmonics,
  setDisplayEnharmonics,
  display,
  displayDispatch,
}: {
  noteState: Note;
  setNoteState: Dispatch<SetStateAction<Note>>;
  currentFingeringsPossibleNotes: [
    string,
    InstrumentKeys[] | InstrumentKeys[][]
  ][];
  displayEnharmonics: boolean;
  setDisplayEnharmonics: Dispatch<SetStateAction<boolean>>;
  display: DisplayState;
  displayDispatch: Dispatch<Action>;
}) => {
  const currentPossibleFingeringIndex = useMemo(
    () =>
      currentFingeringsPossibleNotes.findIndex(
        ([staffPosition, fingering]) =>
          +staffPosition === noteState.staffPosition
      ),
    [currentFingeringsPossibleNotes, noteState]
  );

  function disabled(buttonType: string) {
    if (currentFingeringsPossibleNotes.length < 2) return true;
    if (buttonType === "down") return currentPossibleFingeringIndex < 1;
    return (
      currentPossibleFingeringIndex + 1 ===
      currentFingeringsPossibleNotes.length
    );
  }

  const handleButtonClick = (
    buttonType: string,
    currentFingeringsPossibleNotes: [
      string,
      InstrumentKeys[] | InstrumentKeys[][]
    ][],
    currentPossibleFingeringIndex: number,
    setNoteState: Dispatch<SetStateAction<Note>>
  ) => {
    const change = buttonType === "up" ? 1 : -1;

    const newNotePosition =
      currentFingeringsPossibleNotes[currentPossibleFingeringIndex + change][0];
    const newNoteState = notes[+newNotePosition];

    setNoteState({ ...newNoteState });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center gap-20">
      <button
        className={`w-6 h-12 bg-slate-600 text-white flex flex-row items-center text-center justify-center rounded-md drop-shadow-md
         ${disabled("up") ? "opacity-30" : "opacity-100"}`}
        disabled={disabled("up")}
        onClick={() =>
          handleButtonClick(
            "up",
            currentFingeringsPossibleNotes,
            currentPossibleFingeringIndex,
            setNoteState
          )
        }
      >
        &uarr;
      </button>
      <div className="w-12 h-12 flex items-center justify-center">
        <AdjustmentsDropdown
          displayEnharmonics={displayEnharmonics}
          setDisplayEnharmonics={setDisplayEnharmonics}
          display={display}
          displayDispatch={displayDispatch}
        />
      </div>
      <button
        className={`w-6 h-12 bg-slate-600 text-white flex flex-row items-center text-center justify-center rounded-md drop-shadow-md
         ${disabled("down") ? "opacity-30" : "opacity-100"}`}
        disabled={disabled("down")}
        onClick={() =>
          handleButtonClick(
            "down",
            currentFingeringsPossibleNotes,
            currentPossibleFingeringIndex,
            setNoteState
          )
        }
      >
        &darr;
      </button>
    </div>
  );
};
