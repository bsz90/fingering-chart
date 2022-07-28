import { Dispatch, SetStateAction } from "react";
import { Woodwind, InstrumentKeys } from "./types";
import * as Tooltip from "@radix-ui/react-tooltip";

export const InstrumentKey = ({
  name,
  className,
  toggleKeyOn,
  setToggleKeyOn,
  currentInstrument,
  setCurrentInstrument,
}: {
  name: InstrumentKeys;
  className: string;
  toggleKeyOn: boolean;
  setToggleKeyOn: Dispatch<SetStateAction<boolean>>;
  currentInstrument: Woodwind;
  setCurrentInstrument: Dispatch<SetStateAction<Woodwind | undefined>>;
}) => {
  const handlePointerDown = (newKey: InstrumentKeys) => {
    if (currentInstrument.activeKeys.includes(newKey)) {
      setToggleKeyOn(false);
      setCurrentInstrument((prev) => {
        if (prev)
          return {
            ...prev,
            activeKeys: prev.activeKeys.filter(
              (activeKey) => activeKey !== newKey
            ),
          };
      });
      return;
    }
    setToggleKeyOn(true);
    setCurrentInstrument((prev) => {
      if (prev) return { ...prev, activeKeys: [...prev.activeKeys, newKey] };
    });
  };

  const handlePointerEnter = (newKey: InstrumentKeys) => {
    toggleKeyOn
      ? setCurrentInstrument((prev) => {
          if (prev)
            return { ...prev, activeKeys: [...prev.activeKeys, newKey] };
        })
      : setCurrentInstrument((prev) => {
          if (prev)
            return {
              ...prev,
              activeKeys: prev.activeKeys.filter(
                (activeKey) => activeKey !== newKey
              ),
            };
        });
  };

  return (
    <Tooltip.Provider key={name} delayDuration={0}>
      <Tooltip.Root>
        <Tooltip.Trigger
          className={`border-4 border-slate-600 overflow-hidden drop-shadow-md ${className} ${
            currentInstrument.activeKeys?.includes(name)
              ? "bg-slate-400"
              : "bg-white"
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
        />
        <Tooltip.Content className="bg-stone-800 opacity-95 drop-shadow-md text-white text-sm px-4 py-1 flex items-center justify-center rounded-full">
          <Tooltip.Arrow />
          {name} Key
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
