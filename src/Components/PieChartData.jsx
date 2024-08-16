import Chart from "react-apexcharts";

import data from "../db.json";

const PieChartData = () => {
  const genderCount = data.reduce((acc, student) => {
    acc[student.Gender] = (acc[student.Gender] || 0) + 1;
    return acc;
  }, {});

  const categories = Object.keys(genderCount);
  const values = Object.values(genderCount);
  console.log(values);
  return (
    <div>
      <div>
        <h1> Pie Chart</h1>
        <h5>Number of Students by Gender</h5>
      </div>
      <div className="d-flex justify-content-center">
        <Chart
          type="pie"
          width={500}
          height={500}
          series={[...values]}
          options={{
            labels: [...categories],
          }}
        ></Chart>
      </div>
    </div>
  );
};

export default PieChartData;
