import * as NavMenu from "@radix-ui/react-navigation-menu";
import Home from "./icons/home.svg";
import { Dispatch, SetStateAction, useState } from "react";
import { Instrument } from "./types";
import { instrumentIcons } from "./constants";

const array = Object.entries(instrumentIcons);

export const NavBar = ({
  currentInstrument,
  setCurrentInstrument,
}: {
  currentInstrument: Instrument;
  setCurrentInstrument: Dispatch<SetStateAction<Instrument>>;
}) => {
  const [valueState, setValueState] = useState<string>();

  return (
    <NavMenu.Root
      className="box-content w-16 h-full absolute drop-shadow left-0 bg-slate-700 text-white"
      orientation="vertical"
      value={valueState}
      onValueChange={(value) => {
        if (value !== valueState) setValueState(value);
      }}
    >
      <NavMenu.List className="flex flex-col items-start justify-start">
        <NavMenu.Item>
          <NavMenu.Trigger className="[data-state]:open:bg-black mb4 flex items-center justify-center w-16 h-16">
            <div className="h-6 w-6 bg-gray flex items-center justify-center">
              <Home className="h-full w-full" />
            </div>
          </NavMenu.Trigger>
        </NavMenu.Item>
        {array.map(([key, value], id) => {
          const active = key === currentInstrument;
          return (
            <NavMenu.Item
              key={key}
              value={key}
              className="flex items-center justify-start"
            >
              <NavMenu.Trigger
                className={`box-content flex items-start w-16 h-16 text-5xl text-white`}
                onClick={() => setCurrentInstrument(key as Instrument)}
              >
                <div
                  className={`h-full w-full ease-out duration-150 flex items-center justify-center text-white ${
                    key === valueState || active
                      ? "opacity-100 scale-100 "
                      : "opacity-[25%] scale-[50%]"
                  }`}
                >
                  {value}
                </div>
              </NavMenu.Trigger>
              <NavMenu.Content
                className={`overflow-hidden text-xl w-36 font-serif text-black capitalize h-16  px-4 flex whitespace-nowrap items-center bg-gradient-to-r from-white via-white to-transparent`}
              >
                <div className="drop-shadow-md">{key}</div>
              </NavMenu.Content>
            </NavMenu.Item>
          );
        })}
        <NavMenu.Indicator />
      </NavMenu.List>
    </NavMenu.Root>
  );
};
