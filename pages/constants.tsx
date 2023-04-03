import {
  Clef,
  FluteKeyGroup,
  FluteKeys,
  Instrument,
  WoodwindKeyGroup,
  Note,
  Notes,
  Position,
  SaxophoneKeyGroup,
  SaxophoneKeys,
  Section,
  InstrumentRange,
  InstrumentKeys,
  BrassInstrument,
  WoodwindInstrument,
  TrumpetValves,
  ClarinetKeyGroup,
  ClarinetKeys,
  BrassKeyGroup,
  FrenchHornValves,
  TubaValves,
  TrombonePositions,
} from "./types";
import Bassoon from "./icons/bassoon.svg";
import Clarinet from "./icons/clarinet.svg";
import Flute from "./icons/flute.svg";
import FrenchHorn from "./icons/frenchhorn.svg";
import Oboe from "./icons/oboe.svg";
import Saxophone from "./icons/saxophone.svg";
import Trombone from "./icons/trombone.svg";
import Trumpet from "./icons/trumpet.svg";
import Tuba from "./icons/tuba.svg";

export const instruments = [
  WoodwindInstrument.FLUTE,
  WoodwindInstrument.OBOE,
  WoodwindInstrument.CLARINET,
  WoodwindInstrument.SAXOPHONE,
  WoodwindInstrument.BASSOON,
  BrassInstrument.TRUMPET,
  BrassInstrument.FRENCH_HORN,
  BrassInstrument.TROMBONE,
  BrassInstrument.TUBA,
];

export const instrumentRanges: { [key in Instrument]: InstrumentRange } = {
  [WoodwindInstrument.FLUTE]: {
    lowestNote: Notes.C4,
    highestNote: Notes.C7,
  },
  [WoodwindInstrument.OBOE]: {
    lowestNote: Notes.C4,
    highestNote: Notes.C7,
  },
  [WoodwindInstrument.CLARINET]: {
    lowestNote: Notes.E3,
    highestNote: Notes.A6,
  },
  [WoodwindInstrument.SAXOPHONE]: {
    lowestNote: Notes.Bb3,
    highestNote: Notes.F6,
  },
  [WoodwindInstrument.BASSOON]: {
    lowestNote: Notes.C4,
    highestNote: Notes.C7,
  },
  [BrassInstrument.TRUMPET]: {
    lowestNote: Notes.C4,
    highestNote: Notes.C7,
  },
  [BrassInstrument.FRENCH_HORN]: {
    lowestNote: Notes.C4,
    highestNote: Notes.C7,
  },
  [BrassInstrument.TROMBONE]: {
    lowestNote: Notes.C4,
    highestNote: Notes.C7,
  },
  [BrassInstrument.TUBA]: {
    lowestNote: Notes.C4,
    highestNote: Notes.C7,
  },
};

export const instrumentClef: { [key in Instrument]: Clef } = {
  [WoodwindInstrument.FLUTE]: Clef.TREBLE,
  [WoodwindInstrument.OBOE]: Clef.TREBLE,
  [WoodwindInstrument.CLARINET]: Clef.TREBLE,
  [WoodwindInstrument.SAXOPHONE]: Clef.TREBLE,
  [WoodwindInstrument.BASSOON]: Clef.BASS,
  [BrassInstrument.TRUMPET]: Clef.TREBLE,
  [BrassInstrument.FRENCH_HORN]: Clef.TREBLE,
  [BrassInstrument.TROMBONE]: Clef.BASS,
  [BrassInstrument.TUBA]: Clef.BASS,
};

