import * as Dropdown from "@radix-ui/react-dropdown-menu";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import AdjustmentsIcon from "./icons/adjustments.svg";
import { Action, DisplayState, DisplayType, Toggle } from "./types";

export const AdjustmentsDropdown = ({
  displayEnharmonics,
  setDisplayEnharmonics,
  display,
  displayDispatch,
}: {
  displayEnharmonics: boolean;
  setDisplayEnharmonics: Dispatch<SetStateAction<boolean>>;
  display: DisplayState;
  displayDispatch: Dispatch<Action>;
}) => {
  const displaySettings = useMemo(() => {
    return Object.entries(display) as [DisplayType, boolean][];
  }, [display]);

  const checked = useCallback(
    (id: number) => {
      return Object.values(display)[id];
    },
    [display]
  );

  const [testState, testStateSetter] = useState(false);

  const testPassedProp = "trigger";

  const testPassedArray: [
    name: string,
    state: boolean,
    stateSetter: Dispatch<SetStateAction<boolean>>
  ][] = [[testPassedProp, testState, testStateSetter]];

  return (
    <Dropdown.Root>
      <Dropdown.Trigger className="h-12 w-12 flex items-center justify-center">
        <AdjustmentsIcon className="h-6 w-6" />
      </Dropdown.Trigger>

      <Dropdown.Portal>
        <Dropdown.Content className="h-full w-64 bg-white rounded-md drop-shadow-[0_25px_25px_rgba(0,0,0,0.35)] border border-slate-200 flex-row items-end justify-center">
          <Dropdown.Label className="h-12 bg-slate-600 text-white flex text-lg rounded-t-md items-center justify-center">
            Settings
          </Dropdown.Label>
          <div className="w-full h-12 p-2 flex items-center justify-between">
            <Dropdown.Label className="flex items-start w-[80%] p-2 capitalize">
              Display Enharmonics
            </Dropdown.Label>
            <Dropdown.CheckboxItem
              className={`w-12 h-6 box-border rounded-xl p-1 ${
                displayEnharmonics ? "bg-green-400" : "bg-slate-400"
              } transition-all flex justify-start items-center ease-in-out`}
              checked={displayEnharmonics}
              onSelect={(event) => {
                setDisplayEnharmonics((prev) => !prev);
                event.preventDefault();
              }}
            >
              <div
                className={`w-4 h-full rounded-full bg-white transition ${
                  displayEnharmonics ? "translate-x-6" : ""
                }`}
              ></div>
            </Dropdown.CheckboxItem>
          </div>
          {displaySettings.map(([name, state], id) => {
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
                    checked(id) ? "bg-green-400" : "bg-slate-400"
                  } transition-all flex justify-start items-center ease-in-out`}
                  checked={checked(id)}
                  onSelect={(event) => {
                    displayDispatch({ type: name, payload: display });
                    event.preventDefault();
                  }}
                >
                  <div
                    className={`w-4 h-full rounded-full bg-white transition ${
                      checked(id) ? "translate-x-6" : ""
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
