import { SetState } from "immer/dist/internal";
import { Dispatch, SetStateAction } from "react";
import { BrassFingeringChart } from "./BrassFingeringChart";
import { SingleReedFingeringChart } from "./SingleReedFingeringChart";
import {
  BrassInstrument,
  DisplaySettingAction,
  DisplaySettings,
  Instrument,
  InstrumentKeyNames,
  InstrumentProp,
  InstrumentPropAction,
  InstrumentProps,
  NoteRegex,
  Notes,
  WoodwindInstrument,
} from "./types";

export const deepCopyFingerings = (
  obj: Partial<Record<Notes, InstrumentKeyNames[][]>>
) => {
  const keys = Object.keys(obj);
  const newObj: Partial<Record<Notes, InstrumentKeyNames[][]>> = {};

  for (let i = 0; i < keys.length; i++) {
    const array = obj[+keys[i] as Notes];
    if (!array) continue;

    newObj[+keys[i] as Notes] = deepCopyArray(array);
  }
  return newObj;
};

export function deepCopyObject<T extends Record<string, unknown>>(obj: T): T {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopyObject(item)) as unknown as T;
  }

  const copy = {} as T;

  Object.keys(obj).forEach((key) => {
    const value = obj[key] as T[keyof T];

    copy[key as keyof T] = deepCopyObject(value as T) as T[keyof T];
  });

  return copy as T;
}

export const deepCopyArray = (array: any[]) => [...array.map((item) => item)];

export const likeArrays = (
  array: InstrumentKeyNames[],
  activeKeys: InstrumentKeyNames[] | undefined
) => {
  if (!activeKeys) return array.length === 0;

  return (
    array.every((key) => activeKeys.includes(key)) &&
    array.length === activeKeys.length
  );
};

export const checkIfSameFingerings = (
  fingering: InstrumentKeyNames[][] | undefined,
  activeKeys: InstrumentKeyNames[] | undefined
) => {
  if (!fingering) return false;

  return fingering.some((array) => likeArrays(array, activeKeys));
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

//function to join standardFingerings and additionalFingerings based on currentInstrumentProps
export const addAdditionalFingerings = (
  trueProps: InstrumentProp[],
  standardFingerings: Partial<Record<Notes, InstrumentKeyNames[][]>>,
  currentAdditionalFingerings: {
    type: InstrumentProp;
    fingerings: Partial<Record<Notes, InstrumentKeyNames[][]>>;
  }[]
) => {
  //function to get an array of fingerings based on trueProps
  const getFingeringsToAdd = (
    prop: InstrumentProp,
    fingerings: {
      type: InstrumentProp;
      fingerings: Partial<Record<Notes, InstrumentKeyNames[][]>>;
    }[]
  ) =>
    fingerings
      .filter((additionalFingerings) => additionalFingerings.type === prop)
      .map((additionalFingerings) => additionalFingerings.fingerings);

  //the actual arrays of all additionalFingerings
  const fingeringsToAdd = trueProps
    .map((trueProp) =>
      getFingeringsToAdd(trueProp, currentAdditionalFingerings)
    )
    .flatMap((arrayOfFingerings) => arrayOfFingerings)
    .flatMap((fingerings) => Object.entries(fingerings));

  // newObj to return
  let newObj: Partial<Record<Notes, InstrumentKeyNames[][]>> =
    deepCopyFingerings(standardFingerings);

  //start function logic
  for (let i = 0; i < fingeringsToAdd.length; i++) {
    const array = fingeringsToAdd[i];
    const fingering = newObj[+array[0] as Notes];
    if (!fingering) {
      newObj[+array[0] as Notes] = array[1];
      continue;
    }
    const newFingering = [...array[1], ...fingering];
    newObj[+array[0] as Notes] = newFingering;
  }
  return newObj;
};

export const determineFingeringChart = (
  currentInstrument: Instrument,
  setCurrentInstrument: Dispatch<SetStateAction<Instrument>>,
  currentInstrumentProps: InstrumentProps,
  currentInstrumentPropsDispatch: Dispatch<InstrumentPropAction>,
  displaySettings: DisplaySettings,
  displaySettingsDispatch: Dispatch<DisplaySettingAction>
) => {
  if (isWoodwind(currentInstrument)) {
    return (
      <SingleReedFingeringChart
        currentInstrument={currentInstrument as WoodwindInstrument}
        setCurrentInstrument={setCurrentInstrument}
        currentInstrumentProps={currentInstrumentProps}
        currentInstrumentPropsDispatch={currentInstrumentPropsDispatch}
        displaySettings={displaySettings}
        displaySettingsDispatch={displaySettingsDispatch}
      />
    );
  }
  if (isBrass(currentInstrument)) {
    return (
      <BrassFingeringChart
        currentInstrument={currentInstrument as BrassInstrument}
        setCurrentInstrument={setCurrentInstrument}
        currentInstrumentProps={currentInstrumentProps}
        currentInstrumentPropsDispatch={currentInstrumentPropsDispatch}
        displaySettings={displaySettings}
        displaySettingsDispatch={displaySettingsDispatch}
      />
    );
  }
  throw new Error();
};

export const comebineKeys = (
  trueProps: InstrumentProp[],
  keys: {
    name: InstrumentKeyNames;
    className: string;
  }[],
  additionalKeys: {
    type: InstrumentProp;
    name: InstrumentKeyNames;
    className: string;
  }[]
) => {
  const currentAdditionalKeys = additionalKeys.filter((item) =>
    trueProps.includes(item.type)
  );

  const newKeys = keys;

  currentAdditionalKeys.forEach((key) => {
    key.type === InstrumentProp.TRIGGER
      ? newKeys.unshift(key)
      : newKeys.push(key);
  });

  return newKeys;
};

export function getTrueProps(instrumentProps: InstrumentProps) {
  return Object.entries(instrumentProps)
    .filter(([propName, boolean]) => boolean)
    .map(([propName]) => propName as InstrumentProp);
}
