import { Dispatch, SetStateAction } from "react";
import { InstrumentKey } from "./InstrumentKey";
import {
  Instrument,
  InstrumentKeyNames,
  WoodwindKeyGroup,
  Position,
} from "./types";
import { createUniqueKey } from "./utils";

export const WoodwindKeyGroups = ({
  keyGroup,
  position,
  toggleKeyOn,
  setToggleKeyOn,
  currentInstrument,
  activeKeys,
  setActiveKeys,
}: {
  keyGroup: WoodwindKeyGroup[];
  position: Position;
  toggleKeyOn: boolean;
  setToggleKeyOn: Dispatch<SetStateAction<boolean>>;
  currentInstrument: Instrument;
  activeKeys: InstrumentKeyNames[] | undefined;
  setActiveKeys: Dispatch<SetStateAction<InstrumentKeyNames[] | undefined>>;
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
        className="w-full h-[48%] flex flex-end items-end"
        style={{
          justifyContent: determineJustify(keyGroup[0].position),
        }}
      >
        <div className="w-full flex flex-col items-center">
          {keyGroup[0].keys.map(({ name, className }) => {
            return (
              <InstrumentKey
                key={createUniqueKey(currentInstrument, name)}
                currentInstrument={currentInstrument}
                name={name}
                className={className}
                toggleKeyOn={toggleKeyOn}
                setToggleKeyOn={setToggleKeyOn}
                activeKeys={activeKeys}
                setActiveKeys={setActiveKeys}
              />
            );
          })}
        </div>
      </div>
      {position === Position.CENTER ? (
        <hr className="border-2 rounded-full border-slate-600 w-3/5" />
      ) : null}
      <div
        className="w-full h-[48%] flex flex-start items-start"
        style={{
          justifyContent: determineJustify(keyGroup[0].position),
        }}
      >
        <div className="w-full flex flex-col items-center">
          {keyGroup[1].keys.map(({ name, className }) => {
            return (
              <InstrumentKey
                key={createUniqueKey(currentInstrument, name)}
                currentInstrument={currentInstrument}
                name={name}
                className={className}
                toggleKeyOn={toggleKeyOn}
                setToggleKeyOn={setToggleKeyOn}
                activeKeys={activeKeys}
                setActiveKeys={setActiveKeys}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
