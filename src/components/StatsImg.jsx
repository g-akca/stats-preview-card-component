import mobileImg from "/images/image-header-mobile.jpg";

function StatsImg() {
  return (
    <div className="bg-purple-500 desktop:order-2">
      <img src={mobileImg} className="opacity-75 mix-blend-multiply w-full h-full desktop:object-cover" />
    </div>
  );
}

export default StatsImg;