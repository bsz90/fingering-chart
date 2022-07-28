import { Instrument, InstrumentKeys, KeyGroup } from "./types";

export const checkArray = (
  array: InstrumentKeys[],
  activeKeys: InstrumentKeys[] | undefined
) => {
  if (activeKeys) {
    return (
      array.every((key) => activeKeys.includes(key)) &&
      array.length === activeKeys.length
    );
  }
  return array.length === 0;
};

export const checkNestedArray = (
  nestedArray: InstrumentKeys[][],
  activeKeys: InstrumentKeys[] | undefined
) => {
  return nestedArray.some((array) => checkArray(array, activeKeys));
};

export const createUniqueKey = (a: string, b: number | string) => (a += b);
