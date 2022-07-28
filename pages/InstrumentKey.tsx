import { Dispatch, SetStateAction } from "react";
import { Instrument, InstrumentKeys } from "./types";
import * as Tooltip from "@radix-ui/react-tooltip";

export const InstrumentKey = ({
  name,
  className,
  toggleKeyOn,
  setToggleKeyOn,
  activeKeys,
  setActiveKeys,
}: {
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
      }
      setToggleKeyOn(true);
      setActiveKeys((prev) => {
        return [...activeKeys, newKey];
      });
    }
    setToggleKeyOn(true);
    setActiveKeys([newKey]);
  };

  const handlePointerEnter = (newKey: InstrumentKeys) => {
    toggleKeyOn
      ? setActiveKeys((prev) => {
          if (prev) return [...prev, newKey];
        })
      : setActiveKeys((prev) => {
          if (prev)
            return [...prev.filter((activeKey) => activeKey !== newKey)];
        });
  };

  return (
    <Tooltip.Provider key={name} delayDuration={0}>
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
        />
        <Tooltip.Content className="bg-stone-800 opacity-95 drop-shadow-md text-white text-sm px-4 py-1 flex items-center justify-center rounded-full">
          <Tooltip.Arrow />
          {name} Key
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
