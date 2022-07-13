import { CSSProperties } from "react";
import { SaxophoneKeys } from "./types";

export const InstrumentKey = ({
  toggleKey,
  name,
  style,
  activeKeys,
}: {
  toggleKey: (newKey: SaxophoneKeys) => void;
  name: SaxophoneKeys;
  style: CSSProperties;
  activeKeys: SaxophoneKeys[];
}) => {
  return (
    <button
      className="overflow-hidden"
      key={name}
      style={style}
      onClick={() => toggleKey(name)}
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
