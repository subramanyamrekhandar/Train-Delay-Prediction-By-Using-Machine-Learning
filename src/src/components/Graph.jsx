// src/Graph.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Graph = ({ delayData }) => {
  const labels = delayData.map((data) => data.fromStation);
  const delayTimes = delayData.map((data) => data.delayTime);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Delay Time (hrs)",
        data: delayTimes,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Train Delay Analysis"
      }
    }
  };

  return <Bar data={chartData} options={options} />;
};

export default Graph;
