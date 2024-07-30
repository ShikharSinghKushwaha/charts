import React, { useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Input from "../Components/Input";
import "./Chart.css";
import "./Forms.css";
import "../CSS/Bar.css";
import SpreadSheet from "./Spreadsheet";
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

function DoughnutChart() {
  Chart.register(ArcElement, Title, Legend);

  const [value, setValue] = useState([]);
  const [title, setTitle] = useState("");
  const [arrayVal, setArrayVal] = useState(value);
  const [labels, setLabels] = useState(["Blue", "Yellow", "Green"]);
  const [strToNum, setStrToNum] = useState([]);

  const [data, setData] = useState({});

  const chartRef  = useRef(null)

  function onFormSubmit(e) {
    e.preventDefault();

    const val = value.split(",");

    const toNumber = val.map((e) => Number(e));
    setStrToNum(toNumber);
    //  setValue('')
    console.log(toNumber);
    //setData();
  }


  function downloadImage(){
    if(chartRef.current){
    const link = document.createElement('a');
    link.href = chartRef.current.toBase64Image();
    link.download = `${title || "doughnut-chart"}.png`;
    link.click();
    }
  }

  return (
    <div>
      <h2 className="chart-name">Doughnut Chart</h2>
      <div className="main-chart-container">
        <div className="doughnut-container">
          {
            <Doughnut
            ref={chartRef}
              data={{
                labels: labels,
                datasets: [
                  {
                    label: title || "My First Dataset",
                    data: strToNum || [20, 40, 50],
                    options: {},
                    backgroundColor: [
                      "rgb(255, 99, 132)",
                      "rgb(54, 162, 235)",
                      "rgb(255, 205, 86)",
                    ],
                  },
                ],
              }}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: title || "Doughnut Chart",
                    font: {
                      size: 28,
                    },
                  },
                },
              }}
            />
          }

         
            <button onClick={downloadImage}>Donwloa</button>
        
        </div>
        <div className="input">
          <form onSubmit={onFormSubmit} className="form-container">
            <input
              type="text"
              name="value"
              value={value}
              placeholder="Your pie values"
              onChange={(e) => setValue(e.target.value)}
              className="input-field"
            />

            <input
              type="text"
              name="title"
              // value={title}
              placeholder="Your Title"
              onChange={(e) => setTitle(e.target.value)}
              className="input-field"
            />

            <input
              type="text"
              name="value"
              placeholder="Your pie values"
              //   onChange={(e) => setValue(e.target.value)}
              className="input-field"
            />

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <SpreadSheet />
    </div>
  );
}

export default DoughnutChart;