export const woodwindKeyDiagrams: {
  [key in WoodwindInstrument]: WoodwindKeyGroup[];
} = {
  [WoodwindInstrument.FLUTE]: [
    {
      groupName: FluteKeyGroup.LEFT_THUMB,
      section: Section.TOP,
      position: Position.LEFT,
      keys: [
        {
          name: FluteKeys.THUMB_Bb,
          className: "rounded-full h-[40px] w-[40px] mb-[20px]",
        },
        {
          name: FluteKeys.THUMB_B,
          className: "rounded-[10px] h-[62px] w-[24px] mb-[150px]",
        },
      ],
    },
    {
      groupName: FluteKeyGroup.LEFT_HAND_MAIN,
      section: Section.TOP,
      position: Position.CENTER,
      keys: [
        {
          name: FluteKeys.LEFT_FIRST_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mb-[30px]",
        },
        {
          name: FluteKeys.LEFT_SECOND_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mb-[30px]",
        },
        {
          name: FluteKeys.LEFT_THIRD_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mb-[50px]",
        },
      ],
    },
    {
      groupName: FluteKeyGroup.LEFT_HAND_PINKY,
      section: Section.TOP,
      position: Position.RIGHT,
      keys: [
        {
          name: FluteKeys.G_SHARP,
          className: "rounded-[10px] h-[24px] w-[48px] mr-[48px] mt-[-40px]",
        },
      ],
    },
    {
      groupName: FluteKeyGroup.RIGHT_HAND_MAIN,
      section: Section.BOTTOM,
      position: Position.CENTER,
      keys: [
        {
          name: FluteKeys.RIGHT_FIRST_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mt-[50px]",
        },
        {
          name: FluteKeys.RIGHT_SECOND_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mt-[30px]",
        },
        {
          name: FluteKeys.RIGHT_THIRD_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mt-[30px]",
        },
      ],
    },
    {
      groupName: FluteKeyGroup.RIGHT_HAND_TRILL,
      section: Section.BOTTOM,
      position: Position.RIGHT,
      keys: [
        {
          name: FluteKeys.Bb_TRILL,
          className: "rounded-[10px] h-[24px] w-[48px] mt-[20px] mr-[275px]",
        },
        {
          name: FluteKeys.D_TRILL,
          className: "rounded-[10px] h-[24px] w-[48px] mt-[73px] mr-[275px]",
        },
        {
          name: FluteKeys.D_SHARP_TRILL,
          className: "rounded-[10px] h-[24px] w-[48px] mt-[68px] mr-[275px]",
        },
      ],
    },
    {
      groupName: FluteKeyGroup.RIGHT_HAND_PINKY,
      section: Section.BOTTOM,
      position: Position.LEFT,
      keys: [
        {
          name: FluteKeys.Eb,
          className: "rounded-[10px] h-[36px] w-[72px] mt-[200px]",
        },
        {
          name: FluteKeys.LOW_C_SHARP,
          className: "rounded-[10px] h-[48px] w-[24px] mr-[48px]",
        },
        {
          name: FluteKeys.LOW_C,
          className: "rounded-[10px] h-[48px] w-[24px] mt-[-48px]",
        },
        {
          name: FluteKeys.LOW_B,
          className: "rounded-[10px] h-[48px] w-[24px] mt-[-48px] mr-[-48px]",
        },
      ],
    },
  ],
  [WoodwindInstrument.OBOE]: [
    {
      groupName: FluteKeyGroup.LEFT_THUMB,
      section: Section.TOP,
      position: Position.LEFT,
      keys: [
        {
          name: FluteKeys.THUMB_Bb,
          className: "rounded-[10px] h-[62px] w-[24px] mb-[200px]",
        },
        {
          name: FluteKeys.THUMB_B,
          className: "rounded-[10px] h-[62px] w-[24px] mb-[200px]",
        },
      ],
    },
  ],
  [WoodwindInstrument.CLARINET]: [
    {
      groupName: ClarinetKeyGroup.LEFT_THUMB,
      section: Section.TOP,
      position: Position.LEFT,
      keys: [
        {
          name: ClarinetKeys.REGISTER,
          className: "rounded-[10px] h-[62px] w-[24px] mb-[20px]",
        },
        {
          name: ClarinetKeys.THUMB,
          className: "rounded-full h-[40px] w-[40px] mb-[180px]",
        },
      ],
    },
    {
      groupName: ClarinetKeyGroup.LEFT_HAND_MAIN,
      section: Section.TOP,
      position: Position.CENTER,
      keys: [
        {
          name: ClarinetKeys.A,
          className: "rounded-[10px] h-[48px] w-[24px] mb-[20px]",
        },
        {
          name: ClarinetKeys.LEFT_FIRST_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mb-[30px]",
        },
        {
          name: ClarinetKeys.LEFT_SECOND_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mb-[30px]",
        },
        {
          name: ClarinetKeys.LEFT_THIRD_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mb-[50px]",
        },
      ],
    },
    {
      groupName: ClarinetKeyGroup.LEFT_HAND_SIDE,
      section: Section.TOP,
      position: Position.RIGHT,
      keys: [
        {
          name: ClarinetKeys.SIDE_G_SHARP,
          className: "rounded-[10px] h-[62px] w-[24px] mb-[163px] ml-[-100px]",
        },

        {
          name: ClarinetKeys.Eb_Bb_SLIVER,
          className: "rounded-[10px] h-[24px] w-[62px] mb-[73px] ml-[-100px]",
        },
        {
          name: ClarinetKeys.C_SHARP_G_SHARP,
          className: "rounded-[10px] h-[24px] w-[62px] mb-[20px] ml-[-100px]",
        },
      ],
    },
    {
      groupName: ClarinetKeyGroup.RIGHT_HAND_SIDE,
      section: Section.BOTTOM,
      position: Position.LEFT,
      keys: [
        {
          name: ClarinetKeys.RIGHT_FIRST_SIDE,
          className: "rounded-[10px] h-[24px] w-[48px] mt-[-40px]",
        },
        {
          name: ClarinetKeys.RIGHT_SECOND_SIDE,
          className: "rounded-[10px] h-[24px] w-[48px]",
        },
        {
          name: ClarinetKeys.RIGHT_THIRD_SIDE,
          className: "rounded-[10px] h-[24px] w-[48px]",
        },
        {
          name: ClarinetKeys.RIGHT_FOURTH_SIDE,
          className: "rounded-[10px] h-[24px] w-[48px]",
        },
        {
          name: ClarinetKeys.B_F_SHARP_SLIVER,
          className: "rounded-[10px] h-[24px] w-[62px] mt-[153px] ml-[100px] ",
        },
        {
          name: ClarinetKeys.LOW_G_SHARP_D_SHARP,
          className: "rounded-[10px] h-[30px] w-[62px] mt-[25px] ml-[62px]",
        },
        {
          name: ClarinetKeys.LOW_F_SHARP_C_SHARP,
          className: "rounded-[10px] h-[30px] w-[62px] mt-[-30px] ml-[-62px]",
        },
        {
          name: ClarinetKeys.LOW_F_C,
          className: "rounded-[10px] h-[30px] w-[62px] ml-[-62px]",
        },
        {
          name: ClarinetKeys.LOW_E_B,
          className: "rounded-[10px] h-[30px] w-[62px] mt-[-30px] ml-[62px]",
        },
      ],
    },
    {
      groupName: ClarinetKeyGroup.RIGHT_HAND_MAIN,
      section: Section.BOTTOM,
      position: Position.CENTER,
      keys: [
        {
          name: ClarinetKeys.RIGHT_FIRST_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mt-[50px]",
        },
        {
          name: ClarinetKeys.RIGHT_SECOND_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mt-[30px]",
        },
        {
          name: ClarinetKeys.RIGHT_THIRD_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mt-[30px]",
        },
      ],
    },
    {
      groupName: ClarinetKeyGroup.LEFT_HAND_PINKY,
      section: Section.BOTTOM,
      position: Position.RIGHT,
      keys: [
        {
          name: ClarinetKeys.F_C,
          className: "rounded-[10px] h-[24px] w-[48px] mt-[20px]",
        },
        {
          name: ClarinetKeys.F_SHARP_C_SHARP,
          className: "rounded-[10px] h-[48px] w-[24px] ml-[24px]",
        },
        {
          name: ClarinetKeys.E_B,
          className: "rounded-[10px] h-[48px] w-[24px] mt-[-48px] ml-[-24px]",
        },
      ],
    },
  ],
  [WoodwindInstrument.SAXOPHONE]: [
    {
      groupName: SaxophoneKeyGroup.LEFT_THUMB,
      section: Section.TOP,
      position: Position.LEFT,
      keys: [
        {
          name: SaxophoneKeys.OCTAVE,
          className: "rounded-[10px] h-[62px] w-[24px] mb-[200px]",
        },
      ],
    },
    {
      groupName: SaxophoneKeyGroup.LEFT_HAND_MAIN,
      section: Section.TOP,
      position: Position.CENTER,
      keys: [
        {
          name: SaxophoneKeys.FRONT_F,
          className: "rounded-[50%] h-[24px] w-[24px] mb-[10px]",
        },
        {
          name: SaxophoneKeys.LEFT_FIRST_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mb-[10px]",
        },
        {
          name: SaxophoneKeys.BIS,
          className: "rounded-[50%] h-[24px] w-[24px] mb-[10px]",
        },
        {
          name: SaxophoneKeys.LEFT_SECOND_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mb-[30px]",
        },
        {
          name: SaxophoneKeys.LEFT_THIRD_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mb-[50px]",
        },
      ],
    },
    {
      groupName: SaxophoneKeyGroup.LEFT_HAND_PALM,
      section: Section.TOP,
      position: Position.RIGHT,
      keys: [
        {
          name: SaxophoneKeys.Eb_PALM,
          className: "rounded-[10px] h-[62px] w-[24px] mb-[-31px]",
        },
        {
          name: SaxophoneKeys.D_PALM,
          className: "rounded-[10px] h-[62px] w-[24px] mb-[-31px] ml-[48px]",
        },
        {
          name: SaxophoneKeys.F_PALM,
          className: "rounded-[10px] h-[62px] w-[24px] mb-[125px]",
        },
      ],
    },
    {
      groupName: SaxophoneKeyGroup.LEFT_HAND_PINKY,
      section: Section.BOTTOM,
      position: Position.RIGHT,
      keys: [
        {
          name: SaxophoneKeys.G_SHARP,
          className: "rounded-[10px] h-[24px] w-[48px] mt-[-32px]",
        },
        {
          name: SaxophoneKeys.LOW_B,
          className: "rounded-[7px] h-[24px] w-[24px] mt-[0px] ml-[24px]",
        },
        {
          name: SaxophoneKeys.LOW_C_SHARP,
          className: "rounded-[7px] h-[24px] w-[24px] mt-[-24px] ml-[-24px]",
        },
        {
          name: SaxophoneKeys.LOW_Bb,
          className: "rounded-[10px] h-[24px] w-[48px] mt-[0px]",
        },
      ],
    },
    {
      groupName: SaxophoneKeyGroup.RIGHT_HAND_MAIN,
      section: Section.BOTTOM,
      position: Position.CENTER,
      keys: [
        {
          name: SaxophoneKeys.RIGHT_FIRST_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mt-[50px]",
        },
        {
          name: SaxophoneKeys.RIGHT_SECOND_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mt-[30px]",
        },
        {
          name: SaxophoneKeys.RIGHT_THIRD_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mt-[30px]",
        },
      ],
    },
    {
      groupName: SaxophoneKeyGroup.RIGHT_HAND_SIDE,
      section: Section.BOTTOM,
      position: Position.LEFT,
      keys: [
        {
          name: SaxophoneKeys.E_SIDE,
          className: "rounded-[10px] h-[48px] w-[24px] mt-[-40px]",
        },
        {
          name: SaxophoneKeys.C_SIDE,
          className: "rounded-[10px] h-[48px] w-[24px]",
        },
        {
          name: SaxophoneKeys.Bb_SIDE,
          className: "rounded-[10px] h-[48px] w-[24px]",
        },
        {
          name: SaxophoneKeys.HIGH_F_SHARP,
          className: "rounded-[10px] h-[24px] w-[48px] mt-[15px] ml-[48px]",
        },
        {
          name: SaxophoneKeys.ALT_F,
          className: "rounded-[10px] h-[24px] w-[48px] mt-[66px] ml-[48px]",
        },
        {
          name: SaxophoneKeys.LOW_Eb,
          className:
            "rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[15px] rounded-br-[15px] h-[25px] w-[40px] mt-[38px]",
        },
        {
          name: SaxophoneKeys.LOW_C,
          className:
            "rounded-bl-[50px] rounded-br-[50px] rounded-tl-[15px] rounded-tr-[15px] h-[25px] w-[40px] mt-[1px]",
        },
      ],
    },
  ],
  [WoodwindInstrument.BASSOON]: [
    {
      groupName: FluteKeyGroup.RIGHT_HAND_MAIN,
      section: Section.BOTTOM,
      position: Position.CENTER,
      keys: [
        {
          name: FluteKeys.RIGHT_FIRST_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mt-[50px]",
        },
        {
          name: FluteKeys.RIGHT_SECOND_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mt-[30px]",
        },
        {
          name: FluteKeys.RIGHT_THIRD_FINGER,
          className: "rounded-[50%] h-[62px] w-[62px] mt-[30px]",
        },
      ],
    },
  ],
};

