// instrument specific enums
export type Instrument = WoodwindInstrument | BrassInstrument;

export enum WoodwindInstrument {
  FLUTE = "Flute",
  OBOE = "Oboe",
  CLARINET = "Clarinet",
  SAXOPHONE = "Saxophone",
  BASSOON = "Bassoon",
}

export enum BrassInstrument {
  TRUMPET = "Trumpet",
  FRENCH_HORN = "French Horn",
  TROMBONE = "Trombone",
  TUBA = "Tuba",
}

export type InstrumentRange = {
  lowestNote: Notes;
  highestNote: Notes;
};

export enum Clef {
  TREBLE = "treble",
  BASS = "bass",
}

export type WoodwindKeyGroup = {
  groupName: InstrumentKeyGroup;
  section: Section;
  position: Position;
  keys: {
    name: InstrumentKeys;
    className: string;
  }[];
};

export type BrassKeyGroup = {
  trigger: boolean;
  fourthValve: boolean;
  containerClassName: string;
  keys: { name: InstrumentKeys; className: string }[];
}[];

export enum Section {
  TOP,
  BOTTOM,
}

export enum Position {
  LEFT,
  CENTER,
  RIGHT,
}

export type InstrumentKeys =
  | FluteKeys
  | SaxophoneKeys
  | ClarinetKeys
  | TrumpetValves
  | FrenchHornValves
  | TrombonePositions
  | TubaValves;

export enum FluteKeys {
  THUMB_Bb = "Thumb B♭",
  THUMB_B = "Thumb B♮",
  LEFT_FIRST_FINGER = "Left First Finger",
  LEFT_SECOND_FINGER = "Left Second Finger",
  LEFT_THIRD_FINGER = "Left Third Finger",
  G_SHARP = "G♯",
  RIGHT_FIRST_FINGER = "Right First Finger",
  RIGHT_SECOND_FINGER = "Right Second Finger",
  RIGHT_THIRD_FINGER = "Right Third Finger",
  Bb_TRILL = "B♭ Trill",
  C_SHARP_TRILL = "C♯ Trill",
  D_TRILL = "D Trill",
  D_SHARP_TRILL = "D♯ Trill",
  Eb = "E♭",
  LOW_C_SHARP = "Low C♯",
  LOW_C = "Low C",
  LOW_B = "Low B",
}

export enum ClarinetKeys {
  THUMB = "Thumb",
  REGISTER = "Register",
  LEFT_FIRST_FINGER = "Left First Finger",
  LEFT_SECOND_FINGER = "Left Second Finger",
  LEFT_THIRD_FINGER = "Left Third Finger",
  SIDE_G_SHARP = "Side G♯",
  Eb_Bb_SLIVER = "E♭/B♭ Sliver",
  A = "A",
  E_B = "E/B",
  F_C = "F/C",
  F_SHARP_C_SHARP = "F♯/C♯",
  C_SHARP_G_SHARP = "C♯/G♯",
  RIGHT_FIRST_SIDE = "Right First Side",
  RIGHT_SECOND_SIDE = "Right Second Side",
  RIGHT_THIRD_SIDE = "Right Third Side",
  RIGHT_FOURTH_SIDE = "Right Fourth Side",
  RIGHT_FIRST_FINGER = "Right First Finger",
  RIGHT_SECOND_FINGER = "Right Second Finger",
  RIGHT_THIRD_FINGER = "Right Third Finger",
  B_F_SHARP_SLIVER = "B/F♯ Sliver",
  LOW_E_B = "Low E/B",
  LOW_F_C = "Low F/C",
  LOW_F_SHARP_C_SHARP = "Low F♯/C♯",
  LOW_G_SHARP_D_SHARP = "Low G♯/D♯",
}

export enum SaxophoneKeys {
  OCTAVE = "Octave",
  FRONT_F = "Front F",
  LEFT_FIRST_FINGER = "Left First Finger",
  BIS = "Bis",
  LEFT_SECOND_FINGER = "Left Second Finger",
  LEFT_THIRD_FINGER = "Left Third Finger",
  Eb_PALM = "E♭ Palm",
  D_PALM = "D Palm",
  F_PALM = "F Palm",
  G_SHARP = "G♯",
  LOW_C_SHARP = "Low C♯",
  LOW_B = "Low B",
  LOW_Bb = "Low B♭",
  RIGHT_FIRST_FINGER = "Right First Finger",
  RIGHT_SECOND_FINGER = "Right Second Finger",
  RIGHT_THIRD_FINGER = "Right Third Finger",
  E_SIDE = "E Side",
  C_SIDE = "C Side",
  Bb_SIDE = "B♭ Side",
  HIGH_F_SHARP = "High F♯",
  ALT_F = "Alt F",
  LOW_Eb = "Low E♭",
  LOW_C = "Low C",
}

