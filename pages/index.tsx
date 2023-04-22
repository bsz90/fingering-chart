import { useEffect, useReducer, useState } from "react";
import { defaultSettings, instrumentProperties } from "./constants";
import { NavBar } from "./NavBar";
import {
  InstrumentPropAction,
  DisplaySetting,
  DisplaySettings,
  Instrument,
  InstrumentProp,
  InstrumentProps,
  WoodwindInstrument,
  DisplaySettingAction,
} from "./types";
import { determineFingeringChart } from "./utils";

const instrumentPropReducer = (
  state: InstrumentProps,
  action: InstrumentPropAction
): InstrumentProps => {
  switch (action.type) {
    case InstrumentProp.NEW_INSTRUMENT: {
      return { ...action.payload };
    }
    case InstrumentProp.FOURTH_VALVE: {
      const newState = { ...action.payload };
      newState[InstrumentProp.FOURTH_VALVE] =
        !action.payload[InstrumentProp.FOURTH_VALVE];
      return newState;
    }
    case InstrumentProp.TRIGGER: {
      const newState = { ...action.payload };
      newState[InstrumentProp.TRIGGER] =
        !action.payload[InstrumentProp.TRIGGER];
      return newState;
    }
    case InstrumentProp.TRILL_KEYS: {
      const newState = { ...action.payload };
      newState[InstrumentProp.TRILL_KEYS] =
        !action.payload[InstrumentProp.TRILL_KEYS];
      return newState;
    }
    default:
      throw new Error();
  }
};

const displaySettingsReducer = (
  state: DisplaySettings,
  action: DisplaySettingAction
): DisplaySettings => {
  switch (action.type) {
    case DisplaySetting.ENHARMONICS: {
      return {
        ...state,
        [DisplaySetting.ENHARMONICS]: !state[DisplaySetting.ENHARMONICS],
      };
    }
    default:
      throw new Error();
  }
};

export default function Home() {
  const [currentInstrument, setCurrentInstrument] = useState<Instrument>(
    WoodwindInstrument.SAXOPHONE
  );

  const [currentInstrumentProps, currentInstrumentPropDispatch] = useReducer(
    instrumentPropReducer,
    instrumentProperties[currentInstrument]
  );

  const [displaySettings, displaySettingsDispatch] = useReducer(
    displaySettingsReducer,
    defaultSettings
  );

  useEffect(
    () =>
      currentInstrumentPropDispatch({
        type: InstrumentProp.NEW_INSTRUMENT,
        payload: instrumentProperties[currentInstrument],
      }),
    [currentInstrument]
  );

  return (
    <div className="w-full h-screen flex flex-col bg-slate-200 items-center justify-start touch-none">
      {determineFingeringChart(
        currentInstrument,
        setCurrentInstrument,
        currentInstrumentProps,
        currentInstrumentPropDispatch,
        displaySettings,
        displaySettingsDispatch
      )}
      <NavBar
        currentInstrument={currentInstrument}
        setCurrentInstrument={setCurrentInstrument}
      />
    </div>
  );
}
