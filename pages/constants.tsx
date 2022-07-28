import {
  Clef,
  FluteKeyGroup,
  FluteKeys,
  Instrument as Instrument,
  KeyGroup,
  Note,
  Notes,
  Position,
  SaxophoneKeyGroup,
  SaxophoneKeys,
  Section,
  InstrumentRange,
  InstrumentKeys,
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
  Instrument.FLUTE,
  Instrument.OBOE,
  Instrument.CLARINET,
  Instrument.SAXOPHONE,
  Instrument.BASSOON,
  Instrument.TRUMPET,
  Instrument.FRENCH_HORN,
  Instrument.TROMBONE,
  Instrument.TUBA,
];

export const instrumentRanges: { [key in Instrument]: InstrumentRange } = {
  [Instrument.FLUTE]: {
    lowestNote: Notes.C4,
    highestNote: Notes.C7,
  },
  [Instrument.OBOE]: {
    lowestNote: Notes.C4,
    highestNote: Notes.C7,
  },
  [Instrument.CLARINET]: {
    lowestNote: Notes.C4,
    highestNote: Notes.C7,
  },
  [Instrument.SAXOPHONE]: {
    lowestNote: Notes.Bb3,
    highestNote: Notes.F6,
  },
  [Instrument.BASSOON]: {
    lowestNote: Notes.C4,
    highestNote: Notes.C7,
  },
  [Instrument.TRUMPET]: {
    lowestNote: Notes.C4,
    highestNote: Notes.C7,
  },
  [Instrument.FRENCH_HORN]: {
    lowestNote: Notes.C4,
    highestNote: Notes.C7,
  },
  [Instrument.TROMBONE]: {
    lowestNote: Notes.C4,
    highestNote: Notes.C7,
  },
  [Instrument.TUBA]: {
    lowestNote: Notes.C4,
    highestNote: Notes.C7,
  },
};

export const instrumentClef: { [key in Instrument]: Clef } = {
  [Instrument.FLUTE]: Clef.TREBLE,
  [Instrument.OBOE]: Clef.TREBLE,
  [Instrument.CLARINET]: Clef.TREBLE,
  [Instrument.SAXOPHONE]: Clef.TREBLE,
  [Instrument.BASSOON]: Clef.BASS,
  [Instrument.TRUMPET]: Clef.TREBLE,
  [Instrument.FRENCH_HORN]: Clef.TREBLE,
  [Instrument.TROMBONE]: Clef.TREBLE,
  [Instrument.TUBA]: Clef.BASS,
};

