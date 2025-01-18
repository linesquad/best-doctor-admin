import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartDisplay(props) {
  // Example data for the line chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Activity",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  // Example options for customizing the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to grow in height
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
        },
      },
      y: {
        ticks: {
          color: "black",
        },
      },
    },
  };

  return (
    <div className="w-full max-w-[90%] md:max-w-[75%] lg:max-w-full mx-auto h-[300px] md:h-[400px] lg:h-[500px] my-40">
      <Line options={options} data={data} {...props} />
    </div>
  );
}

export default ChartDisplay;
