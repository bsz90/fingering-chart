import { Dispatch, SetStateAction, useMemo } from "react";
import { InstrumentKeys, Note } from "./types";

export const ToggleOctaveButtons = ({
  noteState,
  setNoteState,
  currentInstrumentRange,
  currentFingeringsPossibleNotes,
}: {
  noteState: Note | undefined;
  setNoteState: Dispatch<SetStateAction<Note | undefined>>;
  currentInstrumentRange: Note[] | undefined;
  currentFingeringsPossibleNotes: [
    string,
    InstrumentKeys[] | InstrumentKeys[][]
  ][];
}) => {
  const currentPossibleFingeringIndex = useMemo(() => {
    if (noteState) {
      return currentFingeringsPossibleNotes.findIndex(
        ([staffPosition, fingering]) => {
          return +staffPosition === noteState.staffPosition;
        }
      );
    }
  }, [currentFingeringsPossibleNotes, noteState]);

  function disabled(buttonType: string) {
    if (currentFingeringsPossibleNotes.length < 2) return true;
    const currentPossibleFingeringIndex =
      currentFingeringsPossibleNotes.findIndex(
        ([staffPosition, fingering]) =>
          +staffPosition === noteState?.staffPosition
      );

    if (currentPossibleFingeringIndex > -1) {
      if (buttonType === "down") return currentPossibleFingeringIndex < 1;
      return (
        currentPossibleFingeringIndex + 1 ===
        currentFingeringsPossibleNotes.length
      );
    }
    return true;
  }

  const handleButtonClick = (
    buttonType: string,
    currentInstrumentRange: Note[]
  ) => {
    if (
      currentPossibleFingeringIndex !== undefined &&
      currentPossibleFingeringIndex > -1
    ) {
      const change = buttonType === "up" ? 1 : -1;
      const newNotePosition =
        currentFingeringsPossibleNotes[
          currentPossibleFingeringIndex + change
        ][0];
      const newNoteState = currentInstrumentRange.find(
        (obj) => obj.staffPosition === +newNotePosition
      );
      setNoteState(newNoteState);
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center gap-20">
      <button
        className={`w-6 h-12 bg-slate-600 text-white flex flex-row items-center text-center justify-center rounded-md drop-shadow-md
         ${disabled("up") ? "opacity-30" : "opacity-100"}`}
        disabled={disabled("up")}
        onClick={() =>
          handleButtonClick("up", currentInstrumentRange as Note[])
        }
      >
        &uarr;
      </button>
      <button
        className={`w-6 h-12 bg-slate-600 text-white flex flex-row items-center text-center justify-center rounded-md drop-shadow-md
         ${disabled("down") ? "opacity-30" : "opacity-100"}`}
        disabled={disabled("down")}
        onClick={() =>
          handleButtonClick("down", currentInstrumentRange as Note[])
        }
      >
        &darr;
      </button>
    </div>
  );
};
