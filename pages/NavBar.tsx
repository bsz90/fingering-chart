import * as NavMenu from "@radix-ui/react-navigation-menu";
import Bassoon from "./icons/bassoon.svg";
import Clarinet from "./icons/clarinet.svg";
import Flute from "./icons/flute.svg";
import FrenchHorn from "./icons/frenchhorn.svg";
import Oboe from "./icons/oboe.svg";
import Saxophone from "./icons/saxophone.svg";
import Trombone from "./icons/trombone.svg";
import Trumpet from "./icons/trumpet.svg";
import Tuba from "./icons/tuba.svg";
import Home from "./icons/home.svg";
import { useState } from "react";
import { InstrumentName } from "./types";

const icons = {
  [InstrumentName.FLUTE]: <Flute />,
  [InstrumentName.OBOE]: <Oboe />,
  [InstrumentName.CLARINET]: <Clarinet />,
  [InstrumentName.SAXOPHONE]: <Saxophone />,
  [InstrumentName.BASSOON]: <Bassoon />,
  [InstrumentName.TRUMPET]: <Trumpet />,
  [InstrumentName.FRENCH_HORN]: <FrenchHorn />,
  [InstrumentName.TROMBONE]: <Trombone />,
  [InstrumentName.TUBA]: <Tuba />,
};

const array = Object.entries(icons);

export const NavBar = ({
  currentInstrument,
}: {
  currentInstrument: InstrumentName | undefined;
}) => {
  const [valueState, setValueState] = useState<string>(InstrumentName.FLUTE);

  console.log(valueState);

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
