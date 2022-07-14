import { Dispatch, SetStateAction } from "react";
import { InstrumentKey } from "./InstrumentKey";
import {
  DragState,
  KeyGroup,
  Position,
  SaxophoneKeys,
  Section,
  Woodwind,
} from "./types";

export const InstrumentKeyGroup = ({
  keyGroup,
  activeKeys,
  position,
  dragState,
  setDragState,
  currentInstrument,
  setCurrentInstrument,
}: {
  keyGroup: KeyGroup[];
  activeKeys: SaxophoneKeys[];
  position: Position;
  dragState: DragState;
  setDragState: Dispatch<SetStateAction<DragState>>;
  currentInstrument: Woodwind;
  setCurrentInstrument: Dispatch<SetStateAction<Woodwind | undefined>>;
}) => {
  function determineJustify(position: Position) {
    switch (position) {
      case Position.LEFT:
        return "flex-end";
      case Position.CENTER:
        return "center";
      case Position.RIGHT:
        return "flex-start";
      default:
        throw new Error();
    }
  }
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ width: position === Position.CENTER ? "32px" : "64px" }}
    >
      <div
        key={keyGroup[0].group}
        className="w-full h-[48%] flex flex-end items-end"
        style={{
          justifyContent: determineJustify(keyGroup[0].position),
        }}
      >
        <div className="w-1/2 flex flex-col items-center">
          {keyGroup[0].keys.map((key) => {
            return (
              <InstrumentKey
                key={key.name}
                name={key.name}
                style={key.style}
                activeKeys={activeKeys}
                dragState={dragState}
                setDragState={setDragState}
                currentInstrument={currentInstrument}
                setCurrentInstrument={setCurrentInstrument}
              />
            );
          })}
        </div>
      </div>
      {position === Position.CENTER ? (
        <hr className="border-2 rounded-full border-sky-500 w-3/5" />
      ) : null}
      <div
        key={keyGroup[1].group}
        className="w-full h-[48%] flex flex-start items-start"
        style={{
          justifyContent: determineJustify(keyGroup[0].position),
        }}
      >
        <div className="w-1/2 flex flex-col items-center">
          {keyGroup[1].keys.map((key) => {
            return (
              <InstrumentKey
                key={key.name}
                name={key.name}
                style={key.style}
                activeKeys={activeKeys}
                dragState={dragState}
                setDragState={setDragState}
                currentInstrument={currentInstrument}
                setCurrentInstrument={setCurrentInstrument}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
