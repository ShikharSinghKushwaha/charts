import React, { useState } from "react";
import {Pie} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'
import '../CSS/Bar.css'
import './Chart.css'

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


function PieChart(){

  Chart.register(ArcElement)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessage(`Hello ${firstName} ${lastName}!`);
    setFirstName('');
    setLastName('');
  };

    return(
        <div>
            <h2 className="chart-name">Pie Chart</h2>
            <div className="doughnut-container">
              {
            <Pie 
            data = {{
              labels: [
                'Red',
                'Blue',
                'Yellow'
              ],
              datasets: [{
                label: 'My First Dataset',
                data: [90, 50, 100],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                ],
                
              }]
             }}
            />
}
            </div>

           
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={firstName}
        placeholder="First Name"
        onChange={(event) =>
          setFirstName(event.target.value)
        }
      />

      <br />
      <br />

      <input
        type="text"
        id="lastName"
        name="lastName"
        value={lastName}
        placeholder="Last Name"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />

      <br />
      <br />

      <button type="submit">Submit</button>

      <br />
      <br />

      <h2>{message}</h2>
    </form>
  
        </div>
    )
}

export default PieChart