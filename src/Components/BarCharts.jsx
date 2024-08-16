import React from "react";
import data from "../db.json";
import Chart from "react-apexcharts";
const BarCharts = () => {
  const genderCount = data.reduce((acc, student) => {
    acc[student.Gender] = (acc[student.Gender] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.keys(genderCount);
  const values = Object.values(genderCount);

  const chartOptions = {
    chart: {
      id: "gender-bar-chart",
      toolbar: {
        show: true,
      },
    },

    xaxis: {
      categories: categories,
    },
    title: {
      text: "Number of Students by Gender",
      align: "center",
    },
    plotOptions: {
      bar: {
        distributed: true,
        colors: {
          ranges: [
            { from: 0, to: 0, color: "#FF4560" },
            { from: 1, to: 1, color: "#008FFB" },
          ],
        },
      },
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      followCursor: true,
    },
  };

  const chartSeries = [
    {
      name: "Number of Students",
      data: values,
    },
  ];
  return (
    <div>
      <div>
        <h1> Bar Chart</h1>
      </div>
      <div className="d-flex justify-content-center">
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          width="950"
          height="550"
        />
      </div>
    </div>
  );
};

export default BarCharts;
