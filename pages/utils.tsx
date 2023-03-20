import {
  BrassInstrument,
  Instrument,
  InstrumentKeys,
  NoteRegex,
  WoodwindInstrument,
} from "./types";

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
    if (typeof fingering[0] === "string" || fingering.length === 0) {
      return checkArray(fingering as InstrumentKeys[], activeKeys);
    }
    return checkNestedArray(fingering as InstrumentKeys[][], activeKeys);
  }
  return false;
};

export const createUniqueKey = (a: string, b: number | string) => (a += b);

//converts constant into a useable string
export const match = (noteName: string) => {
  const regex = /([A-G])(♭|♯)?(\d)/;
  return noteName.match(regex);
};

//gets regex from note string
export const getRegex = (noteName: string[]) => {
  const regex = noteName.map((string) => match(string));

  return regex
    .filter((arrayItem) => arrayItem)
    .map((matchArray) => {
      if (matchArray) {
        const [_, note, modifier, octave] = matchArray;
        return { note, modifier, octave };
      }
    }) as NoteRegex[];
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

// checks if instrument is a Brass instrument
export const isBrass = (currentInstrument: Instrument) =>
  currentInstrument === BrassInstrument.TRUMPET ||
  currentInstrument === BrassInstrument.TROMBONE ||
  currentInstrument === BrassInstrument.FRENCH_HORN ||
  currentInstrument === BrassInstrument.TUBA;

// checks if instrument is a Woodwind instrument
export const isWoodwind = (currentInstrument: Instrument) =>
  currentInstrument === WoodwindInstrument.SAXOPHONE ||
  currentInstrument === WoodwindInstrument.BASSOON ||
  currentInstrument === WoodwindInstrument.CLARINET ||
  currentInstrument === WoodwindInstrument.OBOE ||
  currentInstrument === WoodwindInstrument.FLUTE;
