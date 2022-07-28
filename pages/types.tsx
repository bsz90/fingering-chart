export type Woodwind = {
  name: InstrumentName;
  range: { lowestNote: Notes; highestNote: Notes };
  activeKeys: InstrumentKeys[];
  // keyGroups: KeyGroup[];
  // fingerings: Partial<Record<Notes, InstrumentKeys[] | InstrumentKeys[][]>>;
  clef: Clef;
};

export type KeyGroup = {
  groupName: InstrumentKeyGroup;
  section: Section;
  position: Position;
  keys: {
    name: InstrumentKeys;
    className: string;
  }[];
};

export enum Section {
  TOP,
  BOTTOM,
}

export enum Position {
  LEFT,
  CENTER,
  RIGHT,
}

type NoteName = string;
type Enharmonics = string[];
type StaffPosition = number;

export type Range = [NoteName, Enharmonics, StaffPosition][];

export type Note = {
  name: string | string[];
  staffPosition: Notes;
};

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
  Db7,
  D7,
  Eb7,
  E7,
  F7,
  Gb7,
  G7,
  Ab7,
  A7,
  Bb7,
  B7,
  C8,
}

export enum Clef {
  TREBLE = "treble",
  BASS = "Bass",
}

// instrument specific enums

export enum InstrumentName {
  FLUTE = "Flute",
  OBOE = "Oboe",
  CLARINET = "Clarinet",
  SAXOPHONE = "Saxophone",
  BASSOON = "Bassoon",
  TRUMPET = "Trumpet",
  FRENCH_HORN = "French Horn",
  TROMBONE = "Trombone",
  TUBA = "Tuba",
}

export type InstrumentKeys = FluteKeys | SaxophoneKeys | ClarinetKeys;

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

//needs to be done
export enum ClarinetKeys {
  THUMB = "Thumb",
  REGISTER = "Register",
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

export type InstrumentKeyGroup = FluteKeyGroup | SaxophoneKeyGroup;

export enum FluteKeyGroup {
  LEFT_THUMB,
  LEFT_HAND_MAIN,
  LEFT_HAND_PINKY,
  RIGHT_HAND_MAIN,
  RIGHT_HAND_TRILL,
  RIGHT_HAND_PINKY,
}

export enum SaxophoneKeyGroup {
  LEFT_THUMB,
  LEFT_HAND_MAIN,
  LEFT_HAND_PALM,
  LEFT_HAND_PINKY,
  RIGHT_HAND_MAIN,
  RIGHT_HAND_SIDE,
}
