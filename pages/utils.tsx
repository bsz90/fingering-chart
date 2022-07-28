import { InstrumentKeys, KeyGroup, Woodwind } from "./types";

export const checkArray = (
  array: InstrumentKeys[],
  currentInstrument: Woodwind
) => {
  return (
    array.every((key) => currentInstrument.activeKeys.includes(key)) &&
    array.length === currentInstrument.activeKeys.length
  );
};

export const checkNestedArray = (
  nestedArray: InstrumentKeys[][],
  currentInstrument: Woodwind
) => {
  return nestedArray.some((array) => checkArray(array, currentInstrument));
};
