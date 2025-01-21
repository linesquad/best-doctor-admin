import MetricCards from "./MetricCards";
import { useGetServices } from "../../../hooks/useGetServices";
import MetricCardsSkeleton from "./MetricCardsSkeleton";
function MetricCardsDisplay() {
  const { data, isLoading, isError, error } = useGetServices();
  if (isLoading) return <MetricCardsSkeleton />;
  if (isError) return <ErrorDisplay errorMsg={error.message} />;
  console.log(data);
  return (
    <div className="grid grid-cols-1 place-items-center sm:place-items-stretch sm:grid-cols-2 md:grid-cols-3 gap-4">
      {data.services.map((item, index) => (
        <MetricCards
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
