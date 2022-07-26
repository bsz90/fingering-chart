import { Clef, Note, Notes, Position, SaxophoneKeys, Section } from "./types";

export const categories = [
  {
    family: "woodwinds",
    instruments: [
      {
        name: "alto saxophone",
        range: {
          lowestNote: Notes.Bb3,
          highestNote: Notes.F6,
        },
        activeKeys: [],
        keyGroups: [
          {
            group: "Left Thumb Keys",
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
            group: "Left Hand Main Keys",
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
            group: "Left Hand Palm Keys",
            section: Section.TOP,
            position: Position.RIGHT,
            keys: [
              {
                name: SaxophoneKeys.Eb_PALM,
                className: "rounded-[10px] h-[62px] w-[24px] mb-[-31px]",
              },
              {
                name: SaxophoneKeys.D_PALM,
                className:
                  "rounded-[10px] h-[62px] w-[24px] mb-[-31px] ml-[48px]",
              },
              {
                name: SaxophoneKeys.F_PALM,
                className: "rounded-[10px] h-[62px] w-[24px] mb-[125px]",
              },
            ],
          },
          {
            group: "Left Pinky Keys",
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
                className:
                  "rounded-[7px] h-[24px] w-[24px] mt-[-24px] ml-[-24px]",
              },
              {
                name: SaxophoneKeys.LOW_Bb,
                className: "rounded-[10px] h-[24px] w-[48px] mt-[0px]",
              },
            ],
          },
          {
            group: "Right Hand Main Keys",
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
            group: "Right Hand Side Keys",
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
                className:
                  "rounded-[10px] h-[24px] w-[48px] mt-[15px] ml-[48px]",
              },
              {
                name: SaxophoneKeys.ALT_F,
                className:
                  "rounded-[10px] h-[24px] w-[48px] mt-[66px] ml-[48px]",
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
        fingerings: {
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

        clef: Clef.TREBLE,
      },
    ],
  },
];

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
