import mobileImg from "/images/image-header-mobile.jpg";

function StatsImg() {
  return (
    <div className="bg-purple-500">
      <img src={mobileImg} className="opacity-75 mix-blend-multiply w-full" />
    </div>
  );
}

export default StatsImg;