import { CSSProperties, Dispatch, SetStateAction } from "react";
import { SaxophoneKeys, Woodwind } from "./types";

export const InstrumentKey = ({
  name,
  style,
  activeKeys,
  toggleOn,
  setToggleOn,
  currentInstrument,
  setCurrentInstrument,
}: {
  name: SaxophoneKeys;
  style: CSSProperties;
  activeKeys: SaxophoneKeys[];
  toggleOn: boolean;
  setToggleOn: Dispatch<SetStateAction<boolean>>;
  currentInstrument: Woodwind;
  setCurrentInstrument: Dispatch<SetStateAction<Woodwind | undefined>>;
}) => {
  const handlePointerDown = (newKey: SaxophoneKeys) => {
    if (currentInstrument.activeKeys.includes(newKey)) {
      setToggleOn(false);
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
    setToggleOn(true);
    setCurrentInstrument((prev) => {
      if (prev) return { ...prev, activeKeys: [...prev.activeKeys, newKey] };
    });
  };

  const handlePointerEnter = (newKey: SaxophoneKeys) => {
    toggleOn
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

  const buttonState = activeKeys.includes(name);

  return (
    <button
      className="overflow-hidden"
      key={name}
      style={style}
      onPointerDown={() => {
        handlePointerDown(name);
      }}
      onPointerEnter={({ buttons }) => {
        if (buttons) {
          handlePointerEnter(name);
        }
      }}
      onPointerUp={() => {}}
    >
      <div
        className="w-full h-full pointer-events-none touch-none"
        style={{
          backgroundColor: activeKeys?.includes(name) ? "gray" : "white",
        }}
      ></div>
    </button>
  );
};
