import {
  CSSProperties,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { notes } from "./constants";
import { InstrumentKey } from "./InstrumentKey";
import { InstrumentKeyGroup } from "./InstrumentKeyGroup";
import {
  Position,
  SaxophoneKeys,
  Section,
  Woodwind,
  Note,
  KeyGroup,
} from "./types";

export const SingleReedFingeringChart = ({
  currentInstrument,
  setCurrentInstrument,
}: {
  currentInstrument: Woodwind;
  setCurrentInstrument: Dispatch<SetStateAction<Woodwind | undefined>>;
}) => {
  const sortKeyGroups = (keyGroup: KeyGroup[]) => {
    const sortedArray: KeyGroup[][] = [[], [], []];

    keyGroup.forEach((arrayItem) => {
      sortedArray[arrayItem.position].push(arrayItem);
    });
    for (let i = 0; i < sortedArray.length; i++) {
      sortedArray[i].sort((keyGroupA, keyGroupB) => {
        if (keyGroupA.position === keyGroupB.position) {
          return keyGroupA.section < keyGroupB.section ? -1 : 1;
        }
        return keyGroupA.position < keyGroupB.position ? -1 : 1;
      });
    }
    return sortedArray;
  };

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
          {sortKeyGroups(currentInstrument.keyGroups).map((keyGroup, id) => {
            return (
              <InstrumentKeyGroup
                key={id}
                keyGroup={keyGroup}
                toggleKey={toggleKey}
                activeKeys={currentInstrument.activeKeys}
                position={id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