export const brassDiagrams: { [key in BrassInstrument]: BrassKeyGroup } = {
  [BrassInstrument.TRUMPET]: [
    {
      trigger: false,
      fourthValve: false,
      containerClassName: "flex items-center justify-center gap-8",
      keys: [
        {
          name: TrumpetValves.FIRST,
          className: "rounded-[50%] h-[62px] w-[62px]",
        },
        {
          name: TrumpetValves.SECOND,
          className: "rounded-[50%] h-[62px] w-[62px]",
        },
        {
          name: TrumpetValves.THIRD,
          className: "rounded-[50%] h-[62px] w-[62px]",
        },
      ],
    },
  ],
  [BrassInstrument.FRENCH_HORN]: [
    {
      trigger: true,
      fourthValve: false,
      containerClassName: "flex items-center justify-center gap-8",
      keys: [
        {
          name: FrenchHornValves.TRIGGER,
          className: "rounded-[50%] h-[40px] w-[40px] mb-[20px]",
        },
        {
          name: FrenchHornValves.FIRST,
          className: "rounded-[50%] h-[62px] w-[62px]",
        },
        {
          name: FrenchHornValves.SECOND,
          className: "rounded-[50%] h-[62px] w-[62px]",
        },
        {
          name: FrenchHornValves.THIRD,
          className: "rounded-[50%] h-[62px] w-[62px]",
        },
      ],
    },
  ],
  [BrassInstrument.TROMBONE]: [
    {
      trigger: false,
      fourthValve: false,
      containerClassName: "flex",
      keys: [
        {
          name: TrombonePositions.FIRST,
          className: "h-[62px] w-12 border-x-0",
        },
        {
          name: TrombonePositions.SECOND,
          className: "h-[62px] w-12 border-x-0",
        },
        {
          name: TrombonePositions.THIRD,
          className: "h-[62px] w-12 border-x-0",
        },
        {
          name: TrombonePositions.FOURTH,
          className: "h-[62px] w-12 border-x-0",
        },
        {
          name: TrombonePositions.FIFTH,
          className: "h-[62px] w-12 border-x-0",
        },
        {
          name: TrombonePositions.SIXTH,
          className: "h-[62px] w-12 border-x-0",
        },
        {
          name: TrombonePositions.SEVENTH,
          className: "h-[62px] w-12 border-l-0 rounded-r-lg",
        },
      ],
    },
    {
      trigger: true,
      fourthValve: false,
      containerClassName: "flex",
      keys: [
        {
          name: TrombonePositions.FIRST,
          className: "h-[62px] w-12 border-x-0",
        },
        {
          name: TrombonePositions.SECOND,
          className: "h-[62px] w-12 border-x-0",
        },
        {
          name: TrombonePositions.THIRD,
          className: "h-[62px] w-12 border-x-0",
        },
        {
          name: TrombonePositions.FOURTH,
          className: "h-[62px] w-12 border-x-0",
        },
        {
          name: TrombonePositions.FIFTH,
          className: "h-[62px] w-12 border-x-0",
        },
        {
          name: TrombonePositions.SIXTH,
          className: "h-[62px] w-12 border-x-0",
        },
        {
          name: TrombonePositions.SEVENTH,
          className: "h-[62px] w-12 border-l-0 rounded-r-lg",
        },
      ],
    },
  ],
  [BrassInstrument.TUBA]: [
    {
      trigger: false,
      fourthValve: false,
      containerClassName: "flex items-center justify-center gap-8",
      keys: [
        {
          name: TubaValves.FIRST,
          className: "rounded-[50%] h-[62px] w-[62px]",
        },
        {
          name: TubaValves.SECOND,
          className: "rounded-[50%] h-[62px] w-[62px]",
        },
        {
          name: TubaValves.THIRD,
          className: "rounded-[50%] h-[62px] w-[62px]",
        },
      ],
    },
    {
      trigger: false,
      fourthValve: true,
      containerClassName: "flex items-center justify-center gap-8",
      keys: [
        {
          name: TubaValves.FIRST,
          className: "rounded-[50%] h-[62px] w-[62px]",
        },
        {
          name: TubaValves.SECOND,
          className: "rounded-[50%] h-[62px] w-[62px]",
        },
        {
          name: TubaValves.THIRD,
          className: "rounded-[50%] h-[62px] w-[62px]",
        },
        {
          name: TubaValves.FOURTH,
          className: "rounded-[50%] h-[62px] w-[62px]",
        },
      ],
    },
  ],
};

