import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false
});

export default function PieChart({ title }) {
  const data = {
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"]
  };
  return (
    <div className="pie">
      <h6>{title}</h6>
      <Chart
        options={data.options}
        series={data.series}
        type="pie"
        width="380"
      />
    </div>
  );
}
