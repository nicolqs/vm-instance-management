import Checkbox from "../Checkboxes/Checkbox";
import SelectGroup from "../SelectGroup/index";
import SwitcherOne from "../Switchers/SwitcherOne";

function InstancePicker() {
  return (
    <div className="grid grid-cols-1">
      <div className="rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flow-cols flex-cols-2 flex gap-5 md:flex-row">
          <div className="mb-4 flex-1">
            <div className="mb-4">
              <label
                className="text-gray-700 mb-2 block text-sm font-bold"
                htmlFor="template"
              >
                Instance Template
              </label>
              <SelectGroup
                text="Select Instance"
                options={["Phylax Node v1", "Phylax Node v2", "Phylax Beta"]}
              />
            </div>
            <div className="mb-4">
              <label
                className="text-gray-700 mb-2 block text-sm font-bold"
                htmlFor="cpu"
              >
                CPU
              </label>
              <SelectGroup
                text="Select CPU"
                options={["1 vCPU", "2 vCPU", "4 vCPU", "8 vCPU", "16 vCPU"]}
              />
            </div>
            <div className="mb-4">
              <label
                className="text-gray-700 mb-2 block text-sm font-bold"
                htmlFor="ram"
              >
                RAM
              </label>
              <SelectGroup
                text="Select RAM"
                options={[
                  "16 GiB Memory",
                  "32 GiB Memory",
                  "64 GiB Memory",
                  "128 GiB Memory",
                  "256 GiB Memory",
                ]}
              />
            </div>
          </div>
          <div className="bg-gray-100 w-full flex-1 md:w-1/4">
            <div className="mb-4">
              <label
                className="text-gray-700 mb-2 block text-sm font-bold"
                htmlFor="ram"
              >
                RAM
              </label>
              <SelectGroup
                text="Select RAM"
                options={[
                  "16 GiB Memory",
                  "32 GiB Memory",
                  "64 GiB Memory",
                  "128 GiB Memory",
                  "256 GiB Memory",
                ]}
              />
            </div>
            <div className="mb-4">
              <label
                className="text-gray-700 mb-2 block text-sm font-bold"
                htmlFor="ram"
              >
                Advanced
              </label>
              <div className="flex-cols flex gap-3">
                <div>
                  <SwitcherOne />
                </div>
                <div className="pt-1">Auto detect-closest region</div>
              </div>
            </div>
            <div className="mb-4 mt-6">
              <label
                className="text-gray-700 mb-2 block text-sm font-bold"
                htmlFor="network"
              >
                Network settings
              </label>
              <div className="pt-2">
                <Checkbox text="Allow SSH traffic form" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
          >
            Deploy
          </button>
        </div>
      </div>
    </div>
  );
}

export default InstancePicker;
