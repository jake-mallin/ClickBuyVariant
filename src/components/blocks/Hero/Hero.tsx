const Hero = () => (
  <section className="root relative overflow-hidden bg-[#121740] pt-16 sm:pt-20">
    <div className="container max-w-[1600px] mx-auto">
      <div className="heroUnit sm:min-h-[460px] sm:flex sm:justify-between sm:items-center">
        <div className="heroMessage px-4 md:px-8 pt-6 pb-12 md:pt-12 md:pb-12 w-full max-w-[600px] bg-[#121740] rounded-b-[32px]">
          <h2 className="text-white text-center sm:text-left text-4xl leading-relaxed md:text-5xl lg:text-7xl font-bold mb-6">Looking to sell your car?</h2>
          <p className="text-[#C7E5F2] text-center sm:text-left text-l md:text-2xl lg:text-4xl">Get an up-to-the-minute valuation of your vehicle today</p>
        </div>
        <div className="heroCta relative w-full sm:w-1/2 self-stretch flex flex-col items-center justify-center bg-[#1AB1F5] rounded-b-[32px] sm:rounded-bl-[120px] sm:rounded-b-[0px] p-10 sm:p-12 text-center sm:before:absolute sm:before:bottom-[100%] sm:before:left-0 sm:before:h-[80px] sm:before:w-[9999px] sm:before:bg-[#1AB1F5] sm:after:absolute sm:after:top-0 sm:after:left-[100%] sm:after:h-full sm:after:w-[9999px] sm:after:bg-[#1AB1F5]">
          <h4 className="text-white text-3xl font-bold mb-6">Get started in 60 seconds</h4>
          <div className="@container">
            <form className="flex flex-col @md:flex-row items-center">
              <input type="text" placeholder="Enter Reg" className="bg-white rounded-lg py-4 px-12 mb-4 w-full max-w-[260px] text-3xl text-[#23323C] uppercase font-bold placeholder-[#23323C] shadow-md text-center" />
              <input type="submit" value="Start your quote" className="btn hover:bg-[#121740]" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
