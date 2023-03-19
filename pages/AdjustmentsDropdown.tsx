import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { Dispatch, SetStateAction, useState } from "react";
import AdjustmentsIcon from "./icons/adjustments.svg";
import { Instrument } from "./types";

export const AdjustmentsDropdown = () => {
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

          {testPassedArray.map(([name, state, stateSetter]) => {
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
                    testState ? "bg-green-400" : "bg-slate-300"
                  } transition-all flex justify-start items-center ease-in-out`}
                  checked={state}
                  onSelect={(event) => {
                    stateSetter((prev) => !prev);
                    event.preventDefault();
                  }}
                >
                  <div
                    className={`w-4 h-full rounded-full bg-black transition ${
                      testState ? "translate-x-6" : ""
                    }`}
                  ></div>
                </Dropdown.CheckboxItem>
              </div>
            );
          })}
          {/* <div className="w-full h-12 p-2 flex items-center justify-between">
            <Dropdown.Label className="flex items-start w-[80%] p-2">
              Trigger
            </Dropdown.Label>
            <Dropdown.CheckboxItem
              className={`w-12 h-6 box-border rounded-xl p-1 ${
                testState ? "bg-green-400" : "bg-slate-300"
              } transition-all flex justify-start items-center ease-in-out`}
              checked={testState}
              onSelect={(event) => {
                testStateSetter((prev) => !prev);
                event.preventDefault();
              }}
            >
              <div
                className={`w-4 h-full rounded-full bg-black transition ${
                  testState ? "translate-x-6" : ""
                }`}
              ></div>
            </Dropdown.CheckboxItem>
          </div> */}
          <Dropdown.Separator className="w-full h-[1px] rounded-sm bg-slate-200" />
          <Dropdown.Arrow />
        </Dropdown.Content>
      </Dropdown.Portal>
    </Dropdown.Root>
  );
};
