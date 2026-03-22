import StatsImg from "./StatsImg";
import StatsDetails from "./StatsDetails";

function StatsCard() {
  return (
    <section className="w-full rounded-lg overflow-hidden flex flex-col">
      <StatsImg />
      <StatsDetails />
    </section>
  )
}

export default StatsCard;