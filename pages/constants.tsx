import { Note, Notes, Position, SaxophoneKeys, Section } from "./types";

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
                name: SaxophoneKeys.OCTAVEKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "10px",
                  height: "40px",
                  width: "15px",
                  marginBottom: "200px",
                },
              },
            ],
          },
          {
            group: "Left Hand Main Keys",
            section: Section.TOP,
            position: Position.CENTER,
            keys: [
              {
                name: SaxophoneKeys.FRONT_F_KEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "50%",
                  height: "15px",
                  width: "15px",
                  marginBottom: "10px",
                },
              },
              {
                name: SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                  marginBottom: "10px",
                },
              },
              {
                name: SaxophoneKeys.BISKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "50%",
                  height: "15px",
                  width: "15px",
                  marginBottom: "10px",
                },
              },
              {
                name: SaxophoneKeys.LEFTSECONDFINGERKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                  marginBottom: "30px",
                },
              },
              {
                name: SaxophoneKeys.LEFTTHIRDFINGERKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                  marginBottom: "50px",
                },
              },
            ],
          },
          {
            group: "Left Hand Palm Keys",
            section: Section.TOP,
            position: Position.RIGHT,
            keys: [
              {
                name: SaxophoneKeys.EbPALMKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "10px",
                  height: "30px",
                  width: "15px",
                  marginBottom: "-15px",
                },
              },
              {
                name: SaxophoneKeys.DPALMKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "10px",
                  height: "30px",
                  width: "15px",
                  marginBottom: "-15px",
                  marginLeft: "30px",
                },
              },
              {
                name: SaxophoneKeys.FPALMKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "10px",
                  height: "30px",
                  width: "15px",
                  marginBottom: "125px",
                },
              },
            ],
          },
          {
            group: "Left Pinky Keys",
            section: Section.BOTTOM,
            position: Position.RIGHT,
            keys: [
              {
                name: SaxophoneKeys.GSHARPKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "10px",
                  height: "25px",
                  width: "40px",
                  marginTop: "-32px",
                },
              },
              {
                name: SaxophoneKeys.LOWBKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "7px",
                  height: "15px",
                  width: "20px",
                  marginTop: "0px",
                  marginLeft: "20px",
                },
              },
              {
                name: SaxophoneKeys.LOWCSHARPKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "7px",
                  height: "15px",
                  width: "20px",
                  marginTop: "-15px",
                  marginLeft: "-20px",
                },
              },
              {
                name: SaxophoneKeys.LOWBbKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "10px",
                  height: "25px",
                  width: "40px",
                  marginTop: "0px",
                },
              },
            ],
          },
          {
            group: "Right Hand Main Keys",
            section: Section.BOTTOM,
            position: Position.CENTER,
            keys: [
              {
                name: SaxophoneKeys.RIGHTFIRSTFINGERKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                  marginTop: "50px",
                },
              },
              {
                name: SaxophoneKeys.RIGHTSECONDFINGERKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                  marginTop: "30px",
                },
              },
              {
                name: SaxophoneKeys.RIGHTTHIRDFINGERKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                  marginTop: "30px",
                },
              },
            ],
          },
          {
            group: "Right Hand Side Keys",
            section: Section.BOTTOM,
            position: Position.LEFT,
            keys: [
              {
                name: SaxophoneKeys.ESIDEKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "10px",
                  height: "23px",
                  width: "14px",
                  marginTop: "12px",
                },
              },
              {
                name: SaxophoneKeys.CSIDEKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "10px",
                  height: "23px",
                  width: "14px",
                },
              },
              {
                name: SaxophoneKeys.BbSIDEKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "10px",
                  height: "23px",
                  width: "14px",
                },
              },
              {
                name: SaxophoneKeys.HIGHFSHARPKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "10px",
                  height: "15px",
                  width: "30px",
                  marginTop: "10px",
                  marginLeft: "15px",
                },
              },
              {
                name: SaxophoneKeys.ALTFKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "10px",
                  height: "15px",
                  width: "30px",
                  marginTop: "46px",
                  marginLeft: "15px",
                },
              },
              {
                name: SaxophoneKeys.LOWEbKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "50px 50px 15px 15px ",
                  height: "25px",
                  width: "40px",
                  marginTop: "38px",
                },
              },
              {
                name: SaxophoneKeys.LOWCKEY,
                style: {
                  borderWidth: "4px",
                  borderColor: "#0ea5e9",
                  borderRadius: "15px 15px 50px 50px",
                  height: "25px",
                  width: "40px",
                  marginTop: "1px",
                },
              },
            ],
          },
        ],
        fingerings: {
          [Notes.Bb3]: [
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
            SaxophoneKeys.LEFTTHIRDFINGERKEY,
            SaxophoneKeys.RIGHTFIRSTFINGERKEY,
            SaxophoneKeys.RIGHTSECONDFINGERKEY,
            SaxophoneKeys.RIGHTTHIRDFINGERKEY,
            SaxophoneKeys.LOWCKEY,
            SaxophoneKeys.LOWBbKEY,
          ],
          [Notes.B3]: [
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
            SaxophoneKeys.LEFTTHIRDFINGERKEY,
            SaxophoneKeys.RIGHTFIRSTFINGERKEY,
            SaxophoneKeys.RIGHTSECONDFINGERKEY,
            SaxophoneKeys.RIGHTTHIRDFINGERKEY,
            SaxophoneKeys.LOWCKEY,
            SaxophoneKeys.LOWBKEY,
          ],
          [Notes.C4]: [
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
            SaxophoneKeys.LEFTTHIRDFINGERKEY,
            SaxophoneKeys.RIGHTFIRSTFINGERKEY,
            SaxophoneKeys.RIGHTSECONDFINGERKEY,
            SaxophoneKeys.RIGHTTHIRDFINGERKEY,
            SaxophoneKeys.LOWCKEY,
          ],
          [Notes.Db4]: [
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
            SaxophoneKeys.LEFTTHIRDFINGERKEY,
            SaxophoneKeys.RIGHTFIRSTFINGERKEY,
            SaxophoneKeys.RIGHTSECONDFINGERKEY,
            SaxophoneKeys.RIGHTTHIRDFINGERKEY,
            SaxophoneKeys.LOWCKEY,
            SaxophoneKeys.LOWCSHARPKEY,
          ],
          [Notes.D4]: [
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
            SaxophoneKeys.LEFTTHIRDFINGERKEY,
            SaxophoneKeys.RIGHTFIRSTFINGERKEY,
            SaxophoneKeys.RIGHTSECONDFINGERKEY,
            SaxophoneKeys.RIGHTTHIRDFINGERKEY,
          ],
          [Notes.Eb4]: [
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
            SaxophoneKeys.LEFTTHIRDFINGERKEY,
            SaxophoneKeys.RIGHTFIRSTFINGERKEY,
            SaxophoneKeys.RIGHTSECONDFINGERKEY,
            SaxophoneKeys.RIGHTTHIRDFINGERKEY,
            SaxophoneKeys.LOWEbKEY,
          ],
          [Notes.E4]: [
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
            SaxophoneKeys.LEFTTHIRDFINGERKEY,
            SaxophoneKeys.RIGHTFIRSTFINGERKEY,
            SaxophoneKeys.RIGHTSECONDFINGERKEY,
          ],
          [Notes.F4]: [
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
            SaxophoneKeys.LEFTTHIRDFINGERKEY,
            SaxophoneKeys.RIGHTFIRSTFINGERKEY,
          ],
          [Notes.Gb4]: [
            [
              SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
              SaxophoneKeys.LEFTSECONDFINGERKEY,
              SaxophoneKeys.LEFTTHIRDFINGERKEY,
              SaxophoneKeys.RIGHTSECONDFINGERKEY,
            ],
            [
              SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
              SaxophoneKeys.LEFTSECONDFINGERKEY,
              SaxophoneKeys.LEFTTHIRDFINGERKEY,
              SaxophoneKeys.RIGHTFIRSTFINGERKEY,
              SaxophoneKeys.ALTFKEY,
            ],
          ],
          [Notes.G4]: [
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
            SaxophoneKeys.LEFTTHIRDFINGERKEY,
          ],
          [Notes.Ab4]: [
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
            SaxophoneKeys.LEFTTHIRDFINGERKEY,
            SaxophoneKeys.GSHARPKEY,
          ],
          [Notes.A4]: [
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
          ],
          [Notes.Bb4]: [
            [
              SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
              SaxophoneKeys.LEFTSECONDFINGERKEY,
              SaxophoneKeys.BbSIDEKEY,
            ],
            [
              SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
              SaxophoneKeys.RIGHTFIRSTFINGERKEY,
            ],
            [SaxophoneKeys.LEFT_FIRST_FINGER_KEY, SaxophoneKeys.BISKEY],
          ],
          [Notes.B4]: [SaxophoneKeys.LEFT_FIRST_FINGER_KEY],
          [Notes.C5]: [
            [SaxophoneKeys.LEFTSECONDFINGERKEY],
            [SaxophoneKeys.LEFT_FIRST_FINGER_KEY, SaxophoneKeys.CSIDEKEY],
          ],
          [Notes.Db5]: [],
          [Notes.D5]: [
            SaxophoneKeys.OCTAVEKEY,
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
            SaxophoneKeys.LEFTTHIRDFINGERKEY,
            SaxophoneKeys.RIGHTFIRSTFINGERKEY,
            SaxophoneKeys.RIGHTSECONDFINGERKEY,
            SaxophoneKeys.RIGHTTHIRDFINGERKEY,
          ],
          [Notes.Eb5]: [
            SaxophoneKeys.OCTAVEKEY,
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
            SaxophoneKeys.LEFTTHIRDFINGERKEY,
            SaxophoneKeys.RIGHTFIRSTFINGERKEY,
            SaxophoneKeys.RIGHTSECONDFINGERKEY,
            SaxophoneKeys.RIGHTTHIRDFINGERKEY,
            SaxophoneKeys.LOWEbKEY,
          ],
          [Notes.E5]: [
            SaxophoneKeys.OCTAVEKEY,
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
            SaxophoneKeys.LEFTTHIRDFINGERKEY,
            SaxophoneKeys.RIGHTFIRSTFINGERKEY,
            SaxophoneKeys.RIGHTSECONDFINGERKEY,
          ],
          [Notes.F5]: [
            SaxophoneKeys.OCTAVEKEY,
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
            SaxophoneKeys.LEFTTHIRDFINGERKEY,
            SaxophoneKeys.RIGHTFIRSTFINGERKEY,
          ],
          [Notes.Gb5]: [
            [
              SaxophoneKeys.OCTAVEKEY,
              SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
              SaxophoneKeys.LEFTSECONDFINGERKEY,
              SaxophoneKeys.LEFTTHIRDFINGERKEY,
              SaxophoneKeys.RIGHTSECONDFINGERKEY,
            ],
            [
              SaxophoneKeys.OCTAVEKEY,
              SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
              SaxophoneKeys.LEFTSECONDFINGERKEY,
              SaxophoneKeys.LEFTTHIRDFINGERKEY,
              SaxophoneKeys.RIGHTFIRSTFINGERKEY,
              SaxophoneKeys.ALTFKEY,
            ],
          ],
          [Notes.G5]: [
            SaxophoneKeys.OCTAVEKEY,
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
            SaxophoneKeys.LEFTTHIRDFINGERKEY,
          ],
          [Notes.Ab5]: [
            SaxophoneKeys.OCTAVEKEY,
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
            SaxophoneKeys.LEFTTHIRDFINGERKEY,
            SaxophoneKeys.GSHARPKEY,
          ],
          [Notes.A5]: [
            SaxophoneKeys.OCTAVEKEY,
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
            SaxophoneKeys.LEFTSECONDFINGERKEY,
          ],
          [Notes.Bb5]: [
            [
              SaxophoneKeys.OCTAVEKEY,
              SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
              SaxophoneKeys.LEFTSECONDFINGERKEY,
              SaxophoneKeys.BbSIDEKEY,
            ],
            [
              SaxophoneKeys.OCTAVEKEY,
              SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
              SaxophoneKeys.RIGHTFIRSTFINGERKEY,
            ],
            [
              SaxophoneKeys.OCTAVEKEY,
              SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
              SaxophoneKeys.BISKEY,
            ],
          ],
          [Notes.B5]: [
            SaxophoneKeys.OCTAVEKEY,
            SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
          ],
          [Notes.C6]: [
            [SaxophoneKeys.OCTAVEKEY, SaxophoneKeys.LEFTSECONDFINGERKEY],
            [
              SaxophoneKeys.OCTAVEKEY,
              SaxophoneKeys.LEFT_FIRST_FINGER_KEY,
              SaxophoneKeys.CSIDEKEY,
            ],
          ],
          [Notes.Db6]: [SaxophoneKeys.OCTAVEKEY],
          [Notes.D6]: [SaxophoneKeys.OCTAVEKEY, SaxophoneKeys.DPALMKEY],
          [Notes.Eb6]: [
            SaxophoneKeys.OCTAVEKEY,
            SaxophoneKeys.DPALMKEY,
            SaxophoneKeys.EbPALMKEY,
          ],
          [Notes.E6]: [
            SaxophoneKeys.OCTAVEKEY,
            SaxophoneKeys.DPALMKEY,
            SaxophoneKeys.EbPALMKEY,
            SaxophoneKeys.FPALMKEY,
            SaxophoneKeys.ESIDEKEY,
          ],
          [Notes.F6]: [
            [
              SaxophoneKeys.OCTAVEKEY,
              SaxophoneKeys.DPALMKEY,
              SaxophoneKeys.EbPALMKEY,
              SaxophoneKeys.FPALMKEY,
              SaxophoneKeys.ESIDEKEY,
            ],
            [
              SaxophoneKeys.FRONT_F_KEY,
              SaxophoneKeys.OCTAVEKEY,
              SaxophoneKeys.LEFTSECONDFINGERKEY,
            ],
          ],
        },
      },
    ],
  },
];

