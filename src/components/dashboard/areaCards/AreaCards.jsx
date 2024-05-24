import AreaCard from "./AreaCard";
import "./AreaCards.scss";

const AreaCards = () => {
  return (
    <section className="content-area-cards">
      <AreaCard
        colors={["#e4e8ef", "#7014ad"]}
        percentFillValue={80}
        cardInfo={{
          title: "Todays Sales",
          value: "₹20.4K",
          text: "We have sold 130 items.",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#4ce13f"]}
        percentFillValue={50}
        cardInfo={{
          title: "Todays Revenue",
          value: "₹8.2K",
          text: "Available to payout",
        }}
      />
      <AreaCard
        colors={["#e4e8ef", "#f29a2e"]}
        percentFillValue={40}
        cardInfo={{
          title: "In Bond",
          value: "₹18.2K",
          text: "Available to payout",
        }}
      />
    </section>
  );
};

export default AreaCards;
