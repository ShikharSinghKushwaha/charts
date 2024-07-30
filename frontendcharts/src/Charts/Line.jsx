import React, { useState } from "react";
import { Doughnut, Pie, Bar, Line, Bubble, Scatter } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import "../CSS/Bar.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

function LineChart() {
  Chart.register(ArcElement);
  Chart.register(CategoryScale);
  Chart.register(LinearScale);
  Chart.register(PointElement);
  Chart.register(LineElement);

  return (
    <div>
      <h2 className="chart-name">Line Chart</h2>

      <div className="doughnut-container">
        {
          <Line
            data={{
              labels: ["Red", "Blue", "Yellow"],
              datasets: [
                {
                  label: "My First Dataset",
                  data: [120, 50, 100],
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                  ],
                },
              ],
            }}
          />
        }
      </div>
    </div>
  );
}

export default LineChart;
