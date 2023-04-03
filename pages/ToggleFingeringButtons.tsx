import { Dispatch, SetStateAction } from "react";
import { InstrumentKeys } from "./types";
import { checkArray } from "./utils";

export const ToggleFingeringButtons = ({
  activeKeys,
  setActiveKeys,
  currentNotesPossibleFingerings,
}: {
  activeKeys: InstrumentKeys[] | undefined;
  setActiveKeys: Dispatch<SetStateAction<InstrumentKeys[] | undefined>>;
  currentNotesPossibleFingerings:
    | InstrumentKeys[]
    | InstrumentKeys[][]
    | undefined;
}) => {
  //event handler
  const handleButtonClick = (
    buttonType: string,
    currentNotesFingeringKeys: InstrumentKeys[][]
  ) => {
    const currentIndex = currentNotesFingeringKeys.findIndex((array) =>
      checkArray(array, activeKeys)
    );
    const change = buttonType === "right" ? 1 : -1;
    const newActiveKeys = [...currentNotesFingeringKeys[currentIndex + change]];
    setActiveKeys(newActiveKeys);
  };

  //disables button if there are no alternate fingerings
  const disabled = (buttonType: string) => {
    if (currentNotesPossibleFingerings) {
      if (
        currentNotesPossibleFingerings.some((item) => typeof item === "string")
      )
        return true;

      const currentFingeringIndex = currentNotesPossibleFingerings.findIndex(
        (array) => checkArray(array as InstrumentKeys[], activeKeys)
      );

      if (currentFingeringIndex === -1) return true;
      if (buttonType === "right") {
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
          disabled("left") ? "opacity-30" : "opacity-100"
        }`}
        disabled={disabled("left")}
        onClick={() =>
          handleButtonClick(
            "left",
            currentNotesPossibleFingerings as InstrumentKeys[][]
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
            currentNotesPossibleFingerings as InstrumentKeys[][]
          )
        }
      >
        &rarr;
      </button>
    </div>
  );
};
