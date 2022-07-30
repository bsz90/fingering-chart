import { current } from "immer";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Accidental, Formatter, StaveNote, Vex, Voice } from "vexflow";
import { instrumentClef, instrumentRanges, notes } from "./constants";
import { Clef, Instrument, InstrumentKeys, Note, Notes } from "./types";
import { getRegex, sortNoteNames } from "./utils";

export const Stave = ({
  noteState,
  currentInstrument,
  currentInstrumentClef,
  currentInstrumentRange,
  allPossibleInstrumentFingerings,
  setActiveKeys,
  setNoteState,
}: {
  noteState: Note;
  currentInstrument: Instrument;
  currentInstrumentClef: Clef;
  currentInstrumentRange: Note[];
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

      const getCurrentStaveNote = (noteName: string[]) => {
        if (noteName.every((string) => string)) {
          const regex = getRegex(noteName);
          const staveNotes = regex.map((noteRegex, id) => {
            const xShift = regex.length === 1 ? 30 : id === 0 ? 8 : 5;
            const duration = noteName.length === 1 ? "w" : "h";

            if (noteRegex.modifier) {
              const flat = noteRegex.modifier === "♭";
              const modifier = new Accidental(flat ? "b" : "#").setXShift(
                id === 0 ? -6 : -4
              );

              return new StaveNote({
                keys: [`${noteRegex.note}/${noteRegex.octave}`],
                duration: duration,
              })
                .setXShift(xShift)
                .addModifier(modifier);
            }
            return new StaveNote({
              keys: [`${noteRegex.note}/${noteRegex.octave}`],
              duration: duration,
            }).setXShift(xShift);
          });

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
          getCurrentStaveNote(noteState.name),
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

      // const voices = [
      //   new Voice({
      //     num_beats: numberOfBeats(noteState),
      //     beat_value: 4,
      //   }).addTickables(
      //     currentStaveNoteFirst
      //       ? getCurrentStaveNote(noteState.name)
      //       : getNextStaveNote(nextNote)
      //   ),
      //   new Voice({
      //     num_beats: numberOfBeats,
      //     beat_value: 4,
      //   }).addTickables(
      //     currentStaveNoteFirst
      //       ? getNextStaveNote(nextNote)
      //       : getCurrentStaveNote(noteState.name)
      //   ),
      // ];

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
    const windowSize = 384;
    const pixelsBetweenNotes = 5;
    const offsetY = 70;
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
          className="w-full flex justify-center overflow-hidden"
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
