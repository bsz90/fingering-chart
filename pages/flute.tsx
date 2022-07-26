import { Clef, FluteKeys, Notes, Position, Section } from "./types";

const flute = {
  family: "woodwinds",
  instruments: [
    {
      name: "flute",
      range: {
        lowestNote: Notes.C4,
        highestNote: Notes.Bb6,
      },
      activeKeys: [],
      keyGroups: [
        {
          group: "Left Thumb Keys",
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
        {
          group: "Left Hand Main Keys",
          section: Section.TOP,
          position: Position.CENTER,
          keys: [
            {
              name: FluteKeys.LEFT_FIRST_FINGER,
              className: "rounded-[50%] h-[62px] w-[62px] mb-[10px]",
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
          group: "Left Pinky Keys",
          section: Section.TOP,
          position: Position.RIGHT,
          keys: [
            {
              name: FluteKeys.G_SHARP,
              className: "rounded-[10px] h-[24px] w-[48px] mt-[-32px]",
            },
          ],
        },
        {
          group: "Right Hand Main Keys",
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
          group: "Right Hand Trill Keys",
          section: Section.BOTTOM,
          position: Position.LEFT,
          keys: [
            {
              name: FluteKeys.Bb_TRILL,
              className: "rounded-[10px] h-[48px] w-[24px] mt-[-40px]",
            },
            {
              name: FluteKeys.C_SHARP_TRILL,
              className: "rounded-[10px] h-[48px] w-[24px]",
            },
            {
              name: FluteKeys.D_TRILL,
              className: "rounded-[10px] h-[48px] w-[24px]",
            },
            {
              name: FluteKeys.D_SHARP_TRILL,
              className: "rounded-[10px] h-[24px] w-[48px] mt-[15px] ml-[48px]",
            },
          ],
        },
        {
          group: "Right Hand Pinky Keys",
          section: Section.BOTTOM,
          position: Position.RIGHT,
          keys: [
            {
              name: FluteKeys.Eb,
              className: "rounded-[10px] h-[48px] w-[24px] mt-[-40px]",
            },
            {
              name: FluteKeys.LOW_C_SHARP,
              className: "rounded-[10px] h-[48px] w-[24px]",
            },
            {
              name: FluteKeys.LOW_C,
              className: "rounded-[10px] h-[48px] w-[24px]",
            },
            {
              name: FluteKeys.LOW_B,
              className: "rounded-[10px] h-[24px] w-[48px] mt-[15px] ml-[48px]",
            },
          ],
        },
      ],
      fingerings: {
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
          [
            FluteKeys.THUMB_Bb,
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
          [
            FluteKeys.THUMB_Bb,
            FluteKeys.LEFT_FIRST_FINGER,
            FluteKeys.LEFT_SECOND_FINGER,
            FluteKeys.LEFT_THIRD_FINGER,
            FluteKeys.RIGHT_FIRST_FINGER,
            FluteKeys.RIGHT_SECOND_FINGER,
            FluteKeys.RIGHT_THIRD_FINGER,
            FluteKeys.LOW_C,
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
          [
            FluteKeys.THUMB_Bb,
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
          [
            FluteKeys.THUMB_Bb,
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
          [
            FluteKeys.THUMB_Bb,
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
          [
            FluteKeys.THUMB_Bb,
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
            FluteKeys.THUMB_Bb,
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
          [
            FluteKeys.THUMB_Bb,
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
          [
            FluteKeys.THUMB_Bb,
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
          [
            FluteKeys.THUMB_Bb,
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
          [
            FluteKeys.THUMB_Bb,
            FluteKeys.LEFT_FIRST_FINGER,
            FluteKeys.LEFT_SECOND_FINGER,
            FluteKeys.Eb,
          ],
        ],

        //start here

        [Notes.Bb4]: [
          [FluteKeys.LEFT_FIRST_FINGER, FluteKeys.LEFT_SECOND_FINGER],
          [FluteKeys.LEFT_FIRST_FINGER, FluteKeys.RIGHT_FIRST_FINGER],
          [FluteKeys.LEFT_FIRST_FINGER],
        ],
        [Notes.B4]: [FluteKeys.LEFT_FIRST_FINGER],
        [Notes.C5]: [
          [FluteKeys.LEFT_SECOND_FINGER],
          [FluteKeys.LEFT_FIRST_FINGER],
        ],
        [Notes.Db5]: [],
        [Notes.D5]: [
          ,
          FluteKeys.LEFT_FIRST_FINGER,
          FluteKeys.LEFT_SECOND_FINGER,
          FluteKeys.LEFT_THIRD_FINGER,
          FluteKeys.RIGHT_FIRST_FINGER,
          FluteKeys.RIGHT_SECOND_FINGER,
          FluteKeys.RIGHT_THIRD_FINGER,
        ],
        [Notes.Eb5]: [
          ,
          FluteKeys.LEFT_FIRST_FINGER,
          FluteKeys.LEFT_SECOND_FINGER,
          FluteKeys.LEFT_THIRD_FINGER,
          FluteKeys.RIGHT_FIRST_FINGER,
          FluteKeys.RIGHT_SECOND_FINGER,
          FluteKeys.RIGHT_THIRD_FINGER,
        ],
        [Notes.E5]: [
          ,
          FluteKeys.LEFT_FIRST_FINGER,
          FluteKeys.LEFT_SECOND_FINGER,
          FluteKeys.LEFT_THIRD_FINGER,
          FluteKeys.RIGHT_FIRST_FINGER,
          FluteKeys.RIGHT_SECOND_FINGER,
        ],
        [Notes.F5]: [
          ,
          FluteKeys.LEFT_FIRST_FINGER,
          FluteKeys.LEFT_SECOND_FINGER,
          FluteKeys.LEFT_THIRD_FINGER,
          FluteKeys.RIGHT_FIRST_FINGER,
        ],
        [Notes.Gb5]: [
          [
            ,
            FluteKeys.LEFT_FIRST_FINGER,
            FluteKeys.LEFT_SECOND_FINGER,
            FluteKeys.LEFT_THIRD_FINGER,
            FluteKeys.RIGHT_SECOND_FINGER,
          ],
          [
            ,
            FluteKeys.LEFT_FIRST_FINGER,
            FluteKeys.LEFT_SECOND_FINGER,
            FluteKeys.LEFT_THIRD_FINGER,
            FluteKeys.RIGHT_FIRST_FINGER,
          ],
        ],
        [Notes.G5]: [
          ,
          FluteKeys.LEFT_FIRST_FINGER,
          FluteKeys.LEFT_SECOND_FINGER,
          FluteKeys.LEFT_THIRD_FINGER,
        ],
        [Notes.Ab5]: [
          ,
          FluteKeys.LEFT_FIRST_FINGER,
          FluteKeys.LEFT_SECOND_FINGER,
          FluteKeys.LEFT_THIRD_FINGER,
          FluteKeys.G_SHARP,
        ],
        [Notes.A5]: [
          ,
          FluteKeys.LEFT_FIRST_FINGER,
          FluteKeys.LEFT_SECOND_FINGER,
        ],
        [Notes.Bb5]: [
          [, FluteKeys.LEFT_FIRST_FINGER, FluteKeys.LEFT_SECOND_FINGER],
          [, FluteKeys.LEFT_FIRST_FINGER, FluteKeys.RIGHT_FIRST_FINGER],
          [, FluteKeys.LEFT_FIRST_FINGER, ,],
        ],
        [Notes.B5]: [, FluteKeys.LEFT_FIRST_FINGER],
        [Notes.C6]: [
          [, FluteKeys.LEFT_SECOND_FINGER],
          [, FluteKeys.LEFT_FIRST_FINGER, ,],
        ],
        [Notes.Db6]: [],
        [Notes.D6]: [,],
        [Notes.Eb6]: [,],
        [Notes.E6]: [],
        [Notes.F6]: [[], [FluteKeys.LEFT_SECOND_FINGER]],
      },

      clef: Clef.TREBLE,
    },
  ],
};
