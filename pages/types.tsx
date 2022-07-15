import { CSSProperties } from "react";

export type Woodwind = {
  name: string;
  range: { lowestNote: Notes; highestNote: Notes };
  activeKeys: SaxophoneKeys[];
  keyGroups: KeyGroup[];
  fingerings: Partial<Record<Notes, SaxophoneKeys[] | SaxophoneKeys[][]>>;
  clef: Clef;
};

export type KeyGroup = {
  group: string;
  section: Section;
  position: Position;
  keys: {
    name: SaxophoneKeys;
    style: CSSProperties;
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

export enum SaxophoneKeys {
  OCTAVEKEY = "OCTAVEKEY",
  FRONT_F_KEY = "FRONTFKEY",
  LEFT_FIRST_FINGER_KEY = "LEFT_FIRST_FINGER_KEY",
  BISKEY = "BISKEY",
  LEFTSECONDFINGERKEY = "LEFTSECONDFINGERKEY",
  LEFTTHIRDFINGERKEY = "LEFTTHIRDFINGERKEY",
  EbPALMKEY = "EbPALMKEY",
  DPALMKEY = "DPALMKEY",
  FPALMKEY = "FPALMKEY",
  GSHARPKEY = "G#KEY",
  LOWCSHARPKEY = "LOWC#KEY",
  LOWBKEY = "LOWBKEY",
  LOWBbKEY = "LOWBbKEY",
  RIGHTFIRSTFINGERKEY = "RIGHTFIRSTFINGERKEY",
  RIGHTSECONDFINGERKEY = "RIGHTSECONDFINGERKEY",
  RIGHTTHIRDFINGERKEY = "RIGHTTHIRDFINGERKEY",
  ESIDEKEY = "ESIDEKEY",
  CSIDEKEY = "CSIDEKEY",
  BbSIDEKEY = "BbSIDEKEY",
  HIGHFSHARPKEY = "HIGHFSHARPKEY",
  ALTFKEY = "ALTFKEY",
  LOWEbKEY = "LOWEbKEY",
  LOWCKEY = "LOWCKEY",
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
  TREBLE,
  BASS,
}
