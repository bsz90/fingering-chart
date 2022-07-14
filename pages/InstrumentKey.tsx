import { CSSProperties, Dispatch, SetStateAction } from "react";
import { DragState, SaxophoneKeys, Woodwind } from "./types";

export const InstrumentKey = ({
  name,
  style,
  activeKeys,
  dragState,
  setDragState,
  currentInstrument,
  setCurrentInstrument,
}: {
  name: SaxophoneKeys;
  style: CSSProperties;
  activeKeys: SaxophoneKeys[];
  dragState: DragState;
  setDragState: Dispatch<SetStateAction<DragState>>;
  currentInstrument: Woodwind;
  setCurrentInstrument: Dispatch<SetStateAction<Woodwind | undefined>>;
}) => {
  const handleMouseDown = (newKey: SaxophoneKeys) => {
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

  const handleMouseEnter = (newKey: SaxophoneKeys) => {
    setCurrentInstrument((prev) => {
      if (prev) {
        if (dragState.dragging) {
          if (dragState.startingButtonActive) {
            if (prev.activeKeys.includes(newKey)) {
              return {
                ...prev,
                activeKeys: prev.activeKeys.filter(
                  (activeKey) => activeKey !== name
                ),
              };
            }
            return { ...prev };
          }
          if (!prev.activeKeys.includes(newKey))
            return { ...prev, activeKeys: [...prev.activeKeys, newKey] };

          return { ...prev };
        }
      }
    });
  };

  const buttonState = activeKeys.includes(name);

  return (
    <button
      className="overflow-hidden"
      key={name}
      style={style}
      onMouseDown={() => {
        handleMouseDown(name);
        setDragState({
          dragging: true,
          startingButtonActive: buttonState,
        });
      }}
      onMouseEnter={(event) => {
        if (dragState.dragging) {
          handleMouseEnter(name);
        }
      }}
      onPointerUp={() => {
        setDragState({ dragging: false, startingButtonActive: false });
      }}
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
