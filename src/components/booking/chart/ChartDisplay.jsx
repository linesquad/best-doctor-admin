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
import ChartSkeleton from "./ChartSkeleton";
import { useGetBooking } from "../../../hooks/useGetBooking";
import ErrorDisplay from "../../ErrorDisplay";
function ChartDisplay(props) {
  const { data: bookingData, isLoading, isError, error } = useGetBooking();
  if (isLoading) return <ChartSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;

  const activityData = Array.from(
    { length: bookingData.length },
    (_, i) => i + 1
  );
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Activity",
        data: activityData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
