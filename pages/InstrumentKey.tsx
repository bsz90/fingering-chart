import { Dispatch, SetStateAction } from "react";
import { Instrument, InstrumentKeys } from "./types";
import * as Tooltip from "@radix-ui/react-tooltip";
import { createUniqueKey } from "./utils";

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
  name: InstrumentKeys;
  className: string;
  toggleKeyOn: boolean;
  setToggleKeyOn: Dispatch<SetStateAction<boolean>>;
  activeKeys: InstrumentKeys[] | undefined;
  setActiveKeys: Dispatch<SetStateAction<InstrumentKeys[] | undefined>>;
}) => {
  const handlePointerDown = (newKey: InstrumentKeys) => {
    if (activeKeys) {
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
  };

  const handlePointerEnter = (newKey: InstrumentKeys) => {
    toggleKeyOn
      ? activeKeys && !activeKeys.includes(newKey)
        ? setActiveKeys((prev) => {
            if (prev) return [...prev, newKey];
          })
        : null
      : setActiveKeys((prev) => {
          if (prev)
            return [...prev.filter((activeKey) => activeKey !== newKey)];
        });
  };

  const handleKeyDown = (newKey: InstrumentKeys) => {
    if (activeKeys) {
      if (activeKeys.includes(newKey)) {
        console.log("running1");
        setActiveKeys((prev) => {
          if (prev)
            return [...prev.filter((activeKey) => activeKey !== newKey)];
        });
        return;
      }
      setActiveKeys((prev) => {
        console.log("running2");
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
          {name} Key
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
