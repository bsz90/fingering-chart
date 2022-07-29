import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Accidental, Formatter, StaveNote, Vex, Voice } from "vexflow";
import { instrumentRanges, notes } from "./constants";
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

      const currentFingeringRegex = getRegex(noteState);

      const currentStaveNote = currentFingeringRegex
        ? [
            new StaveNote({
              keys: [
                `${currentFingeringRegex.note}/${currentFingeringRegex.octave}`,
              ],
              duration: "w",
            }).setXShift(30),
          ]
        : [
            new StaveNote({
              keys: [`e/4`],
              duration: "w",
            })
              .setXShift(30)
              .setStyle({ fillStyle: "rgba(0, 0, 0, 0)" }),
          ];

      //add accidental if exists
      if (currentFingeringRegex?.modifier) {
        currentStaveNote[0].addModifier(
          new Accidental(
            currentFingeringRegex.modifier === "♭" ? "b" : "#"
          ).setXShift(-20)
        );
      }

      // retrieve string from nextNote state to use
      const nextNoteRegex = getRegex(nextNote);

      //note displayed on hover
      const nextStaveNote = (() => {
        if (nextNote && nextNoteRegex) {
          const staveNote = [
            new StaveNote({
              keys: [`${nextNoteRegex.note}/${nextNoteRegex.octave}`],
              duration: "w",
            })
              .setXShift(30)
              .setStyle({
                fillStyle: draggingNote ? "rgba(0, 0, 0, 0)" : "#DEDEDE",
              }),
          ];
          if (nextNoteRegex.note !== currentFingeringRegex?.note)
            return staveNote;
          if (nextNoteRegex.octave !== currentFingeringRegex?.octave)
            return staveNote;
        }
        return [
          new StaveNote({
            keys: [`e/4`],
            duration: "w",
          })
            .setXShift(30)
            .setStyle({ fillStyle: "rgba(0, 0, 0, 0)" }),
        ];
      })();

      const currentStaveNoteFirst = (() => {
        const currentStaveNotePosition = currentStaveNote[0].getLineNumber();
        const nextStaveNotePosition = nextStaveNote[0].getLineNumber();

        if (Math.abs(currentStaveNotePosition - nextStaveNotePosition) < 1) {
          return false;
        }
        if (currentStaveNotePosition >= 1 && currentStaveNotePosition <= 5)
          return true;
        if (currentStaveNotePosition > 5)
          return nextStaveNotePosition < currentStaveNotePosition;
        if (currentStaveNotePosition < 1)
          return nextStaveNotePosition > currentStaveNotePosition;

        return false;
      })();

      nextStaveNote[0].setLedgerLineStyle({
        strokeStyle: draggingNote ? "rgba(0, 0, 0, 0)" : "#DEDEDE",
      });

      const voices = [
        new Voice({
          num_beats: 4,
          beat_value: 4,
        }).addTickables(
          currentStaveNoteFirst ? currentStaveNote : nextStaveNote
        ),
        new Voice({
          num_beats: 4,
          beat_value: 4,
        })
          .addTickables(
            currentStaveNoteFirst ? nextStaveNote : currentStaveNote
          )
          .setGroupStyle({ strokeStyle: "rgba(0, 0, 0, 0.5)" }),
      ];

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
    if (typeof noteState.name === "string") {
      return noteState.name;
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
