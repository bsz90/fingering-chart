import { SetState } from "immer/dist/internal";
import { SetStateAction, useState } from "react";
import { BrassFingeringChart } from "./BrassFingeringChart";
import { NavBar } from "./NavBar";
import { SingleReedFingeringChart } from "./SingleReedFingeringChart";
import { Start } from "./Start";
import { BrassInstrument, Instrument, WoodwindInstrument } from "./types";

export default function Home() {
  const [currentFamily, setCurrentFamily] = useState("woodwind");
  const [currentInstrument, setCurrentInstrument] = useState<Instrument>(
    WoodwindInstrument.SAXOPHONE
  );

  const determineFingeringChart = (currentInstrument: Instrument) => {
    if (
      currentInstrument === WoodwindInstrument.BASSOON ||
      WoodwindInstrument.OBOE ||
      WoodwindInstrument.FLUTE ||
      WoodwindInstrument.CLARINET ||
      WoodwindInstrument.SAXOPHONE
    ) {
      return (
        <SingleReedFingeringChart
          currentInstrument={currentInstrument as WoodwindInstrument}
          setCurrentInstrument={setCurrentInstrument}
        />
      );
    }
    if (
      currentInstrument === BrassInstrument.TRUMPET ||
      BrassInstrument.TROMBONE ||
      BrassInstrument.FRENCH_HORN ||
      BrassInstrument.TUBA
    ) {
      <BrassFingeringChart
        currentInstrument={currentInstrument as BrassInstrument}
        setCurrentInstrument={setCurrentInstrument}
      />;
    }
    throw new Error();
  };

  return (
    <div className="w-full h-screen flex flex-col bg-slate-200 items-center justify-start touch-none">
      {determineFingeringChart(currentInstrument)}
      <NavBar
        currentInstrument={currentInstrument}
        setCurrentInstrument={setCurrentInstrument}
      />
    </div>
  );
}
