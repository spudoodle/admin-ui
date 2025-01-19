"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart: React.FC = () => {
  const options: ChartOptions<"bar"> = {
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          usePointStyle: true,
          pointStyle: "rect",
          padding: 20,
          font: {
            size: 10,
          },
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      y: {
        stacked: true,
        grid: {
          color: "#E5E7EB",
        },
        ticks: {
          stepSize: 100,
          font: {
            size: 10,
          },
        },
        max: 1000,
      },
    },
  };

  const labels: string[] = [
    "10代未満",
    "10代",
    "20代",
    "30代",
    "40代",
    "50代",
    "60代",
    "70代",
    "80代",
    "90代以上",
  ];

  const data: ChartData<"bar"> = {
    labels,
    datasets: [
      {
        label: "男性",
        data: [100, 140, 180, 200, 210, 260, 180, 60, 70, 30],
        backgroundColor: "#FF9500",
        stack: "Stack 0",
      },
      {
        label: "女性",
        data: [50, 70, 180, 320, 220, 340, 160, 40, 30, 20],
        backgroundColor: "#FFB854",
        stack: "Stack 0",
      },
      {
        label: "その他",
        data: [30, 80, 160, 120, 200, 40, 80, 20, 15, 10],
        backgroundColor: "#FFCE8A",
        stack: "Stack 0",
      },
      {
        label: "回答なし",
        data: [50, 70, 140, 120, 230, 40, 70, 30, 20, 10],
        backgroundColor: "#FFDEB0",
        stack: "Stack 0",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default Chart;
