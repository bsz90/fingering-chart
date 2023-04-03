import { useReducer, useState } from "react";
import { StaveTempo } from "vexflow";
import { BrassFingeringChart } from "./BrassFingeringChart";
import { NavBar } from "./NavBar";
import { SingleReedFingeringChart } from "./SingleReedFingeringChart";
import {
  Action,
  BrassInstrument,
  DisplayState,
  Instrument,
  Toggle,
  WoodwindInstrument,
} from "./types";
import { isBrass, isWoodwind } from "./utils";

function displayReducer(state: DisplayState, action: Action) {
  switch (action.type) {
    case Toggle.FOURTH_VALVE:
      return { ...state, fourthValve: !state.fourthValve };
    case Toggle.TRIGGER:
      return { ...state, trigger: !state.trigger };
    case Toggle.TRILL_KEYS:
      return { ...state, trillKeys: !state.trillKeys };
    default:
      throw new Error();
  }
}

export default function Home() {
  const [currentInstrument, setCurrentInstrument] = useState<Instrument>(
    WoodwindInstrument.SAXOPHONE
  );

  const initialDisplayState: DisplayState = {
    fourthValve: false,
    trigger: false,
    trillKeys: false,
  };

  const [display, displayDispatch] = useReducer(
    displayReducer,
    initialDisplayState
  );

  const determineFingeringChart = (currentInstrument: Instrument) => {
    if (isWoodwind(currentInstrument)) {
      return (
        <SingleReedFingeringChart
          currentInstrument={currentInstrument as WoodwindInstrument}
          setCurrentInstrument={setCurrentInstrument}
          display={display}
          displayDispatch={displayDispatch}
        />
      );
    }
    if (isBrass(currentInstrument)) {
      return (
        <BrassFingeringChart
          currentInstrument={currentInstrument as BrassInstrument}
          setCurrentInstrument={setCurrentInstrument}
          display={display}
          displayDispatch={displayDispatch}
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
