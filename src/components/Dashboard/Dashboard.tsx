"use client";
import { instanceData } from "@/data/instances";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import CheckboxTwo from "../Checkboxes/CheckboxTwo";
import SelectGroupTwo from "../SelectGroup/SelectGroupTwo";
import SwitcherOne from "../Switchers/SwitcherOne";

const ECommerce: React.FC = () => {
  return (
    <>
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
                <SelectGroupTwo
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
                <SelectGroupTwo
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
                <SelectGroupTwo
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
                <SelectGroupTwo
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
                  <CheckboxTwo text="Allow SSH traffic form" />
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

      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="rounded-sm border border-stroke bg-white p-7 shadow-default dark:border-strokedark dark:bg-boxdark">
          <h5 className="mb-5 text-xl font-semibold text-black dark:text-white">
            Instances
          </h5>
          <div className="mb-4 grid w-full grid-cols-8 gap-1 border-2 border-slate-100 font-bold">
            <div className="border-r-2 border-slate-100">Name</div>
            <div className="border-r-2 border-slate-100">Instance Id</div>
            <div className="border-r-2 border-slate-100">State</div>
            <div className="border-r-2 border-slate-100">Type</div>
            <div className="border-r-2 border-slate-100">Alarm</div>
            <div className="border-r-2 border-slate-100">Zone</div>
            <div className="border-r-2 border-slate-100">Public Ip</div>
            <div className="">Monitoring</div>
          </div>
          <div className="flex flex-col gap-3">
            {instanceData.map((instance, i) => {
              const statusColor =
                instance.state === "Running" ? "bg-green-400" : "bg-rose-800";
              return (
                <div className="grid w-full grid-cols-8 border-b-2 border-b-slate-50 pb-1">
                  <div className="font-bold">{instance.name}</div>
                  <div className="">{instance.instanceId}</div>
                  <div className="flex flex-row gap-2">
                    <span className="relative top-[7px] flex h-3 w-3">
                      {instance.state === "Running" && (
                        <span
                          className={`${statusColor} absolute inline-flex h-full w-full animate-ping rounded-full opacity-75`}
                        ></span>
                      )}
                      <span
                        className={`${statusColor} relative inline-flex h-3 w-3 rounded-full`}
                      ></span>
                    </span>
                    {instance.state}
                  </div>
                  <div>{instance.type}</div>
                  <div>{instance.alarm}</div>
                  <div>{instance.zone}</div>
                  <div>{instance.publicIp}</div>
                  <div>{instance.monitoring}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartThree />
      </div>
    </>
  );
};

export default ECommerce;
