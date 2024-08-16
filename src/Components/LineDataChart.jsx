import React from "react";
import Chart from "react-apexcharts";
import data from "../db.json";
const LineDataChart = () => {
  const bcaStudents = data.filter((student) => student.branch === "BCA");
  const mcaStudents = data.filter((student) => student.branch === "MCA");

  const years = [
    ...new Set(
      [...bcaStudents, ...mcaStudents].map((student) => student.batch)
    ),
  ].sort();
  const bcaCounts = years.map(
    (year) => bcaStudents.filter((student) => student.batch === year).length
  );
  const mcaCounts = years.map(
    (year) => mcaStudents.filter((student) => student.batch === year).length
  );

  const series = [
    {
      name: "BCA Students",
      data: bcaCounts,
    },
    {
      name: "MCA Students",
      data: mcaCounts,
    },
  ];

  const options = {
    chart: {
      type: "line",
      height: 350,
    },
    title: {
      text: "Number of BCA and MCA Students per Year",
    },
    xaxis: {
      categories: years,
      title: {
        text: "Year",
      },
    },
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    yaxis: {
      title: {
        text: "Number of Students",
      },
    },
  };

  return (
    <div>
      <h1> Line Chart</h1>
      <Chart options={options} series={series} type="line" height={530} />
    </div>
  );
};

export default LineDataChart;
