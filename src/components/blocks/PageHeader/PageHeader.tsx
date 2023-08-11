const PageHeader = () => (
  <section className="root bg-[#121740] pt-16 sm:pt-20">

    <div className="wrapper px-4 md:px-8">
      <div className="container max-w-[1600px] mx-auto">
        
        <div className="pageHeader">
          <div className="pageHeaderMessage">
            <h1 className="text-white font-bold text-3xl md:text-5xl">Get an up-to-the-minute valuation of your vehicle today</h1>
            <p className="text-[#93E25A] text-xl md:text-[26px]">Use our FREE car valuation tool to start your enquiry</p>
          </div>
          <div className="heroCta">
            <form className="flex flex-col items-center justify-center">
              <input type="text" placeholder="Enter Reg" className="bg-white rounded-lg py-4 px-12 mb-4 w-full max-w-[260px] text-3xl text-[#23323C] uppercase font-bold placeholder-[#23323C] shadow-md text-center" />
              <input type="submit" value="Start your quote" />
            </form>
          </div>
        </div>

      </div>
    </div>

  </section>
);

export default PageHeader;
