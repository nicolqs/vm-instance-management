"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartThree from "../Charts/ChartThree";
import InstancePicker from "../InstancePicker";
import InstanceViewer from "../InstanceViewer";

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="mt-4 grid grid-cols-1 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <InstancePicker />
        <InstanceViewer />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartThree />
      </div>
    </>
  );
};

export default ECommerce;
