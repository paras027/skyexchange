import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import "./graph.css";

// Register components required for your chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  // Graph data
  const data = {
    labels: ['5','10','15','20',  
    '25','30','35','40','45', 
    '50','55','60','65','70',
    ], // Labels from 1 to 45
    datasets: [
      {
        label: "Run Rate",
        data: [0, 7].concat(Array(37).fill(5)), // Mock run rate data
        
        backgroundColor: "rgba(255, 99, 132, 0.1)",
        borderColor: "green",
      
      },
    ],
  };

  // Graph options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
        ticks: {
          color: "#C1C1C1",
        },
      },
      
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="runrate-container">
      {/* Button Section */}
      <div className="button-section">
        <button className="active">Australia Women INNS</button>
        <button>New Zealand Women INNS</button>
      </div>

      {/* Chart Section */}
      <div className="chart-section">
        {/* Graph Area */}
        <div className="graph-area">
          <Line data={data} options={options} />
        </div>

        {/* Data Box */}
        {/* <div className="data-box">
          <div className="data-display">
            <span>33.33</span>
          </div>
        </div> */}
      </div>
      <div className="side_buttons">
        <div>1</div>
        <div>2</div>
      </div>
    </div>
  );
};

export default Graph;
