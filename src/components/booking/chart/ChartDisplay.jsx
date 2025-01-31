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

import ChartSkeleton from "./ChartSkeleton";
import { useGetBooking } from "../../../hooks/useBooking/useGetBooking";
import ErrorDisplay from "../../ErrorDisplay/ErrorDisplay";

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
  const { data: bookingData, isLoading, isError, error } = useGetBooking();

  if (isLoading) return <ChartSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;

  // Extract months from booking data
  const monthCounts = Array(12).fill(0); // Initialize array for 12 months with 0
  bookingData.forEach((booking) => {
    const bookingMonth = new Date(booking.date).getMonth(); // Get the month (0 = Jan, 1 = Feb, ...)
    monthCounts[bookingMonth] += 1; // Increment the count for the respective month
  });

  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Activity",
        data: monthCounts, // Use the calculated month counts
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
