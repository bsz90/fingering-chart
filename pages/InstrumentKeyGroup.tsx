import { Dispatch, SetStateAction } from "react";
import { InstrumentKey } from "./InstrumentKey";
import { KeyGroup, Position, SaxophoneKeys, Section, Woodwind } from "./types";

export const InstrumentKeyGroup = ({
  keyGroup,
  position,
  toggleKeyOn,
  setToggleKeyOn,
  currentInstrument,
  setCurrentInstrument,
}: {
  keyGroup: KeyGroup[];
  position: Position;
  toggleKeyOn: boolean;
  setToggleKeyOn: Dispatch<SetStateAction<boolean>>;
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
    <div className="w-32 h-full flex flex-col items-center justify-center">
      <div
        key={keyGroup[0].group}
        className="w-full h-[48%] flex flex-end items-end"
        style={{
          justifyContent: determineJustify(keyGroup[0].position),
        }}
      >
        <div className="w-full flex flex-col items-center">
          {keyGroup[0].keys.map((key) => {
            return (
              <InstrumentKey
                key={key.name}
                name={key.name}
                className={key.className}
                toggleKeyOn={toggleKeyOn}
                setToggleKeyOn={setToggleKeyOn}
                currentInstrument={currentInstrument}
                setCurrentInstrument={setCurrentInstrument}
              />
            );
          })}
        </div>
      </div>
      {position === Position.CENTER ? (
        <hr className="border-2 rounded-full border-slate-600 w-3/5" />
      ) : null}
      <div
        key={keyGroup[1].group}
        className="w-full h-[48%] flex flex-start items-start"
        style={{
          justifyContent: determineJustify(keyGroup[0].position),
        }}
      >
        <div className="w-full flex flex-col items-center">
          {keyGroup[1].keys.map((key) => {
            return (
              <InstrumentKey
                key={key.name}
                name={key.name}
                className={key.className}
                toggleKeyOn={toggleKeyOn}
                setToggleKeyOn={setToggleKeyOn}
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
