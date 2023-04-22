import { SetState } from "immer/dist/internal";
import { Dispatch, SetStateAction } from "react";
import { BrassFingeringChart } from "./BrassFingeringChart";
import { SingleReedFingeringChart } from "./SingleReedFingeringChart";
import {
  BrassInstrument,
  DisplaySettingAction,
  DisplaySettings,
  Instrument,
  InstrumentKeys,
  InstrumentProp,
  InstrumentPropAction,
  InstrumentProps,
  NoteRegex,
  Notes,
  WoodwindInstrument,
} from "./types";

export const deepCopyFingerings = (
  obj: Partial<Record<Notes, InstrumentKeys[][]>>
) => {
  const keys = Object.keys(obj);
  const newObj: Partial<Record<Notes, InstrumentKeys[][]>> = {};

  for (let i = 0; i < keys.length; i++) {
    const array = obj[+keys[i] as Notes];
    if (!array) continue;

    newObj[+keys[i] as Notes] = deepCopyArray(array);
  }
  return newObj;
};

export const deepCopyArray = (array: any[]) => [...array.map((item) => item)];

export const likeArrays = (
  array: InstrumentKeys[],
  activeKeys: InstrumentKeys[] | undefined
) => {
  if (!activeKeys) return array.length === 0;

  return (
    array.every((key) => activeKeys.includes(key)) &&
    array.length === activeKeys.length
  );
};

export const checkIfSameFingerings = (
  fingering: InstrumentKeys[][] | undefined,
  activeKeys: InstrumentKeys[] | undefined
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
  standardFingerings: Partial<Record<Notes, InstrumentKeys[][]>>,
  currentAdditionalFingerings: {
    type: InstrumentProp;
    fingerings: Partial<Record<Notes, InstrumentKeys[][]>>;
  }[],
  currentInstrumentProps: InstrumentProps
) => {
  //find all props that are true in display state
  const trueProps = Object.entries(currentInstrumentProps)
    .filter(([instrumentProp, boolean]) => boolean)
    .map(([instrumentProp, boolean]) => instrumentProp);

  //function to get an array of fingerings based on trueProps
  const getFingeringsToAdd = (
    prop: string,
    fingerings: {
      type: InstrumentProp;
      fingerings: Partial<Record<Notes, InstrumentKeys[][]>>;
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
  let newObj: Partial<Record<Notes, InstrumentKeys[][]>> =
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
