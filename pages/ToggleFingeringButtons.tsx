import { Dispatch, SetStateAction } from "react";
import { InstrumentKeys, Note } from "./types";
import { checkArray } from "./utils";

export const ToggleFingeringButtons = ({
  activeKeys,
  setActiveKeys,
  currentFingeringKeys,
  currentFingeringNote,
}: {
  activeKeys: InstrumentKeys[] | undefined;
  setActiveKeys: Dispatch<SetStateAction<InstrumentKeys[] | undefined>>;
  currentFingeringKeys: InstrumentKeys[] | InstrumentKeys[][] | undefined;
  currentFingeringNote: Note | undefined;
}) => {
  //event handler
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
    <div className="flex justify-center items-center gap-20">
      <button
        className={`w-12 h-6 bg-slate-600 text-white flex items-center text-center justify-center rounded-md drop-shadow-md ${
          disabled("left") ? "opacity-30" : "opacity-100"
        }`}
        disabled={disabled("left")}
        onClick={() =>
          handleButtonClick("left", currentFingeringKeys as InstrumentKeys[][])
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
          handleButtonClick("right", currentFingeringKeys as InstrumentKeys[][])
        }
      >
        &rarr;
      </button>
    </div>
  );
};