export const woodwindFingerings: {
  [key in Instrument]: Partial<
    Record<Notes, InstrumentKeys[] | InstrumentKeys[][]>
  >;
} = {
  [WoodwindInstrument.FLUTE]: {
    [Notes.C4]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.RIGHT_SECOND_FINGER,
      FluteKeys.RIGHT_THIRD_FINGER,
      FluteKeys.LOW_C_SHARP,
      FluteKeys.LOW_C,
    ],
    [Notes.Db4]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.RIGHT_SECOND_FINGER,
      FluteKeys.RIGHT_THIRD_FINGER,
      FluteKeys.LOW_C_SHARP,
    ],
    [Notes.D4]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.RIGHT_SECOND_FINGER,
      FluteKeys.RIGHT_THIRD_FINGER,
    ],
    [Notes.Eb4]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.RIGHT_SECOND_FINGER,
      FluteKeys.RIGHT_THIRD_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.E4]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.RIGHT_SECOND_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.F4]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.Gb4]: [
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.RIGHT_THIRD_FINGER,
        FluteKeys.Eb,
      ],
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.RIGHT_SECOND_FINGER,
        FluteKeys.Eb,
      ],
    ],
    [Notes.G4]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.Ab4]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.G_SHARP,
      FluteKeys.Eb,
    ],
    [Notes.A4]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.Bb4]: [
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.RIGHT_FIRST_FINGER,
        FluteKeys.Eb,
      ],

      [FluteKeys.THUMB_Bb, FluteKeys.LEFT_FIRST_FINGER, FluteKeys.Eb],

      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.Bb_TRILL,
        FluteKeys.Eb,
      ],
    ],
    [Notes.B4]: [FluteKeys.THUMB_B, FluteKeys.LEFT_FIRST_FINGER, FluteKeys.Eb],
    [Notes.C5]: [FluteKeys.LEFT_FIRST_FINGER, FluteKeys.Eb],
    [Notes.Db5]: [FluteKeys.Eb],
    [Notes.D5]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.RIGHT_SECOND_FINGER,
      FluteKeys.RIGHT_THIRD_FINGER,
    ],
    [Notes.Eb5]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.RIGHT_SECOND_FINGER,
      FluteKeys.RIGHT_THIRD_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.E5]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.RIGHT_SECOND_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.F5]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.Gb5]: [
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.RIGHT_THIRD_FINGER,
        FluteKeys.Eb,
      ],
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.RIGHT_SECOND_FINGER,
        FluteKeys.Eb,
      ],
    ],
    [Notes.G5]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.Ab5]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.G_SHARP,
      FluteKeys.Eb,
    ],
    [Notes.A5]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.Bb5]: [
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.RIGHT_FIRST_FINGER,
        FluteKeys.Eb,
      ],
      [FluteKeys.THUMB_Bb, FluteKeys.LEFT_FIRST_FINGER, FluteKeys.Eb],
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.Bb_TRILL,
        FluteKeys.Eb,
      ],
    ],
    [Notes.B5]: [FluteKeys.THUMB_B, FluteKeys.LEFT_FIRST_FINGER, FluteKeys.Eb],
    [Notes.C6]: [FluteKeys.LEFT_FIRST_FINGER, FluteKeys.Eb],
    [Notes.Db6]: [FluteKeys.Eb],
    [Notes.D6]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.Eb6]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.G_SHARP,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.RIGHT_SECOND_FINGER,
      FluteKeys.RIGHT_THIRD_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.E6]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.RIGHT_SECOND_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.F6]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.Gb6]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.RIGHT_THIRD_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.G6]: [
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.Ab6]: [
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.G_SHARP,
      FluteKeys.Eb,
    ],
    [Notes.A6]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.Eb,
    ],
    [Notes.Bb6]: [
      FluteKeys.THUMB_B,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.D_TRILL,
    ],
    [Notes.B6]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.D_SHARP_TRILL,
    ],
    [Notes.C7]: [
      [
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.G_SHARP,
        FluteKeys.RIGHT_FIRST_FINGER,
        FluteKeys.LOW_B,
      ],
      [
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.G_SHARP,
        FluteKeys.RIGHT_FIRST_FINGER,
      ],
    ],
  },
  [WoodwindInstrument.OBOE]: {
    [Notes.C4]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.RIGHT_SECOND_FINGER,
      FluteKeys.RIGHT_THIRD_FINGER,
      FluteKeys.LOW_C_SHARP,
      FluteKeys.LOW_C,
    ],
    [Notes.C7]: [
      [
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.G_SHARP,
        FluteKeys.RIGHT_FIRST_FINGER,
        FluteKeys.LOW_B,
      ],
      [
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.G_SHARP,
        FluteKeys.RIGHT_FIRST_FINGER,
      ],
    ],
  },
  [WoodwindInstrument.CLARINET]: {
    [Notes.E3]: [
      [
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.E_B,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
        ClarinetKeys.RIGHT_THIRD_FINGER,
      ],

      [
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
        ClarinetKeys.RIGHT_THIRD_FINGER,
        ClarinetKeys.LOW_E_B,
      ],
    ],
    [Notes.F3]: [
      [
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
        ClarinetKeys.RIGHT_THIRD_FINGER,
        ClarinetKeys.F_C,
      ],
      [
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
        ClarinetKeys.RIGHT_THIRD_FINGER,
        ClarinetKeys.LOW_F_C,
      ],
    ],
    [Notes.Gb3]: [
      [
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.F_SHARP_C_SHARP,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
        ClarinetKeys.RIGHT_THIRD_FINGER,
      ],
      [
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
        ClarinetKeys.RIGHT_THIRD_FINGER,
        ClarinetKeys.LOW_F_SHARP_C_SHARP,
      ],
    ],
    [Notes.G3]: [
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_FIRST_FINGER,
      ClarinetKeys.LEFT_SECOND_FINGER,
      ClarinetKeys.LEFT_THIRD_FINGER,
      ClarinetKeys.RIGHT_FIRST_FINGER,
      ClarinetKeys.RIGHT_SECOND_FINGER,
      ClarinetKeys.RIGHT_THIRD_FINGER,
    ],
    [Notes.Ab3]: [
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_FIRST_FINGER,
      ClarinetKeys.LEFT_SECOND_FINGER,
      ClarinetKeys.LEFT_THIRD_FINGER,
      ClarinetKeys.RIGHT_FIRST_FINGER,
      ClarinetKeys.RIGHT_SECOND_FINGER,
      ClarinetKeys.RIGHT_THIRD_FINGER,
      ClarinetKeys.LOW_G_SHARP_D_SHARP,
    ],
    [Notes.A3]: [
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_FIRST_FINGER,
      ClarinetKeys.LEFT_SECOND_FINGER,
      ClarinetKeys.LEFT_THIRD_FINGER,
      ClarinetKeys.RIGHT_FIRST_FINGER,
      ClarinetKeys.RIGHT_SECOND_FINGER,
    ],
    [Notes.Bb3]: [
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_FIRST_FINGER,
      ClarinetKeys.LEFT_SECOND_FINGER,
      ClarinetKeys.LEFT_THIRD_FINGER,
      ClarinetKeys.RIGHT_FIRST_FINGER,
    ],
    [Notes.B3]: [
      [
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
      ],
      [
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.B_F_SHARP_SLIVER,
      ],
    ],
    [Notes.C4]: [
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_FIRST_FINGER,
      ClarinetKeys.LEFT_SECOND_FINGER,
      ClarinetKeys.LEFT_THIRD_FINGER,
    ],
    [Notes.Db4]: [
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_FIRST_FINGER,
      ClarinetKeys.LEFT_SECOND_FINGER,
      ClarinetKeys.LEFT_THIRD_FINGER,
      ClarinetKeys.C_SHARP_G_SHARP,
    ],
    [Notes.D4]: [
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_FIRST_FINGER,
      ClarinetKeys.LEFT_SECOND_FINGER,
    ],
    [Notes.Eb4]: [
      [
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.RIGHT_FOURTH_SIDE,
      ],
      [
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.Eb_Bb_SLIVER,
      ],
    ],
    [Notes.E4]: [ClarinetKeys.THUMB, ClarinetKeys.LEFT_FIRST_FINGER],
    [Notes.F4]: [ClarinetKeys.THUMB],
    [Notes.Gb4]: [
      [ClarinetKeys.LEFT_FIRST_FINGER],
      [
        ClarinetKeys.THUMB,
        ClarinetKeys.RIGHT_THIRD_SIDE,
        ClarinetKeys.RIGHT_FOURTH_SIDE,
      ],
    ],
    [Notes.G4]: [],
    [Notes.Ab4]: [ClarinetKeys.SIDE_G_SHARP],
    [Notes.A4]: [ClarinetKeys.A],
    [Notes.Bb4]: [
      [ClarinetKeys.A, ClarinetKeys.REGISTER],
      [ClarinetKeys.A, ClarinetKeys.RIGHT_SECOND_SIDE],
    ],
    [Notes.B4]: [
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.E_B,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
        ClarinetKeys.RIGHT_THIRD_FINGER,
      ],
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
        ClarinetKeys.RIGHT_THIRD_FINGER,
        ClarinetKeys.LOW_E_B,
      ],
    ],
    [Notes.C5]: [
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.F_C,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
        ClarinetKeys.RIGHT_THIRD_FINGER,
      ],
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
        ClarinetKeys.RIGHT_THIRD_FINGER,
        ClarinetKeys.LOW_F_C,
      ],
    ],
    [Notes.Db5]: [
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.F_SHARP_C_SHARP,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
        ClarinetKeys.RIGHT_THIRD_FINGER,
      ],
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
        ClarinetKeys.RIGHT_THIRD_FINGER,
        ClarinetKeys.LOW_F_SHARP_C_SHARP,
      ],
    ],
    [Notes.D5]: [
      ClarinetKeys.REGISTER,
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_FIRST_FINGER,
      ClarinetKeys.LEFT_SECOND_FINGER,
      ClarinetKeys.LEFT_THIRD_FINGER,
      ClarinetKeys.RIGHT_FIRST_FINGER,
      ClarinetKeys.RIGHT_SECOND_FINGER,
      ClarinetKeys.RIGHT_THIRD_FINGER,
    ],
    [Notes.Eb5]: [
      ClarinetKeys.REGISTER,
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_FIRST_FINGER,
      ClarinetKeys.LEFT_SECOND_FINGER,
      ClarinetKeys.LEFT_THIRD_FINGER,
      ClarinetKeys.RIGHT_FIRST_FINGER,
      ClarinetKeys.RIGHT_SECOND_FINGER,
      ClarinetKeys.RIGHT_THIRD_FINGER,
      ClarinetKeys.LOW_G_SHARP_D_SHARP,
    ],
    [Notes.E5]: [
      ClarinetKeys.REGISTER,
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_FIRST_FINGER,
      ClarinetKeys.LEFT_SECOND_FINGER,
      ClarinetKeys.LEFT_THIRD_FINGER,
      ClarinetKeys.RIGHT_FIRST_FINGER,
      ClarinetKeys.RIGHT_SECOND_FINGER,
    ],
    [Notes.F5]: [
      ClarinetKeys.REGISTER,
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_FIRST_FINGER,
      ClarinetKeys.LEFT_SECOND_FINGER,
      ClarinetKeys.LEFT_THIRD_FINGER,
      ClarinetKeys.RIGHT_FIRST_FINGER,
    ],
    [Notes.Gb5]: [
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
      ],
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.B_F_SHARP_SLIVER,
      ],
    ],
    [Notes.G5]: [
      ClarinetKeys.REGISTER,
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_FIRST_FINGER,
      ClarinetKeys.LEFT_SECOND_FINGER,
      ClarinetKeys.LEFT_THIRD_FINGER,
    ],
    [Notes.Ab5]: [
      ClarinetKeys.REGISTER,
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_FIRST_FINGER,
      ClarinetKeys.LEFT_SECOND_FINGER,
      ClarinetKeys.LEFT_THIRD_FINGER,
      ClarinetKeys.C_SHARP_G_SHARP,
    ],
    [Notes.A5]: [
      ClarinetKeys.REGISTER,
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_FIRST_FINGER,
      ClarinetKeys.LEFT_SECOND_FINGER,
    ],
    [Notes.Bb5]: [
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.RIGHT_FOURTH_SIDE,
      ],
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.Eb_Bb_SLIVER,
      ],
    ],
    [Notes.B5]: [
      ClarinetKeys.REGISTER,
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_FIRST_FINGER,
    ],
    [Notes.C6]: [ClarinetKeys.REGISTER, ClarinetKeys.THUMB],
    [Notes.Db6]: [
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
      ],
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.RIGHT_THIRD_SIDE,
        ClarinetKeys.RIGHT_FOURTH_SIDE,
      ],
    ],
    [Notes.D6]: [
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.LOW_G_SHARP_D_SHARP,
      ],
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.RIGHT_SECOND_SIDE,
      ],
    ],
    [Notes.Eb6]: [
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.B_F_SHARP_SLIVER,
        ClarinetKeys.LOW_G_SHARP_D_SHARP,
      ],
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
        ClarinetKeys.LOW_G_SHARP_D_SHARP,
      ],
    ],
    [Notes.E6]: [
      ClarinetKeys.REGISTER,
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_SECOND_FINGER,
      ClarinetKeys.LEFT_THIRD_FINGER,
      ClarinetKeys.LOW_G_SHARP_D_SHARP,
    ],
    [Notes.F6]: [
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.C_SHARP_G_SHARP,
        ClarinetKeys.LOW_G_SHARP_D_SHARP,
      ],
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.C_SHARP_G_SHARP,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
        ClarinetKeys.RIGHT_THIRD_FINGER,
      ],
    ],
    [Notes.Gb6]: [
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LOW_G_SHARP_D_SHARP,
      ],
      [
        ClarinetKeys.REGISTER,
        ClarinetKeys.THUMB,
        ClarinetKeys.LEFT_FIRST_FINGER,
        ClarinetKeys.LEFT_SECOND_FINGER,
        ClarinetKeys.LEFT_THIRD_FINGER,
        ClarinetKeys.C_SHARP_G_SHARP,
        ClarinetKeys.RIGHT_FIRST_FINGER,
        ClarinetKeys.RIGHT_SECOND_FINGER,
      ],
    ],
    [Notes.G6]: [
      ClarinetKeys.REGISTER,
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_SECOND_FINGER,
      ClarinetKeys.RIGHT_FIRST_FINGER,
      ClarinetKeys.RIGHT_SECOND_FINGER,
      ClarinetKeys.LOW_G_SHARP_D_SHARP,
    ],
    [Notes.Ab6]: [
      ClarinetKeys.REGISTER,
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_SECOND_FINGER,
      ClarinetKeys.LEFT_THIRD_FINGER,
      ClarinetKeys.F_SHARP_C_SHARP,
      ClarinetKeys.RIGHT_FIRST_FINGER,
      ClarinetKeys.RIGHT_SECOND_FINGER,
      ClarinetKeys.RIGHT_THIRD_FINGER,
    ],
    [Notes.A6]: [
      ClarinetKeys.REGISTER,
      ClarinetKeys.THUMB,
      ClarinetKeys.LEFT_SECOND_FINGER,
      ClarinetKeys.LEFT_THIRD_FINGER,
      ClarinetKeys.F_SHARP_C_SHARP,
    ],
  },
  [WoodwindInstrument.SAXOPHONE]: {
    [Notes.Bb3]: [
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
      SaxophoneKeys.LEFT_THIRD_FINGER,
      SaxophoneKeys.RIGHT_FIRST_FINGER,
      SaxophoneKeys.RIGHT_SECOND_FINGER,
      SaxophoneKeys.RIGHT_THIRD_FINGER,
      SaxophoneKeys.LOW_C,
      SaxophoneKeys.LOW_Bb,
    ],
    [Notes.B3]: [
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
      SaxophoneKeys.LEFT_THIRD_FINGER,
      SaxophoneKeys.RIGHT_FIRST_FINGER,
      SaxophoneKeys.RIGHT_SECOND_FINGER,
      SaxophoneKeys.RIGHT_THIRD_FINGER,
      SaxophoneKeys.LOW_C,
      SaxophoneKeys.LOW_B,
    ],
    [Notes.C4]: [
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
      SaxophoneKeys.LEFT_THIRD_FINGER,
      SaxophoneKeys.RIGHT_FIRST_FINGER,
      SaxophoneKeys.RIGHT_SECOND_FINGER,
      SaxophoneKeys.RIGHT_THIRD_FINGER,
      SaxophoneKeys.LOW_C,
    ],
    [Notes.Db4]: [
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
      SaxophoneKeys.LEFT_THIRD_FINGER,
      SaxophoneKeys.RIGHT_FIRST_FINGER,
      SaxophoneKeys.RIGHT_SECOND_FINGER,
      SaxophoneKeys.RIGHT_THIRD_FINGER,
      SaxophoneKeys.LOW_C,
      SaxophoneKeys.LOW_C_SHARP,
    ],
    [Notes.D4]: [
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
      SaxophoneKeys.LEFT_THIRD_FINGER,
      SaxophoneKeys.RIGHT_FIRST_FINGER,
      SaxophoneKeys.RIGHT_SECOND_FINGER,
      SaxophoneKeys.RIGHT_THIRD_FINGER,
    ],
    [Notes.Eb4]: [
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
      SaxophoneKeys.LEFT_THIRD_FINGER,
      SaxophoneKeys.RIGHT_FIRST_FINGER,
      SaxophoneKeys.RIGHT_SECOND_FINGER,
      SaxophoneKeys.RIGHT_THIRD_FINGER,
      SaxophoneKeys.LOW_Eb,
    ],
    [Notes.E4]: [
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
      SaxophoneKeys.LEFT_THIRD_FINGER,
      SaxophoneKeys.RIGHT_FIRST_FINGER,
      SaxophoneKeys.RIGHT_SECOND_FINGER,
    ],
    [Notes.F4]: [
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
      SaxophoneKeys.LEFT_THIRD_FINGER,
      SaxophoneKeys.RIGHT_FIRST_FINGER,
    ],
    [Notes.Gb4]: [
      [
        SaxophoneKeys.LEFT_FIRST_FINGER,
        SaxophoneKeys.LEFT_SECOND_FINGER,
        SaxophoneKeys.LEFT_THIRD_FINGER,
        SaxophoneKeys.RIGHT_SECOND_FINGER,
      ],
      [
        SaxophoneKeys.LEFT_FIRST_FINGER,
        SaxophoneKeys.LEFT_SECOND_FINGER,
        SaxophoneKeys.LEFT_THIRD_FINGER,
        SaxophoneKeys.RIGHT_FIRST_FINGER,
        SaxophoneKeys.ALT_F,
      ],
    ],
    [Notes.G4]: [
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
      SaxophoneKeys.LEFT_THIRD_FINGER,
    ],
    [Notes.Ab4]: [
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
      SaxophoneKeys.LEFT_THIRD_FINGER,
      SaxophoneKeys.G_SHARP,
    ],
    [Notes.A4]: [
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
    ],
    [Notes.Bb4]: [
      [
        SaxophoneKeys.LEFT_FIRST_FINGER,
        SaxophoneKeys.LEFT_SECOND_FINGER,
        SaxophoneKeys.Bb_SIDE,
      ],
      [SaxophoneKeys.LEFT_FIRST_FINGER, SaxophoneKeys.RIGHT_FIRST_FINGER],
      [SaxophoneKeys.LEFT_FIRST_FINGER, SaxophoneKeys.BIS],
    ],
    [Notes.B4]: [SaxophoneKeys.LEFT_FIRST_FINGER],
    [Notes.C5]: [
      [SaxophoneKeys.LEFT_SECOND_FINGER],
      [SaxophoneKeys.LEFT_FIRST_FINGER, SaxophoneKeys.C_SIDE],
    ],
    [Notes.Db5]: [],
    [Notes.D5]: [
      SaxophoneKeys.OCTAVE,
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
      SaxophoneKeys.LEFT_THIRD_FINGER,
      SaxophoneKeys.RIGHT_FIRST_FINGER,
      SaxophoneKeys.RIGHT_SECOND_FINGER,
      SaxophoneKeys.RIGHT_THIRD_FINGER,
    ],
    [Notes.Eb5]: [
      SaxophoneKeys.OCTAVE,
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
      SaxophoneKeys.LEFT_THIRD_FINGER,
      SaxophoneKeys.RIGHT_FIRST_FINGER,
      SaxophoneKeys.RIGHT_SECOND_FINGER,
      SaxophoneKeys.RIGHT_THIRD_FINGER,
      SaxophoneKeys.LOW_Eb,
    ],
    [Notes.E5]: [
      SaxophoneKeys.OCTAVE,
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
      SaxophoneKeys.LEFT_THIRD_FINGER,
      SaxophoneKeys.RIGHT_FIRST_FINGER,
      SaxophoneKeys.RIGHT_SECOND_FINGER,
    ],
    [Notes.F5]: [
      SaxophoneKeys.OCTAVE,
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
      SaxophoneKeys.LEFT_THIRD_FINGER,
      SaxophoneKeys.RIGHT_FIRST_FINGER,
    ],
    [Notes.Gb5]: [
      [
        SaxophoneKeys.OCTAVE,
        SaxophoneKeys.LEFT_FIRST_FINGER,
        SaxophoneKeys.LEFT_SECOND_FINGER,
        SaxophoneKeys.LEFT_THIRD_FINGER,
        SaxophoneKeys.RIGHT_SECOND_FINGER,
      ],
      [
        SaxophoneKeys.OCTAVE,
        SaxophoneKeys.LEFT_FIRST_FINGER,
        SaxophoneKeys.LEFT_SECOND_FINGER,
        SaxophoneKeys.LEFT_THIRD_FINGER,
        SaxophoneKeys.RIGHT_FIRST_FINGER,
        SaxophoneKeys.ALT_F,
      ],
    ],
    [Notes.G5]: [
      SaxophoneKeys.OCTAVE,
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
      SaxophoneKeys.LEFT_THIRD_FINGER,
    ],
    [Notes.Ab5]: [
      SaxophoneKeys.OCTAVE,
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
      SaxophoneKeys.LEFT_THIRD_FINGER,
      SaxophoneKeys.G_SHARP,
    ],
    [Notes.A5]: [
      SaxophoneKeys.OCTAVE,
      SaxophoneKeys.LEFT_FIRST_FINGER,
      SaxophoneKeys.LEFT_SECOND_FINGER,
    ],
    [Notes.Bb5]: [
      [
        SaxophoneKeys.OCTAVE,
        SaxophoneKeys.LEFT_FIRST_FINGER,
        SaxophoneKeys.LEFT_SECOND_FINGER,
        SaxophoneKeys.Bb_SIDE,
      ],
      [
        SaxophoneKeys.OCTAVE,
        SaxophoneKeys.LEFT_FIRST_FINGER,
        SaxophoneKeys.RIGHT_FIRST_FINGER,
      ],
      [
        SaxophoneKeys.OCTAVE,
        SaxophoneKeys.LEFT_FIRST_FINGER,
        SaxophoneKeys.BIS,
      ],
    ],
    [Notes.B5]: [SaxophoneKeys.OCTAVE, SaxophoneKeys.LEFT_FIRST_FINGER],
    [Notes.C6]: [
      [SaxophoneKeys.OCTAVE, SaxophoneKeys.LEFT_SECOND_FINGER],
      [
        SaxophoneKeys.OCTAVE,
        SaxophoneKeys.LEFT_FIRST_FINGER,
        SaxophoneKeys.C_SIDE,
      ],
    ],
    [Notes.Db6]: [SaxophoneKeys.OCTAVE],
    [Notes.D6]: [SaxophoneKeys.OCTAVE, SaxophoneKeys.D_PALM],
    [Notes.Eb6]: [
      SaxophoneKeys.OCTAVE,
      SaxophoneKeys.D_PALM,
      SaxophoneKeys.Eb_PALM,
    ],
    [Notes.E6]: [
      SaxophoneKeys.OCTAVE,
      SaxophoneKeys.D_PALM,
      SaxophoneKeys.Eb_PALM,
      SaxophoneKeys.E_SIDE,
    ],
    [Notes.F6]: [
      [
        SaxophoneKeys.OCTAVE,
        SaxophoneKeys.D_PALM,
        SaxophoneKeys.Eb_PALM,
        SaxophoneKeys.F_PALM,
        SaxophoneKeys.E_SIDE,
      ],
      [
        SaxophoneKeys.FRONT_F,
        SaxophoneKeys.OCTAVE,
        SaxophoneKeys.LEFT_SECOND_FINGER,
      ],
    ],
  },
  [WoodwindInstrument.BASSOON]: {
    [Notes.C4]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.RIGHT_SECOND_FINGER,
      FluteKeys.RIGHT_THIRD_FINGER,
      FluteKeys.LOW_C_SHARP,
      FluteKeys.LOW_C,
    ],
    [Notes.C7]: [
      [
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.G_SHARP,
        FluteKeys.RIGHT_FIRST_FINGER,
        FluteKeys.LOW_B,
      ],
      [
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.G_SHARP,
        FluteKeys.RIGHT_FIRST_FINGER,
      ],
    ],
  },
  [BrassInstrument.TRUMPET]: {
    [Notes.Gb3]: [
      TrumpetValves.FIRST,
      TrumpetValves.SECOND,
      TrumpetValves.THIRD,
    ],
    [Notes.G3]: [TrumpetValves.FIRST, TrumpetValves.THIRD],
    [Notes.Ab3]: [TrumpetValves.SECOND, TrumpetValves.THIRD],
    [Notes.A3]: [TrumpetValves.FIRST, TrumpetValves.SECOND],
    [Notes.Bb3]: [TrumpetValves.FIRST],
    [Notes.B3]: [TrumpetValves.SECOND],
    [Notes.C4]: [],
    [Notes.Db4]: [
      TrumpetValves.FIRST,
      TrumpetValves.SECOND,
      TrumpetValves.THIRD,
    ],
    [Notes.D4]: [TrumpetValves.FIRST, TrumpetValves.THIRD],
    [Notes.Eb4]: [TrumpetValves.SECOND, TrumpetValves.THIRD],
    [Notes.E4]: [TrumpetValves.FIRST, TrumpetValves.SECOND],
    [Notes.F4]: [TrumpetValves.FIRST],
    [Notes.Gb4]: [
      [TrumpetValves.SECOND],
      [TrumpetValves.FIRST, TrumpetValves.SECOND, TrumpetValves.THIRD],
    ],
    [Notes.G4]: [[], [TrumpetValves.FIRST, TrumpetValves.THIRD]],
    [Notes.Ab4]: [TrumpetValves.SECOND, TrumpetValves.THIRD],
    [Notes.A4]: [TrumpetValves.FIRST, TrumpetValves.SECOND],
    [Notes.Bb4]: [
      [TrumpetValves.FIRST],
      [TrumpetValves.FIRST, TrumpetValves.SECOND, TrumpetValves.THIRD],
    ],
    [Notes.B4]: [
      [TrumpetValves.SECOND],
      [TrumpetValves.FIRST, TrumpetValves.THIRD],
    ],
    [Notes.C5]: [[], [TrumpetValves.SECOND, TrumpetValves.THIRD]],
    [Notes.Db5]: [
      [TrumpetValves.FIRST, TrumpetValves.SECOND],
      [TrumpetValves.FIRST, TrumpetValves.SECOND, TrumpetValves.THIRD],
    ],
    [Notes.D5]: [
      [TrumpetValves.FIRST],
      [TrumpetValves.FIRST, TrumpetValves.THIRD],
    ],
    [Notes.Eb5]: [
      [TrumpetValves.SECOND],
      [TrumpetValves.SECOND, TrumpetValves.THIRD],
    ],
    [Notes.E5]: [
      [],
      [TrumpetValves.FIRST, TrumpetValves.SECOND],
      [TrumpetValves.FIRST, TrumpetValves.SECOND, TrumpetValves.THIRD],
    ],
    [Notes.F5]: [
      [TrumpetValves.FIRST],
      [TrumpetValves.FIRST, TrumpetValves.THIRD],
    ],
    [Notes.Gb5]: [
      [TrumpetValves.SECOND],
      [TrumpetValves.SECOND, TrumpetValves.THIRD],
      [TrumpetValves.FIRST, TrumpetValves.SECOND, TrumpetValves.THIRD],
    ],
    [Notes.G5]: [
      [],
      [TrumpetValves.FIRST, TrumpetValves.SECOND],
      [TrumpetValves.FIRST, TrumpetValves.THIRD],
    ],
    [Notes.Ab5]: [
      [TrumpetValves.SECOND, TrumpetValves.THIRD],
      [TrumpetValves.FIRST],
    ],
    [Notes.A5]: [
      [TrumpetValves.FIRST, TrumpetValves.SECOND],
      [TrumpetValves.SECOND],
    ],
    [Notes.Bb5]: [[TrumpetValves.FIRST], []],
    [Notes.B5]: [TrumpetValves.SECOND],
    [Notes.C6]: [[], [TrumpetValves.SECOND, TrumpetValves.THIRD]],
  },
  [BrassInstrument.FRENCH_HORN]: {
    [Notes.C4]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.RIGHT_SECOND_FINGER,
      FluteKeys.RIGHT_THIRD_FINGER,
      FluteKeys.LOW_C_SHARP,
      FluteKeys.LOW_C,
    ],
    [Notes.C7]: [
      [
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.G_SHARP,
        FluteKeys.RIGHT_FIRST_FINGER,
        FluteKeys.LOW_B,
      ],
      [
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.G_SHARP,
        FluteKeys.RIGHT_FIRST_FINGER,
      ],
    ],
  },
  [BrassInstrument.TROMBONE]: {
    [Notes.E2]: [
      TrombonePositions.FIRST,
      TrombonePositions.SECOND,
      TrombonePositions.THIRD,
      TrombonePositions.FOURTH,
      TrombonePositions.FIFTH,
      TrombonePositions.SIXTH,
      TrombonePositions.SEVENTH,
    ],
    [Notes.F2]: [
      TrombonePositions.FIRST,
      TrombonePositions.SECOND,
      TrombonePositions.THIRD,
      TrombonePositions.FOURTH,
      TrombonePositions.FIFTH,
      TrombonePositions.SIXTH,
    ],
    [Notes.Gb2]: [
      TrombonePositions.FIRST,
      TrombonePositions.SECOND,
      TrombonePositions.THIRD,
      TrombonePositions.FOURTH,
      TrombonePositions.FIFTH,
    ],
    [Notes.G2]: [
      TrombonePositions.FIRST,
      TrombonePositions.SECOND,
      TrombonePositions.THIRD,
      TrombonePositions.FOURTH,
    ],
    [Notes.Ab2]: [
      TrombonePositions.FIRST,
      TrombonePositions.SECOND,
      TrombonePositions.THIRD,
    ],
    [Notes.A2]: [TrombonePositions.FIRST, TrombonePositions.SECOND],
    [Notes.Bb2]: [TrombonePositions.FIRST],
    [Notes.B2]: [
      TrombonePositions.FIRST,
      TrombonePositions.SECOND,
      TrombonePositions.THIRD,
      TrombonePositions.FOURTH,
      TrombonePositions.FIFTH,
      TrombonePositions.SIXTH,
      TrombonePositions.SEVENTH,
    ],
    [Notes.C3]: [
      TrombonePositions.FIRST,
      TrombonePositions.SECOND,
      TrombonePositions.THIRD,
      TrombonePositions.FOURTH,
      TrombonePositions.FIFTH,
      TrombonePositions.SIXTH,
    ],
    [Notes.Db3]: [
      TrombonePositions.FIRST,
      TrombonePositions.SECOND,
      TrombonePositions.THIRD,
      TrombonePositions.FOURTH,
      TrombonePositions.FIFTH,
    ],
    [Notes.D3]: [
      TrombonePositions.FIRST,
      TrombonePositions.SECOND,
      TrombonePositions.THIRD,
      TrombonePositions.FOURTH,
    ],
    [Notes.Eb3]: [
      TrombonePositions.FIRST,
      TrombonePositions.SECOND,
      TrombonePositions.THIRD,
    ],
    [Notes.E3]: [
      [TrombonePositions.FIRST, TrombonePositions.SECOND],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
        TrombonePositions.FIFTH,
        TrombonePositions.SIXTH,
        TrombonePositions.SEVENTH,
      ],
    ],
    [Notes.F3]: [
      [TrombonePositions.FIRST],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
        TrombonePositions.FIFTH,
        TrombonePositions.SIXTH,
      ],
    ],
    [Notes.Gb3]: [
      TrombonePositions.FIRST,
      TrombonePositions.SECOND,
      TrombonePositions.THIRD,
      TrombonePositions.FOURTH,
      TrombonePositions.FIFTH,
    ],
    [Notes.G3]: [
      TrombonePositions.FIRST,
      TrombonePositions.SECOND,
      TrombonePositions.THIRD,
      TrombonePositions.FOURTH,
    ],
    [Notes.Ab3]: [
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
      ],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
        TrombonePositions.FIFTH,
        TrombonePositions.SIXTH,
        TrombonePositions.SEVENTH,
      ],
    ],
    [Notes.A3]: [
      [TrombonePositions.FIRST, TrombonePositions.SECOND],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
        TrombonePositions.FIFTH,
        TrombonePositions.SIXTH,
      ],
    ],
    [Notes.Bb3]: [
      [TrombonePositions.FIRST],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
        TrombonePositions.FIFTH,
      ],
    ],
    [Notes.B3]: [
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
      ],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
        TrombonePositions.FIFTH,
        TrombonePositions.SIXTH,
        TrombonePositions.SEVENTH,
      ],
    ],
    [Notes.C4]: [
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
      ],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
        TrombonePositions.FIFTH,
        TrombonePositions.SIXTH,
      ],
    ],
    [Notes.Db4]: [
      [TrombonePositions.FIRST, TrombonePositions.SECOND],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
        TrombonePositions.FIFTH,
      ],
    ],
    [Notes.D4]: [
      [TrombonePositions.FIRST],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
      ],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
        TrombonePositions.FIFTH,
        TrombonePositions.SIXTH,
        TrombonePositions.SEVENTH,
      ],
    ],
    [Notes.Eb4]: [
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
      ],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
        TrombonePositions.FIFTH,
        TrombonePositions.SIXTH,
      ],
    ],
    [Notes.E4]: [
      [TrombonePositions.FIRST, TrombonePositions.SECOND],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
        TrombonePositions.FIFTH,
      ],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
        TrombonePositions.FIFTH,
        TrombonePositions.SIXTH,
      ],
    ],
    [Notes.F4]: [
      [TrombonePositions.FIRST],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
      ],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
        TrombonePositions.FIFTH,
        TrombonePositions.SIXTH,
      ],
    ],
    [Notes.Gb4]: [
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
      ],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
        TrombonePositions.FIFTH,
      ],
    ],
    [Notes.G4]: [
      [TrombonePositions.FIRST, TrombonePositions.SECOND],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
        TrombonePositions.FOURTH,
      ],
    ],
    [Notes.Ab4]: [
      [TrombonePositions.FIRST],
      [
        TrombonePositions.FIRST,
        TrombonePositions.SECOND,
        TrombonePositions.THIRD,
      ],
    ],
    [Notes.A4]: [TrombonePositions.FIRST, TrombonePositions.SECOND],
    [Notes.Bb4]: [TrombonePositions.FIRST],
  },
  [BrassInstrument.TUBA]: {
    [Notes.C4]: [
      FluteKeys.THUMB_B,
      FluteKeys.LEFT_FIRST_FINGER,
      FluteKeys.LEFT_SECOND_FINGER,
      FluteKeys.LEFT_THIRD_FINGER,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.RIGHT_SECOND_FINGER,
      FluteKeys.RIGHT_THIRD_FINGER,
      FluteKeys.LOW_C_SHARP,
      FluteKeys.LOW_C,
    ],
    [Notes.C7]: [
      [
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.G_SHARP,
        FluteKeys.RIGHT_FIRST_FINGER,
        FluteKeys.LOW_B,
      ],
      [
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.G_SHARP,
        FluteKeys.RIGHT_FIRST_FINGER,
      ],
    ],
  },
};

