import { Dispatch, SetStateAction } from "react";
import { Button, InstrumentKeys } from "./types";
import { likeArrays } from "./utils";

export const ToggleFingeringButtons = ({
  activeKeys,
  setActiveKeys,
  currentNotesPossibleFingerings,
}: {
  activeKeys: InstrumentKeys[] | undefined;
  setActiveKeys: Dispatch<SetStateAction<InstrumentKeys[] | undefined>>;
  currentNotesPossibleFingerings: InstrumentKeys[][] | undefined;
}) => {
  //event handler
  const handleButtonClick = (
    buttonType: Button,
    currentNotesFingeringKeys: InstrumentKeys[][]
  ) => {
    const currentIndex = currentNotesFingeringKeys.findIndex((array) =>
      likeArrays(array, activeKeys)
    );
    const change = buttonType === Button.RIGHT ? 1 : -1;
    const newActiveKeys = [...currentNotesFingeringKeys[currentIndex + change]];
    setActiveKeys(newActiveKeys);
  };

  //disables button if there are no alternate fingerings
  const disabled = (buttonType: Button) => {
    if (currentNotesPossibleFingerings) {
      if (
        currentNotesPossibleFingerings.some((item) => typeof item === "string")
      )
        return true;

      const currentFingeringIndex = currentNotesPossibleFingerings.findIndex(
        (array) => likeArrays(array as InstrumentKeys[], activeKeys)
      );

      if (currentFingeringIndex === -1) return true;
      if (buttonType === Button.RIGHT) {
        return (
          currentNotesPossibleFingerings.length === currentFingeringIndex + 1
        );
      }
      return currentFingeringIndex === 0;
    }
    return true;
  };

  return (
    <div className="flex justify-center items-center gap-20">
      <button
        className={`w-12 h-6 bg-slate-600 text-white flex items-center text-center justify-center rounded-md drop-shadow-md ${
          disabled(Button.LEFT) ? "opacity-30" : "opacity-100"
        }`}
        disabled={disabled(Button.LEFT)}
        onClick={() =>
          handleButtonClick(
            Button.LEFT,
            currentNotesPossibleFingerings as InstrumentKeys[][]
          )
        }
      >
        &larr;
      </button>
      <button
        className={`w-12 h-6 bg-slate-600 text-white flex flex-row items-center text-center justify-center rounded-md drop-shadow-md ${
          disabled(Button.RIGHT) ? "opacity-30" : "opacity-100"
        }`}
        disabled={disabled(Button.RIGHT)}
        onClick={() =>
          handleButtonClick(
            Button.RIGHT,
            currentNotesPossibleFingerings as InstrumentKeys[][]
          )
        }
      >
        &rarr;
      </button>
    </div>
  );
};
