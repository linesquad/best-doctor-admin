import MetricCards from "./MetricCards";
import MetricCardsSkeleton from "./MetricCardsSkeleton";
import { useGetServices } from "../../../hooks/useGetServices";
import ErrorDisplay from "../../ErrorDisplay";
function MetricCardsDisplay() {
  const { data, isLoading, isError, error } = useGetServices();
  if (isLoading) return <MetricCardsSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;
  return (
    <div className="grid grid-cols-1 place-items-center sm:place-items-stretch sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.services.slice(0, 5).map((item, index) => (
        <MetricCards
          id={item.id}
          key={index}
          index={index}
          image={item.image}
          subTitle={item.content.slice(0, 15) + "..."}
          title={item.title.slice(0, 15) + "..."}
        />
      ))}
    </div>
  );
}

export default MetricCardsDisplay;
