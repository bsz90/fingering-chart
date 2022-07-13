import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { notes } from "./constants";
import { InstrumentKey } from "./InstrumentKey";
import { Position, SaxophoneKeys, Section, Woodwind, Note } from "./types";

export const SingleReedFingeringChart = ({
  currentInstrument,
  setCurrentInstrument,
}: {
  currentInstrument: Woodwind;
  setCurrentInstrument: Dispatch<SetStateAction<Woodwind | undefined>>;
}) => {
  const topMainKeys = currentInstrument.keyGroups.filter(
    ({ section, position }) =>
      section === Section.TOP && position === Position.CENTER
  );

  const topThumbKeys = currentInstrument.keyGroups.filter(
    ({ section, position }) =>
      section === Section.TOP && position === Position.LEFT
  );

  const topSideKeys = currentInstrument.keyGroups.filter(
    ({ section, position }) =>
      section === Section.TOP && position === Position.RIGHT
  );

  const bottomMainKeys = currentInstrument.keyGroups.filter(
    ({ section, position }) =>
      section === Section.BOTTOM && position === Position.CENTER
  );

  const bottomSideKeys = currentInstrument.keyGroups.filter(
    ({ section, position }) =>
      section === Section.BOTTOM && position === Position.LEFT
  );

  const bottomLeftPinkyKeys = currentInstrument.keyGroups.filter(
    ({ section, position }) =>
      section === Section.BOTTOM && position === Position.RIGHT
  );

  const toggleKey = (newKey: SaxophoneKeys) => {
    setCurrentInstrument((prev) => {
      if (prev) {
        return {
          ...prev,
          activeKeys: prev.activeKeys.includes(newKey)
            ? prev.activeKeys.filter((activeKey) => activeKey !== newKey)
            : [...prev.activeKeys, newKey],
        };
      }
    });
  };

  const currentFingering = useMemo(() => {
    const instrumentRange = notes.slice(
      currentInstrument.range.lowestNote,
      currentInstrument.range.highestNote + 1
    );

    const { activeKeys, fingerings } = currentInstrument;

    const checkArray = (array: SaxophoneKeys[]) => {
      return (
        array.every((key) => activeKeys.includes(key)) &&
        array.length === activeKeys.length
      );
    };

    const checkNestedArray = (nestedArray: SaxophoneKeys[][]) => {
      return nestedArray.some((array) => checkArray(array));
    };

    const index = Object.values(fingerings).findIndex((fingering) => {
      if (typeof fingering[0] === "string") {
        return checkArray(fingering as SaxophoneKeys[]);
      }
      return checkNestedArray(fingering as SaxophoneKeys[][]);
    });

    if (index > -1) return instrumentRange[index];
  }, [currentInstrument]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
      <div className="w-full flex justify-center">
        <h1 className="text-3xl font-bold underline text-center">
          {currentInstrument.name} {JSON.stringify(currentFingering)}
        </h1>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="h-[600px] bg-gray-300"></div>
        <div className="w-1/2 h-[700px] flex">
          <div className="w-16 flex flex-col items-center justify-center">
            <div className="w-full h-[48%] flex justify-end items-end">
              {topThumbKeys.map((keyGroup) => {
                return (
                  <div
                    className="w-1/2 flex flex-col items-center"
                    key={keyGroup.group}
                  >
                    {keyGroup.keys.map((key) => {
                      return (
                        <button
                          className="overflow-hidden"
                          key={key.name}
                          style={key.style}
                          onClick={() => toggleKey(key.name)}
                        >
                          <div
                            className="w-full h-full pointer-events-none touch-none"
                            style={{
                              backgroundColor:
                                currentInstrument.activeKeys?.includes(key.name)
                                  ? "gray"
                                  : "white",
                            }}
                          ></div>
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="w-full h-[48%] flex justify-end">
              {bottomSideKeys.map((keyGroup) => {
                return (
                  <div
                    className="w-1/2 flex flex-col items-center"
                    key={keyGroup.group}
                  >
                    {keyGroup.keys.map((key) => {
                      return (
                        <InstrumentKey
                          key={key.name}
                          toggleKey={toggleKey}
                          name={key.name}
                          style={key.style}
                          activeKeys={currentInstrument.activeKeys}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-8 flex flex-col items-center justify-center">
            <div className="w-full h-[48%] flex justify-center items-end">
              {topMainKeys.map((keyGroup) => {
                return (
                  <div
                    className="w-1/2 flex flex-col items-center"
                    key={keyGroup.group}
                  >
                    {keyGroup.keys.map((key) => {
                      return (
                        <button
                          className="overflow-hidden"
                          key={key.name}
                          style={key.style}
                          onClick={() => toggleKey(key.name)}
                        >
                          <div
                            className="w-full h-full pointer-events-none touch-none"
                            style={{
                              backgroundColor:
                                currentInstrument.activeKeys?.includes(key.name)
                                  ? "gray"
                                  : "white",
                            }}
                          ></div>
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <hr className="border-2 rounded-full border-sky-500 w-3/5" />
            <div className="w-full h-[48%] flex justify-center">
              {bottomMainKeys.map((keyGroup) => {
                return (
                  <div
                    className="w-1/2 flex flex-col items-center"
                    key={keyGroup.group}
                  >
                    {keyGroup.keys.map((key) => {
                      return (
                        <button
                          className="overflow-hidden"
                          key={key.name}
                          style={key.style}
                          onClick={() => toggleKey(key.name)}
                        >
                          <div
                            className="w-full h-full pointer-events-none touch-none"
                            style={{
                              backgroundColor:
                                currentInstrument.activeKeys?.includes(key.name)
                                  ? "gray"
                                  : "white",
                            }}
                          ></div>
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-16 flex flex-col items-center justify-center">
            <div className="w-full h-[48%] flex justify-start items-end">
              {topSideKeys.map((keyGroup) => {
                return (
                  <div
                    className="w-1/2 flex flex-col items-center"
                    key={keyGroup.group}
                  >
                    {keyGroup.keys.map((key) => {
                      return (
                        <button
                          className="overflow-hidden"
                          key={key.name}
                          style={key.style}
                          onClick={() => toggleKey(key.name)}
                        >
                          <div
                            className="w-full h-full pointer-events-none touch-none"
                            style={{
                              backgroundColor:
                                currentInstrument.activeKeys?.includes(key.name)
                                  ? "gray"
                                  : "white",
                            }}
                          ></div>
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="w-full h-[48%] flex justify-start">
              {bottomLeftPinkyKeys.map((keyGroup) => {
                return (
                  <div className="w-1/2 flex flex-col" key={keyGroup.group}>
                    {keyGroup.keys.map((key) => {
                      return (
                        <button
                          className="overflow-hidden"
                          key={key.name}
                          style={key.style}
                          onClick={() => toggleKey(key.name)}
                        >
                          <div
                            className="w-full h-full pointer-events-none touch-none"
                            style={{
                              backgroundColor:
                                currentInstrument.activeKeys?.includes(key.name)
                                  ? "gray"
                                  : "white",
                            }}
                          ></div>
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