export const instrumentIcons: { [key in Instrument]: any } = {
  [WoodwindInstrument.FLUTE]: <Flute />,
  [WoodwindInstrument.OBOE]: <Oboe />,
  [WoodwindInstrument.CLARINET]: <Clarinet />,
  [WoodwindInstrument.SAXOPHONE]: <Saxophone />,
  [WoodwindInstrument.BASSOON]: <Bassoon />,
  [BrassInstrument.TRUMPET]: <Trumpet />,
  [BrassInstrument.FRENCH_HORN]: <FrenchHorn />,
  [BrassInstrument.TROMBONE]: <Trombone />,
  [BrassInstrument.TUBA]: <Tuba />,
};

export const notes: Note[] = [
  { name: ["A0"], staffPosition: Notes.A0 },
  { name: ["A♯0", "B♭0"], staffPosition: Notes.Bb0 },
  { name: ["B0", "C♭1"], staffPosition: Notes.B0 },
  { name: ["B♯0", "C1"], staffPosition: Notes.C1 },
  {
    name: ["C♯1", "D♭1"],
    staffPosition: Notes.Db1,
  },
  { name: ["D1"], staffPosition: Notes.D1 },
  {
    name: ["D♯1", "E♭1"],
    staffPosition: Notes.Eb1,
  },
  { name: ["E1", "F♭1"], staffPosition: Notes.E1 },
  { name: ["E♯1", "F1"], staffPosition: Notes.F1 },
  {
    name: ["F♯1", "G♭1"],
    staffPosition: Notes.Gb1,
  },
  { name: ["G1"], staffPosition: Notes.G1 },
  { name: ["G♯1", "A♭1"], staffPosition: Notes.Ab1 },
  { name: ["A1"], staffPosition: Notes.A1 },
  {
    name: ["A♯1", "B♭1"],
    staffPosition: Notes.Bb1,
  },
  { name: ["B1", "C♭2"], staffPosition: Notes.B1 },
  { name: ["B♯1", "C2"], staffPosition: Notes.C2 },
  {
    name: ["C♯2", "D♭2"],
    staffPosition: Notes.Db2,
  },
  { name: ["D2"], staffPosition: Notes.D2 },
  {
    name: ["D♯2", "E♭2"],
    staffPosition: Notes.Eb2,
  },
  { name: ["E2", "F♭2"], staffPosition: Notes.E2 },
  { name: ["E♯2", "F2"], staffPosition: Notes.F2 },
  {
    name: ["F♯2", "G♭2"],
    staffPosition: Notes.Gb2,
  },
  { name: ["G2"], staffPosition: Notes.G2 },
  { name: ["G♯2", "A♭2"], staffPosition: Notes.Ab2 },
  { name: ["A2"], staffPosition: Notes.A2 },
  {
    name: ["A♯2", "B♭2"],
    staffPosition: Notes.Bb2,
  },
  { name: ["B2", "C♭3"], staffPosition: Notes.B2 },
  { name: ["B♯2", "C3"], staffPosition: Notes.C3 },
  {
    name: ["C♯3", "D♭3"],
    staffPosition: Notes.Db3,
  },
  { name: ["D3"], staffPosition: Notes.D3 },
  {
    name: ["D♯3", "E♭3"],
    staffPosition: Notes.Eb3,
  },
  { name: ["E3", "F♭3"], staffPosition: Notes.E3 },
  { name: ["E♯3", "F3"], staffPosition: Notes.F3 },
  {
    name: ["F♯3", "G♭3"],
    staffPosition: Notes.Gb3,
  },
  { name: ["G3"], staffPosition: Notes.G3 },
  { name: ["G♯3", "A♭3"], staffPosition: Notes.Ab3 },
  { name: ["A3"], staffPosition: Notes.A3 },
  {
    name: ["A♯3", "B♭3"],
    staffPosition: Notes.Bb3,
  },
  { name: ["B3", "C♭4"], staffPosition: Notes.B3 },
  { name: ["B♯3", "C4"], staffPosition: Notes.C4 },
  {
    name: ["C♯4", "D♭4"],
    staffPosition: Notes.Db4,
  },
  { name: ["D4"], staffPosition: Notes.D4 },
  {
    name: ["D♯4", "E♭4"],
    staffPosition: Notes.Eb4,
  },
  { name: ["E4", "F♭4"], staffPosition: Notes.E4 },
  { name: ["E♯4", "F4"], staffPosition: Notes.F4 },
  {
    name: ["F♯4", "G♭4"],
    staffPosition: Notes.Gb4,
  },
  { name: ["G4"], staffPosition: Notes.G4 },
  { name: ["G♯4", "A♭4"], staffPosition: Notes.Ab4 },
  { name: ["A4"], staffPosition: Notes.A4 },
  {
    name: ["A♯4", "B♭4"],
    staffPosition: Notes.Bb4,
  },
  { name: ["B4", "C♭5"], staffPosition: Notes.B4 },
  { name: ["B♯4", "C5"], staffPosition: Notes.C5 },
  {
    name: ["C♯5", "D♭5"],
    staffPosition: Notes.Db5,
  },
  { name: ["D5"], staffPosition: Notes.D5 },
  {
    name: ["D♯5", "E♭5"],
    staffPosition: Notes.Eb5,
  },
  { name: ["E5", "F♭5"], staffPosition: Notes.E5 },
  { name: ["E♯5", "F5"], staffPosition: Notes.F5 },
  {
    name: ["F♯5", "G♭5"],
    staffPosition: Notes.Gb5,
  },
  { name: ["G5"], staffPosition: Notes.G5 },
  { name: ["G♯5", "A♭5"], staffPosition: Notes.Ab5 },
  { name: ["A5"], staffPosition: Notes.A5 },
  {
    name: ["A♯5", "B♭5"],
    staffPosition: Notes.Bb5,
  },
  { name: ["B5", "C♭6"], staffPosition: Notes.B5 },
  { name: ["B♯5", "C6"], staffPosition: Notes.C6 },
  {
    name: ["C♯6", "D♭6"],
    staffPosition: Notes.Db6,
  },
  { name: ["D6"], staffPosition: Notes.D6 },
  {
    name: ["D♯6", "E♭6"],
    staffPosition: Notes.Eb6,
  },
  { name: ["E6", "F♭6"], staffPosition: Notes.E6 },
  { name: ["E♯6", "F6"], staffPosition: Notes.F6 },
  {
    name: ["F♯6", "G♭6"],
    staffPosition: Notes.Gb6,
  },
  { name: ["G6"], staffPosition: Notes.G6 },
  { name: ["G♯6", "A♭6"], staffPosition: Notes.Ab6 },
  { name: ["A6"], staffPosition: Notes.A6 },
  {
    name: ["A♯6", "B♭6"],
    staffPosition: Notes.Bb6,
  },
  { name: ["B6", "C♭7"], staffPosition: Notes.B6 },
  { name: ["B♯6", "C7"], staffPosition: Notes.C7 },
];
