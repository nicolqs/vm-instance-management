"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import ChartThree from "@/components/Charts/DonutChart";
import React from "react";
import Timeseries from "./Timeseries";

const Chart: React.FC = () => {
  return (
    <>
      <Breadcrumb pageName="Chart" />

      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        <Timeseries />
        <ChartThree />
      </div>
    </>
  );
};

export default Chart;
