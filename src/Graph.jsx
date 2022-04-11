import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title);

const generatePoints = (min, max, step) => {
  const array = [];
  for (let i = min; i <= max; i += step) {
    array.push(i);
  }
  return array;
};

const labels = generatePoints(-10, 10, 2);
const data = labels.map((x) => x * x);

const datasets = {
  labels: labels,
  datasets: [
    {
      data: data,
      borderColor: "rgb(75, 192, 192)",
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 0,
    },
    line: {
      cubicInterpolationMode: "monotone",
    },
  },
};

export default function Graph(props) {
  return <Line {...props} options={options} data={datasets} />;
}
