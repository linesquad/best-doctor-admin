import MetricCards from "./MetricCards";

function MetricCardsDisplay() {
  return (
    <div className="grid grid-cols-1 place-items-center sm:place-items-stretch sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <MetricCards
          key={index}
          index={index}
          icon={"./images/Medical.svg"}
          subTitle={"Blog Metrics"}
          title={"Blog is metricking"}
        />
      ))}
    </div>
  );
}

export default MetricCardsDisplay;
