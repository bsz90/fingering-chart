import { Dispatch, SetStateAction, useMemo } from "react";
import { AdjustmentsDropdown } from "./AdjustmentsDropdown";
import { notes } from "./constants";
import { Action, Button, DisplayState, InstrumentKeys, Note } from "./types";

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
  currentFingeringsPossibleNotes: [string, InstrumentKeys[][]][];
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
    if (buttonType === Button.DOWN) return currentPossibleFingeringIndex < 1;
    return (
      currentPossibleFingeringIndex + 1 ===
      currentFingeringsPossibleNotes.length
    );
  }

  const handleButtonClick = (
    buttonType: string,
    currentFingeringsPossibleNotes: [string, InstrumentKeys[][]][],
    currentPossibleFingeringIndex: number,
    setNoteState: Dispatch<SetStateAction<Note>>
  ) => {
    const change = buttonType === Button.UP ? 1 : -1;

    const newNotePosition =
      currentFingeringsPossibleNotes[currentPossibleFingeringIndex + change][0];
    const newNoteState = notes[+newNotePosition];

    setNoteState({ ...newNoteState });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center gap-20">
      <button
        className={`w-6 h-12 bg-slate-600 text-white flex flex-row items-center text-center justify-center rounded-md drop-shadow-md
         ${disabled(Button.UP) ? "opacity-30" : "opacity-100"}`}
        disabled={disabled(Button.UP)}
        onClick={() =>
          handleButtonClick(
            Button.UP,
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
         ${disabled(Button.DOWN) ? "opacity-30" : "opacity-100"}`}
        disabled={disabled(Button.DOWN)}
        onClick={() =>
          handleButtonClick(
            Button.DOWN,
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
