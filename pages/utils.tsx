import { Instrument, InstrumentKeys, KeyGroup, Note } from "./types";

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

export const checkIfSameFingerings = (
  fingering: InstrumentKeys[] | InstrumentKeys[][] | undefined,
  activeKeys: InstrumentKeys[] | undefined
) => {
  if (fingering) {
    if (typeof fingering[0] === "string") {
      return checkArray(fingering as InstrumentKeys[], activeKeys);
    }
    return checkNestedArray(fingering as InstrumentKeys[][], activeKeys);
  }
  return false;
};

export const createUniqueKey = (a: string, b: number | string) => (a += b);

//converts constant into a useable string
export const match = (note: Note | undefined) => {
  const regex = /([A-G])(♭|♯)?(\d)/;
  if (note) {
    if (typeof note.name === "string") {
      return note.name.match(regex);
    }
    return note.name[0].match(regex);
  }
};

//gets regex from note string
export const getRegex = (note: Note | undefined) => {
  if (note) {
    const regex = match(note);
    if (regex) {
      const [_, note, modifier, octave] = regex;
      return { note, modifier, octave };
    }
  }
};

// sorts noteArray for display
export const sortNoteNames = (stringA: string, stringB: string) => {
  const hasAccidental = (string: string) => {
    if (string.includes("♯") || string.includes("♭")) return true;
    return false;
  };

  if (hasAccidental(stringA) && !hasAccidental(stringB)) {
    return 1;
  }
  if (!hasAccidental(stringA) && hasAccidental(stringB)) {
    return -1;
  }
  return 0;
};
