import { Dispatch, SetStateAction } from "react";
import {
  BrassInstrument,
  Instrument,
  InstrumentKeyNames,
  TrombonePositions,
} from "./types";
import * as Tooltip from "@radix-ui/react-tooltip";
import { createUniqueKey, isBrass, isWoodwind } from "./utils";
import { brassDiagrams } from "./constants";

export const InstrumentKey = ({
  currentInstrument,
  name,
  className,
  toggleKeyOn,
  setToggleKeyOn,
  activeKeys,
  setActiveKeys,
}: {
  currentInstrument: Instrument;
  name: InstrumentKeyNames;
  className: string;
  toggleKeyOn: boolean;
  setToggleKeyOn: Dispatch<SetStateAction<boolean>>;
  activeKeys: InstrumentKeyNames[] | undefined;
  setActiveKeys: Dispatch<SetStateAction<InstrumentKeyNames[] | undefined>>;
}) => {
  const isTrombone = currentInstrument === BrassInstrument.TROMBONE;

  const handleTrombonePositions = (newKey: TrombonePositions) => {
    const tromboneKeys = brassDiagrams[BrassInstrument.TROMBONE].keys;
    const index = tromboneKeys.findIndex(({ name }) => name === newKey);

    const newTromboneKeys = tromboneKeys
      .slice(0, index + 1)
      .map(({ name }) => name);

    setActiveKeys([...newTromboneKeys]);
  };

  const handlePointerDown = (newKey: InstrumentKeyNames) => {
    if (activeKeys && !isTrombone) {
      if (activeKeys.includes(newKey)) {
        setToggleKeyOn(false);
        setActiveKeys((prev) => {
          if (prev)
            return [...prev.filter((activeKey) => activeKey !== newKey)];
        });
        return;
      }
      setToggleKeyOn(true);
      setActiveKeys((prev) => {
        if (prev) return [...prev, newKey];
      });
    }
    if (activeKeys && isTrombone) {
      setToggleKeyOn(true);
      handleTrombonePositions(newKey as TrombonePositions);
    }
  };

  const handlePointerEnter = (newKey: InstrumentKeyNames) => {
    if (activeKeys && !isTrombone) {
      if (toggleKeyOn && !activeKeys.includes(newKey))
        setActiveKeys((prev) => {
          if (prev) return [...prev, newKey];
        });
      if (!toggleKeyOn)
        setActiveKeys((prev) => {
          if (prev)
            return [...prev.filter((activeKey) => activeKey !== newKey)];
        });
    }
    if (activeKeys && isTrombone)
      handleTrombonePositions(newKey as TrombonePositions);
  };

  const handleKeyDown = (newKey: InstrumentKeyNames) => {
    if (activeKeys) {
      if (activeKeys.includes(newKey)) {
        setActiveKeys((prev) => {
          if (prev)
            return [...prev.filter((activeKey) => activeKey !== newKey)];
        });
        return;
      }
      setActiveKeys((prev) => {
        if (prev) return [...prev, newKey];
      });
    }
  };

  return (
    <Tooltip.Provider
      key={createUniqueKey(currentInstrument, name)}
      delayDuration={0}
    >
      <Tooltip.Root>
        <Tooltip.Trigger
          className={`border-4 border-slate-600 overflow-hidden drop-shadow-md ${className} ${
            activeKeys?.includes(name) ? "bg-slate-400" : "bg-white"
          }`}
          onPointerDown={() => {
            handlePointerDown(name);
          }}
          onPointerEnter={({ buttons }) => {
            if (buttons) {
              handlePointerEnter(name);
            }
          }}
          onPointerUp={() => {}}
          onKeyDown={({ code }) => {
            if (code === "Enter") {
              handleKeyDown(name);
            }
          }}
        />
        <Tooltip.Content className="bg-stone-800 opacity-95 drop-shadow-md text-white text-sm px-4 py-1 flex items-center justify-center rounded-full">
          <Tooltip.Arrow />
          {name}{" "}
          {isTrombone
            ? "Position"
            : isBrass(currentInstrument)
            ? "Valve"
            : isWoodwind(currentInstrument)
            ? "Key"
            : ""}
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
