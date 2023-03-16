import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Accidental, Formatter, StaveNote, Vex, Voice } from "vexflow";
import { instrumentRanges, notes } from "./constants";
import { Clef, Instrument, InstrumentKeys, Note, Notes } from "./types";
import { getRegex, sortNoteNames } from "./utils";

export const Stave = ({
  noteState,
  currentInstrument,
  currentInstrumentClef,
  allPossibleInstrumentFingerings,
  setActiveKeys,
  setNoteState,
}: {
  noteState: Note;
  currentInstrument: Instrument;
  currentInstrumentClef: Clef;
  allPossibleInstrumentFingerings: Partial<
    Record<Notes, InstrumentKeys[] | InstrumentKeys[][]>
  >;
  setActiveKeys: Dispatch<SetStateAction<InstrumentKeys[] | undefined>>;
  setNoteState: Dispatch<SetStateAction<Note>>;
}) => {
  //display newNote on pointerMove?
  const [draggingNote, setDraggingNote] = useState<boolean>(false);

  //note displayed on hover
  const [nextNote, setNextNote] = useState<Note | undefined>(undefined);

  //HTMLref for Vexflow
  const [ref, setRef] = useState<HTMLDivElement | null>(null!);

  //VexFlow
  const { Renderer, Stave } = Vex.Flow;

  useEffect(() => {
    if (ref) {
      const renderer = new Renderer(ref, Renderer.Backends.SVG);

      renderer.resize(384, 400);
      const context = renderer.getContext().scale(2.5, 2.5);

      const stave = new Stave(0, 0, 137);

      stave
        .addClef(currentInstrumentClef)
        .setEndBarType(3)
        .setX(8)
        .setY(20)
        .setGroupStyle({ strokeStyle: "#000" });

      const initialStaveNote = [
        new StaveNote({
          keys: [`e/4`],
          duration: "w",
        })
          .setXShift(30)
          .setStyle({ fillStyle: "rgba(0, 0, 0, 0)" }),
      ];

      const getCurrentStaveNote = ({ name, staffPosition }: Note) => {
        if (name.every((string) => string)) {
          const regex = getRegex(name);
          const thirdStaffLine =
            currentInstrumentClef === Clef.TREBLE ? Notes.B4 : Notes.D3;

          const stemDirection = staffPosition > thirdStaffLine ? -1 : 1;

          const setStemLength = (staveNote: StaveNote) => {
            const baseStemLength = 35;
            const extensionLength = staveNote.getStemExtension();
            const stemLength =
              extensionLength > 0
                ? baseStemLength - extensionLength
                : baseStemLength;

            return staveNote.setStemLength(stemLength);
          };

          const staveNotes = regex.map((noteRegex, id) => {
            const xShift = regex.length === 1 ? 30 : id === 0 ? 8 : 5;
            const duration = name.length === 1 ? "w" : "h";

            if (noteRegex.modifier) {
              const flat = noteRegex.modifier === "♭";
              const modifier = new Accidental(flat ? "b" : "#").setXShift(
                id === 0 ? -6 : -4
              );

              const newStaveNote = new StaveNote({
                keys: [`${noteRegex.note}/${noteRegex.octave}`],
                duration: duration,
              })
                .setStemDirection(stemDirection)
                .setXShift(xShift)
                .addModifier(modifier);

              return setStemLength(newStaveNote);
            }

            const newStaveNote = new StaveNote({
              keys: [`${noteRegex.note}/${noteRegex.octave}`],
              duration: duration,
            })
              .setStemDirection(stemDirection)
              .setStemLength(35)
              .setXShift(xShift);

            return newStaveNote;
          });

          if (staveNotes[0].getStemExtension() > 0)
            console.log(staveNotes[0].getStemExtension());

          return staveNotes;
        }
        return initialStaveNote;
      };

      const getNextStaveNote = (nextNote: Note | undefined) => {
        if (nextNote) {
          if (nextNote.staffPosition === noteState.staffPosition)
            return initialStaveNote;

          const regex = getRegex(nextNote.name)[0];

          const nextStaveNote = [
            new StaveNote({
              keys: [`${regex.note}/${regex.octave}`],
              duration: "w",
            })
              .setXShift(30)
              .setStyle({
                fillStyle: draggingNote ? "rgba(0, 0, 0, 0)" : "#DEDEDE",
              }),
          ];

          nextStaveNote[0].setLedgerLineStyle({
            strokeStyle: draggingNote ? "rgba(0, 0, 0, 0)" : "#DEDEDE",
          });

          return nextStaveNote;
        }

        return initialStaveNote;
      };

      const voices = (() => {
        const notes = [
          getNextStaveNote(nextNote),
          getCurrentStaveNote(noteState),
        ];

        return notes.map((staveNote, id) => {
          const beatsPerNote = 4;
          const opaque = id === 0;

          return new Voice({
            num_beats: 4,
            beat_value: 4,
          })
            .addTickables(staveNote)
            .setGroupStyle({
              strokeStyle: `rgba(0, 0, 0, ${opaque ? "0.5" : "1"})`,
            });
        });
      })();

      const formatter = new Formatter().formatToStave(voices, stave);

      stave.setContext(context).draw();

      voices.forEach(function (v) {
        v.draw(context, stave);
      });

      return () => {
        ref.innerHTML = "";
      };
    }
  }, [
    Renderer,
    Stave,
    currentInstrument,
    currentInstrumentClef,
    draggingNote,
    nextNote,
    noteState,
    ref,
  ]);

  //function to display notes below staff
  const displayNote = () => {
    if (noteState.name.length === 1) {
      return noteState.name[0];
    }

    return noteState.name
      .sort((a, b) => sortNoteNames(a, b))[0]
      .concat(" or ", noteState.name[1]);
  };

  //event handlers
  const handlePointerMove = (top: number, clientY: number, buttons: number) => {
    const max = notes.length - 1;

    const nextNoteId = Math.min(
      Math.max(
        max - Math.floor((clientY - top) / 7.5),
        instrumentRanges[currentInstrument].lowestNote
      ),
      instrumentRanges[currentInstrument].highestNote
    );

    setNextNote(notes[nextNoteId]);
    if (buttons) {
      setDraggingNote(true);
      if (nextNote) changeNote(nextNote);
    }
    if (!buttons) setDraggingNote(false);
  };

  const changeNote = (nextNote: Note) => {
    setActiveKeys((prev) => {
      if (prev) {
        const index = nextNote.staffPosition;
        const newFingering = allPossibleInstrumentFingerings[index];
        if (newFingering === undefined) return [];
        if (Array.isArray(newFingering[0]))
          return [...(newFingering[0] as InstrumentKeys[])];
        return [...(newFingering as InstrumentKeys[])];
      }
    });
    setNoteState({ ...nextNote });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex items-end h-[15%]">
        <h1 className="h-20 text-[40px] capitalize text-bold text-center font-serif flex items-center">
          {currentInstrument}
        </h1>
      </div>
      <div className="w-[384px] rounded-xl flex flex-col justify-center items-center">
        <div
          className="w-full flex justify-center overflow-hidden cursor-pointer"
          ref={setRef}
          onPointerMove={({ currentTarget, clientY, buttons }) => {
            const { top } = currentTarget.getBoundingClientRect();
            handlePointerMove(top, clientY, buttons);
          }}
          onClick={() => {
            if (nextNote) {
              changeNote(nextNote);
            }
          }}
          onPointerLeave={() => {
            setNextNote(undefined);
          }}
        ></div>
      </div>
      <div className="h-[15%] w-full">
        <h2 className="w-full p-4 text-[40px] font-serif text-center text-s">
          {displayNote()}
        </h2>
      </div>
    </div>
  );
};
