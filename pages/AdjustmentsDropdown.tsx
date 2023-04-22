import * as Dropdown from "@radix-ui/react-dropdown-menu";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import AdjustmentsIcon from "./icons/adjustments.svg";
import {
  DisplaySetting,
  DisplaySettingAction,
  DisplaySettings,
  InstrumentProp,
  InstrumentPropAction,
  InstrumentProps,
} from "./types";

export const AdjustmentsDropdown = ({
  currentInstrumentProps,
  currentInstrumentPropsDispatch,
  displaySettings,
  displaySettingsDispatch,
}: {
  currentInstrumentProps: InstrumentProps;
  currentInstrumentPropsDispatch: Dispatch<InstrumentPropAction>;
  displaySettings: DisplaySettings;
  displaySettingsDispatch: Dispatch<DisplaySettingAction>;
}) => {
  const currentInstrumentPropsArray = useMemo(() => {
    return Object.entries(currentInstrumentProps);
  }, [currentInstrumentProps]);

  const currentDisplaySettingsArray = useMemo(
    () => Object.entries(displaySettings),
    [displaySettings]
  );

  return (
    <Dropdown.Root>
      <Dropdown.Trigger className="h-12 w-12 flex items-center justify-center">
        <AdjustmentsIcon className="h-6 w-6" />
      </Dropdown.Trigger>

      <Dropdown.Portal>
        <Dropdown.Content className="h-full w-64 bg-white rounded-md drop-shadow-[0_25px_25px_rgba(0,0,0,0.35)] border border-slate-200 flex-row items-end justify-center">
          <Dropdown.Label className="h-12 bg-slate-600 text-white flex text-lg rounded-t-md items-center justify-center">
            Settings
            {JSON.stringify(displaySettings[DisplaySetting.ENHARMONICS])}
          </Dropdown.Label>
          {currentDisplaySettingsArray.map(([name, state], id) => {
            const isChecked = displaySettings[name as DisplaySetting];
            return (
              <div
                key={name}
                className="w-full h-12 p-2 flex items-center justify-between"
              >
                <Dropdown.Label className="flex items-start w-[80%] p-2 capitalize">
                  {name}
                </Dropdown.Label>
                <Dropdown.CheckboxItem
                  className={`w-12 h-6 box-border rounded-xl p-1 ${
                    isChecked ? "bg-green-400" : "bg-slate-400"
                  } transition-all flex justify-start items-center ease-in-out`}
                  checked={isChecked}
                  onSelect={(event) => {
                    displaySettingsDispatch({
                      type: name as DisplaySetting,
                    });
                    event.preventDefault();
                  }}
                >
                  <div
                    className={`w-4 h-full rounded-full bg-white transition ${
                      isChecked ? "translate-x-6" : ""
                    }`}
                  ></div>
                </Dropdown.CheckboxItem>
              </div>
            );
          })}
          {currentInstrumentPropsArray.map(([name, state], id) => {
            const isChecked = Object.values(currentInstrumentProps)[id];

            return (
              <div
                key={name}
                className="w-full h-12 p-2 flex items-center justify-between"
              >
                <Dropdown.Label className="flex items-start w-[80%] p-2 capitalize">
                  {name}
                </Dropdown.Label>
                <Dropdown.CheckboxItem
                  className={`w-12 h-6 box-border rounded-xl p-1 ${
                    isChecked ? "bg-green-400" : "bg-slate-400"
                  } transition-all flex justify-start items-center ease-in-out`}
                  checked={isChecked}
                  onSelect={(event) => {
                    currentInstrumentPropsDispatch({
                      type: name as InstrumentProp,
                      payload: currentInstrumentProps,
                    });
                    event.preventDefault();
                  }}
                >
                  <div
                    className={`w-4 h-full rounded-full bg-white transition ${
                      isChecked ? "translate-x-6" : ""
                    }`}
                  ></div>
                </Dropdown.CheckboxItem>
              </div>
            );
          })}
          <Dropdown.Separator className="w-full h-[1px] rounded-sm bg-slate-200" />
          <Dropdown.Arrow />
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
};