export enum TrumpetValves {
  FIRST = "First",
  SECOND = "Second",
  THIRD = "Third",
}

export enum FrenchHornValves {
  FIRST = "First",
  SECOND = "Second",
  THIRD = "Third",
  TRIGGER = "Trigger",
}

export enum TrombonePositions {
  FIRST = "First",
  SECOND = "Second",
  THIRD = "Third",
  FOURTH = "Fourth",
  FIFTH = "Fifth",
  SIXTH = "Sixth",
  SEVENTH = "Seventh",
  TRIGGER = "Trigger",
}

export enum TubaValves {
  FIRST = "First",
  SECOND = "Second",
  THIRD = "Third",
  FOURTH = "Fourth",
}

export type InstrumentKeyGroup =
  | FluteKeyGroup
  | SaxophoneKeyGroup
  | ClarinetKeyGroup;

export enum FluteKeyGroup {
  LEFT_THUMB,
  LEFT_HAND_MAIN,
  LEFT_HAND_PINKY,
  RIGHT_HAND_MAIN,
  RIGHT_HAND_TRILL,
  RIGHT_HAND_PINKY,
}

export enum ClarinetKeyGroup {
  LEFT_THUMB,
  LEFT_HAND_MAIN,
  LEFT_HAND_SIDE,
  LEFT_HAND_PINKY,
  RIGHT_HAND_SIDE,
  RIGHT_HAND_MAIN,
}

export enum SaxophoneKeyGroup {
  LEFT_THUMB,
  LEFT_HAND_MAIN,
  LEFT_HAND_PALM,
  LEFT_HAND_PINKY,
  RIGHT_HAND_MAIN,
  RIGHT_HAND_SIDE,
}

type NoteName = string;
type Enharmonics = string[];
type StaffPosition = number;

export type Range = [NoteName, Enharmonics, StaffPosition][];

export type Note = {
  name: string[];
  staffPosition: Notes;
};

export type NoteRegex = { note: string; modifier: string; octave: string };

export enum Notes {
  A0,
  Bb0,
  B0,
  C1,
  Db1,
  D1,
  Eb1,
  E1,
  F1,
  Gb1,
  G1,
  Ab1,
  A1,
  Bb1,
  B1,
  C2,
  Db2,
  D2,
  Eb2,
  E2,
  F2,
  Gb2,
  G2,
  Ab2,
  A2,
  Bb2,
  B2,
  C3,
  Db3,
  D3,
  Eb3,
  E3,
  F3,
  Gb3,
  G3,
  Ab3,
  A3,
  Bb3,
  B3,
  C4,
  Db4,
  D4,
  Eb4,
  E4,
  F4,
  Gb4,
  G4,
  Ab4,
  A4,
  Bb4,
  B4,
  C5,
  Db5,
  D5,
  Eb5,
  E5,
  F5,
  Gb5,
  G5,
  Ab5,
  A5,
  Bb5,
  B5,
  C6,
  Db6,
  D6,
  Eb6,
  E6,
  F6,
  Gb6,
  G6,
  Ab6,
  A6,
  Bb6,
  B6,
  C7,
}

export type DisplayState = {
  [Toggle.TRILL_KEYS]?: boolean;
  [Toggle.TRIGGER]?: boolean;
  [Toggle.FOURTH_VALVE]?: boolean;
};

export type DisplayType = Toggle;

export enum Toggle {
  FOURTH_VALVE = "Fourth Valve",
  TRIGGER = "Trigger",
  TRILL_KEYS = "Trill Keys",
  NEW_INSTRUMENT = "New Instrument",
}

export type Action = {
  type: DisplayType;
  payload: DisplayState;
};

export enum Button {
  UP = "UP",
  DOWN = "DOWN",
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}
