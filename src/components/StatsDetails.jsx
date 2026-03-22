function StatsDetails() {
  return (
    <section className="bg-blue-950 p-8 flex flex-col items-center text-center gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="text-[28px] font-bold text-white leading-[125%]">Get <span className="text-purple-500">insights</span> that help your business grow.</h2>
        <p className="text-white opacity-75">Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="text-white text-center">
          <p className="font-bold text-[24px] leading-[120%]">10k+</p>
          <p className="font-lexend text-[12px] leading-[200%] tracking-base uppercase opacity-60">Companies</p>
        </div>

        <div className="text-white text-center">
          <p className="font-bold text-[24px] leading-[120%]">314</p>
          <p className="font-lexend text-[12px] leading-[200%] tracking-base uppercase opacity-60">Templates</p>
        </div>

        <div className="text-white text-center">
          <p className="font-bold text-[24px] leading-[120%]">12M+</p>
          <p className="font-lexend text-[12px] leading-[200%] tracking-base uppercase opacity-60">Queries</p>
        </div>
      </div>
    </section>
  )
}

export default StatsDetails;