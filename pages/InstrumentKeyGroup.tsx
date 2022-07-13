import { CSSProperties } from "react";
import { InstrumentKey } from "./InstrumentKey";
import { Position, SaxophoneKeys, Section } from "./types";

export const InstrumentKeyGroup = ({
  keyGroup,
  toggleKey,
  activeKeys,
}: {
  keyGroup: {
    group: string;
    section: Section;
    position: Position;
    keys: {
      name: SaxophoneKeys;
      style: CSSProperties;
    }[];
  };
  toggleKey: () => void;
  activeKeys: SaxophoneKeys[];
}) => {
  const determineJustify = (position: Position) => {
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
  };
  return (
    <div
      key={keyGroup.group}
      className="w-full h-[48%] flex justify-end"
      style={{
        justifyContent: determineJustify(keyGroup.position),
        alignItems:
          keyGroup.section === Section.TOP ? "flex-end" : "flex-start",
      }}
    >
      <div className="w-1/2 flex flex-col items-center">
        {keyGroup.keys.map((key) => {
          return (
            <InstrumentKey
              key={key.name}
              toggleKey={toggleKey}
              name={key.name}
              style={key.style}
              activeKeys={activeKeys}
            />
          );
        })}
      </div>
    </div>
  );
};