export const notes: Note[] = [
  { name: "A0", staffPosition: Notes.A0 },
  { name: ["A#0", "Bb0"], staffPosition: Notes.Bb0 },
  { name: ["B0", "Cb1"], staffPosition: Notes.B0 },
  { name: ["B#0", "C1"], staffPosition: Notes.C1 },
  {
    name: ["C#1", "D1"],
    staffPosition: Notes.Db1,
  },
  { name: "D1", staffPosition: Notes.D1 },
  {
    name: ["D#1", "Eb1"],
    staffPosition: Notes.Eb1,
  },
  { name: ["E1", "Fb1"], staffPosition: Notes.E1 },
  { name: ["E#1", "F1"], staffPosition: Notes.F1 },
  {
    name: ["A#1", "Bb1"],
    staffPosition: Notes.Gb1,
  },
  { name: "G1", staffPosition: Notes.G1 },
  { name: ["G#1", "Ab1"], staffPosition: Notes.Ab1 },
  { name: "A1", staffPosition: Notes.A1 },
  {
    name: ["A#1", "Bb1"],
    staffPosition: Notes.Bb1,
  },
  { name: ["B1", "Cb2"], staffPosition: Notes.B1 },
  { name: ["B#1", "C2"], staffPosition: Notes.C2 },
  {
    name: ["C#2", "D2"],
    staffPosition: Notes.Db2,
  },
  { name: "D2", staffPosition: Notes.D2 },
  {
    name: ["D#2", "Eb2"],
    staffPosition: Notes.Eb2,
  },
  { name: ["E2", "Fb2"], staffPosition: Notes.E2 },
  { name: ["E#2", "F2"], staffPosition: Notes.F2 },
  {
    name: ["A#2", "Bb2"],
    staffPosition: Notes.Gb2,
  },
  { name: "G2", staffPosition: Notes.G2 },
  { name: ["G#2", "Ab2"], staffPosition: Notes.Ab2 },
  { name: "A2", staffPosition: Notes.A2 },
  {
    name: ["A#2", "Bb2"],
    staffPosition: Notes.Bb2,
  },
  { name: ["B2", "Cb3"], staffPosition: Notes.B2 },
  { name: ["B#2", "C3"], staffPosition: Notes.C3 },
  {
    name: ["C#3", "D3"],
    staffPosition: Notes.Db3,
  },
  { name: "D3", staffPosition: Notes.D3 },
  {
    name: ["D#3", "Eb3"],
    staffPosition: Notes.Eb3,
  },
  { name: ["E3", "Fb3"], staffPosition: Notes.E3 },
  { name: ["E#3", "F3"], staffPosition: Notes.F3 },
  {
    name: ["A#3", "Bb3"],
    staffPosition: Notes.Gb3,
  },
  { name: "G3", staffPosition: Notes.G3 },
  { name: ["G#3", "Ab3"], staffPosition: Notes.Ab3 },
  { name: "A3", staffPosition: Notes.A3 },
  {
    name: ["A#3", "Bb3"],
    staffPosition: Notes.Bb3,
  },
  { name: ["B3", "Cb4"], staffPosition: Notes.B3 },
  { name: ["B#3", "C4"], staffPosition: Notes.C4 },
  {
    name: ["C#4", "D4"],
    staffPosition: Notes.Db4,
  },
  { name: "D4", staffPosition: Notes.D4 },
  {
    name: ["D#4", "Eb4"],
    staffPosition: Notes.Eb4,
  },
  { name: ["E4", "Fb4"], staffPosition: Notes.E4 },
  { name: ["E#4", "F4"], staffPosition: Notes.F4 },
  {
    name: ["A#4", "Bb4"],
    staffPosition: Notes.Gb4,
  },
  { name: "G4", staffPosition: Notes.G4 },
  { name: ["G#4", "Ab4"], staffPosition: Notes.Ab4 },
  { name: "A4", staffPosition: Notes.A4 },
  {
    name: ["A#4", "Bb4"],
    staffPosition: Notes.Bb4,
  },
  { name: ["B4", "Cb5"], staffPosition: Notes.B4 },
  { name: ["B#4", "C5"], staffPosition: Notes.C5 },
  {
    name: ["C#5", "D5"],
    staffPosition: Notes.Db5,
  },
  { name: "D5", staffPosition: Notes.D5 },
  {
    name: ["D#5", "Eb5"],
    staffPosition: Notes.Eb5,
  },
  { name: ["E5", "Fb5"], staffPosition: Notes.E5 },
  { name: ["E#5", "F5"], staffPosition: Notes.F5 },
  {
    name: ["A#5", "Bb5"],
    staffPosition: Notes.Gb5,
  },
  { name: "G5", staffPosition: Notes.G5 },
  { name: ["G#5", "Ab5"], staffPosition: Notes.Ab5 },
  { name: "A5", staffPosition: Notes.A5 },
  {
    name: ["A#5", "Bb5"],
    staffPosition: Notes.Bb5,
  },
  { name: ["B5", "Cb6"], staffPosition: Notes.B5 },
  { name: ["B#5", "C6"], staffPosition: Notes.C6 },
  {
    name: ["C#6", "D6"],
    staffPosition: Notes.Db6,
  },
  { name: "D6", staffPosition: Notes.D6 },
  {
    name: ["D#6", "Eb6"],
    staffPosition: Notes.Eb6,
  },
  { name: ["E6", "Fb6"], staffPosition: Notes.E6 },
  { name: ["E#6", "F6"], staffPosition: Notes.F6 },
  {
    name: ["A#6", "Bb6"],
    staffPosition: Notes.Gb6,
  },
  { name: "G6", staffPosition: Notes.G6 },
  { name: ["G#6", "Ab6"], staffPosition: Notes.Ab6 },
  { name: "A6", staffPosition: Notes.A6 },
  {
    name: ["A#6", "Bb6"],
    staffPosition: Notes.Bb6,
  },
  { name: ["B6", "Cb7"], staffPosition: Notes.B6 },
  { name: ["B#6", "C7"], staffPosition: Notes.C7 },
  {
    name: ["C#7", "D7"],
    staffPosition: Notes.Db7,
  },
  { name: "D7", staffPosition: Notes.D7 },
  {
    name: ["D#7", "Eb7"],
    staffPosition: Notes.Eb7,
  },
  { name: ["E7", "Fb7"], staffPosition: Notes.E7 },
  { name: ["E#7", "F7"], staffPosition: Notes.F7 },
  {
    name: ["A#7", "Bb7"],
    staffPosition: Notes.Gb7,
  },
  { name: "G7", staffPosition: Notes.G7 },
  { name: ["G#7", "Ab7"], staffPosition: Notes.Ab7 },
  { name: "A7", staffPosition: Notes.A7 },
  {
    name: ["A#7", "Bb7"],
    staffPosition: Notes.Bb7,
  },
  { name: ["B7", "Cb8"], staffPosition: Notes.B7 },
  { name: ["B#7", "C8"], staffPosition: Notes.C8 },
];
