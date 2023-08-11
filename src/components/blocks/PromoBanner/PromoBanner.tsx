const PromoBanner = () => (
  <section className="root bg-white py-10 md:py-20">
    <div className="wrapper px-4 md:px-8">
      <div className="container max-w-[1600px] mx-auto">
        <h3 className="heading text-center text-[#121740] text-4xl">What are you waiting for?</h3>
        <div className="subheading text-center text-[#646F77] text-2xl mb-12">Start your enquiry today and receive your quote usually within 24 hours!</div>
        <div className="">
          <form className="flex flex-col justify-center items-center">
            <input type="text" placeholder="Enter Reg" className="bg-[#FFC400] rounded-lg py-4 px-12 mb-4 w-full max-w-[260px] text-3xl text-[#23323C] uppercase font-bold placeholder-[#23323C] shadow-md text-center" />
            <input type="submit" value="Start your quote" className="btn" />
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default PromoBanner;
