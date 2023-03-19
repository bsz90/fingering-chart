import { useState } from "react";
import { BrassFingeringChart } from "./BrassFingeringChart";
import { NavBar } from "./NavBar";
import { SingleReedFingeringChart } from "./SingleReedFingeringChart";
import { BrassInstrument, Instrument, WoodwindInstrument } from "./types";

export default function Home() {
  const [currentInstrument, setCurrentInstrument] = useState<Instrument>(
    WoodwindInstrument.SAXOPHONE
  );

  const determineFingeringChart = (currentInstrument: Instrument) => {
    const isWoodwind = (currentInstrument: Instrument) =>
      currentInstrument === WoodwindInstrument.SAXOPHONE ||
      currentInstrument === WoodwindInstrument.BASSOON ||
      currentInstrument === WoodwindInstrument.CLARINET ||
      currentInstrument === WoodwindInstrument.OBOE ||
      currentInstrument === WoodwindInstrument.FLUTE;

    const isBrass = (currentInstrument: Instrument) =>
      currentInstrument === BrassInstrument.TRUMPET ||
      currentInstrument === BrassInstrument.TROMBONE ||
      currentInstrument === BrassInstrument.FRENCH_HORN ||
      currentInstrument === BrassInstrument.TUBA;

    if (isWoodwind(currentInstrument)) {
      return (
        <SingleReedFingeringChart
          currentInstrument={currentInstrument as WoodwindInstrument}
          setCurrentInstrument={setCurrentInstrument}
        />
      );
    }
    if (isBrass(currentInstrument)) {
      return (
        <BrassFingeringChart
          currentInstrument={currentInstrument as BrassInstrument}
          setCurrentInstrument={setCurrentInstrument}
        />
      );
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