export const keyDiagrams: { [key in Instrument]: KeyGroup[] } = {
  [Instrument.FLUTE]: [
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
  [Instrument.OBOE]: [
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
  [Instrument.CLARINET]: [
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
  [Instrument.SAXOPHONE]: [
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

  [Instrument.BASSOON]: [
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
  [Instrument.TRUMPET]: [
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
  [Instrument.FRENCH_HORN]: [
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
  [Instrument.TROMBONE]: [
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
  [Instrument.TUBA]: [
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

export const instrumentFingerings: {
  [key in Instrument]: Partial<
    Record<Notes, InstrumentKeys[] | InstrumentKeys[][]>
  >;
} = {
  [Instrument.FLUTE]: {
    [Notes.C4]: [
      [
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
    ],
    [Notes.Db4]: [
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.RIGHT_FIRST_FINGER,
        FluteKeys.RIGHT_SECOND_FINGER,
        FluteKeys.RIGHT_THIRD_FINGER,
        FluteKeys.LOW_C_SHARP,
      ],
    ],
    [Notes.D4]: [
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.RIGHT_FIRST_FINGER,
        FluteKeys.RIGHT_SECOND_FINGER,
        FluteKeys.RIGHT_THIRD_FINGER,
      ],
    ],
    [Notes.Eb4]: [
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.RIGHT_FIRST_FINGER,
        FluteKeys.RIGHT_SECOND_FINGER,
        FluteKeys.RIGHT_THIRD_FINGER,
        FluteKeys.Eb,
      ],
    ],
    [Notes.E4]: [
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.RIGHT_FIRST_FINGER,
        FluteKeys.RIGHT_SECOND_FINGER,
        FluteKeys.Eb,
      ],
    ],
    [Notes.F4]: [
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.RIGHT_FIRST_FINGER,
        FluteKeys.Eb,
      ],
    ],
    [Notes.Gb4]: [
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.RIGHT_SECOND_FINGER,
        FluteKeys.Eb,
      ],
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.RIGHT_THIRD_FINGER,
        FluteKeys.Eb,
      ],
    ],
    [Notes.G4]: [
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.Eb,
      ],
    ],
    [Notes.Ab4]: [
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.LEFT_THIRD_FINGER,
        FluteKeys.G_SHARP,
        FluteKeys.Eb,
      ],
    ],
    [Notes.A4]: [
      [
        FluteKeys.THUMB_B,
        FluteKeys.LEFT_FIRST_FINGER,
        FluteKeys.LEFT_SECOND_FINGER,
        FluteKeys.Eb,
      ],
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
    [Notes.C5]: [[FluteKeys.LEFT_FIRST_FINGER, FluteKeys.Eb]],
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
      FluteKeys.G_SHARP,
      FluteKeys.RIGHT_FIRST_FINGER,
      FluteKeys.RIGHT_SECOND_FINGER,
      FluteKeys.RIGHT_THIRD_FINGER,
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
  [Instrument.OBOE]: {
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
  [Instrument.CLARINET]: {
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
  [Instrument.SAXOPHONE]: {
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
  [Instrument.BASSOON]: {
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
  [Instrument.TRUMPET]: {
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
  [Instrument.FRENCH_HORN]: {
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
  [Instrument.TROMBONE]: {
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
  [Instrument.TUBA]: {
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
  [Instrument.FLUTE]: <Flute />,
  [Instrument.OBOE]: <Oboe />,
  [Instrument.CLARINET]: <Clarinet />,
  [Instrument.SAXOPHONE]: <Saxophone />,
  [Instrument.BASSOON]: <Bassoon />,
  [Instrument.TRUMPET]: <Trumpet />,
  [Instrument.FRENCH_HORN]: <FrenchHorn />,
  [Instrument.TROMBONE]: <Trombone />,
  [Instrument.TUBA]: <Tuba />,
};

export const notes: Note[] = [
  { name: "A0", staffPosition: Notes.A0 },
  { name: ["A♯0", "B♭0"], staffPosition: Notes.Bb0 },
  { name: ["B0", "C♭1"], staffPosition: Notes.B0 },
  { name: ["B♯0", "C1"], staffPosition: Notes.C1 },
  {
    name: ["C♯1", "D♭1"],
    staffPosition: Notes.Db1,
  },
  { name: "D1", staffPosition: Notes.D1 },
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
  { name: "G1", staffPosition: Notes.G1 },
  { name: ["G♯1", "A♭1"], staffPosition: Notes.Ab1 },
  { name: "A1", staffPosition: Notes.A1 },
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
  { name: "D2", staffPosition: Notes.D2 },
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
  { name: "G2", staffPosition: Notes.G2 },
  { name: ["G♯2", "A♭2"], staffPosition: Notes.Ab2 },
  { name: "A2", staffPosition: Notes.A2 },
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
  { name: "D3", staffPosition: Notes.D3 },
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
  { name: "G3", staffPosition: Notes.G3 },
  { name: ["G♯3", "A♭3"], staffPosition: Notes.Ab3 },
  { name: "A3", staffPosition: Notes.A3 },
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
  { name: "D4", staffPosition: Notes.D4 },
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
  { name: "G4", staffPosition: Notes.G4 },
  { name: ["G♯4", "A♭4"], staffPosition: Notes.Ab4 },
  { name: "A4", staffPosition: Notes.A4 },
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
  { name: "D5", staffPosition: Notes.D5 },
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
  { name: "G5", staffPosition: Notes.G5 },
  { name: ["G♯5", "A♭5"], staffPosition: Notes.Ab5 },
  { name: "A5", staffPosition: Notes.A5 },
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
  { name: "D6", staffPosition: Notes.D6 },
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
  { name: "G6", staffPosition: Notes.G6 },
  { name: ["G♯6", "A♭6"], staffPosition: Notes.Ab6 },
  { name: "A6", staffPosition: Notes.A6 },
  {
    name: ["A♯6", "B♭6"],
    staffPosition: Notes.Bb6,
  },
  { name: ["B6", "C♭7"], staffPosition: Notes.B6 },
  { name: ["B♯6", "C7"], staffPosition: Notes.C7 },
  {
    name: ["C♯7", "D♭7"],
    staffPosition: Notes.Db7,
  },
  { name: "D7", staffPosition: Notes.D7 },
  {
    name: ["D♯7", "E♭7"],
    staffPosition: Notes.Eb7,
  },
  { name: ["E7", "F♭7"], staffPosition: Notes.E7 },
  { name: ["E♯7", "F7"], staffPosition: Notes.F7 },
  {
    name: ["F♯7", "G♭7"],
    staffPosition: Notes.Gb7,
  },
  { name: "G7", staffPosition: Notes.G7 },
  { name: ["G♯7", "A♭7"], staffPosition: Notes.Ab7 },
  { name: "A7", staffPosition: Notes.A7 },
  {
    name: ["A♯7", "B♭7"],
    staffPosition: Notes.Bb7,
  },
  { name: ["B7", "C♭8"], staffPosition: Notes.B7 },
  { name: ["B♯7", "C8"], staffPosition: Notes.C8 },
];
