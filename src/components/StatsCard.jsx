import StatsImg from "./StatsImg";
import StatsDetails from "./StatsDetails";

function StatsCard() {
  return (
    <section className="w-full rounded-lg overflow-hidden flex flex-col max-w-100 tablet:max-w-141 desktop:grid desktop:grid-cols-2 desktop:max-w-282">
      <StatsImg />
      <StatsDetails />
    </section>
  )
}

export default StatsCard;