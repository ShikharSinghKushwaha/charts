import React from "react";

import { Bar } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import "./Chart.css";
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

function BarGraph() {
  Chart.register(CategoryScale)
  Chart.register(LinearScale)
  Chart.register(BarElement)

  

  return (
    <div>
      <h2 className="chart-name">Bar Chart</h2>
      <div className="doughnut-container">
        {
          <Bar
            data={{
              labels: ["Red", "Blue", "Yellow"],
              datasets: [
                {
                  label: "My First Dataset",
                  data: [300, 50, 100],
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                  ],
                  barPercentage: 0.5,
                  maxBarThickness: 50,
                },
              ],
            }}
          />
        }
      </div>

      
    </div>
  );
}

export default BarGraph;
