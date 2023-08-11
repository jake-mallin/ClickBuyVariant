const Accordion = () => (
  <section className="root bg-white">
    <div className="wrapper md:px-8">
      <div className="container max-w-[1600px] mx-auto bg-[#F5F5F5] rounded-[48px]">
        <div className="accordionContainer p-8 sm:p-12 md:p-16 lg:p-20">
          <details className="accordionItem bg-white p-4 rounded-lg border-[1px] border-[#B7BEC3] mb-4 [& open > .accordionHeading:before:rotate-0]">
            <summary className="accordionHeading relative flex justify-between items-center pr-8 list-none font-bold before:absolute before:right-0 before:rotate-90 before:bg-[#93E25A] before:w-5 before:h-1 before:rounded after:absolute after:right-0 after:w-5 after:h-1 after:bg-[#93E25A] after:rounded before:transition">How does the process of selling my car to your dealership work?</summary>
            <p className="accordionContent pt-4">Selling your car to our dealership is a straightforward and stress-free process. First, you can start by filling out our online form with essential details about your vehicle, such as its make, model, year, mileage, and overall condition. Once we receive your submission, our team of experienced appraisers will assess your car&apos;s value based on market trends and its condition. We&apos;ll then provide you with a competitive offer. If you accept, we&apos;ll handle all the necessary paperwork and arrange a convenient time for you to bring in your car for a final inspection. Once everything is verified, you&apos;ll receive payment promptly, and we&apos;ll take care of the rest!</p>
          </details>
          <details className="accordionItem bg-white p-4 rounded-lg border-[1px] border-[#B7BEC3] mb-4 open [&>before]:rotate-0">
            <summary className="accordionHeading relative flex justify-between items-center pr-8 list-none font-bold before:absolute before:right-0 before:rotate-90 before:bg-[#93E25A] before:w-5 before:h-1 before:rounded after:absolute after:right-0 after:w-5 after:h-1 after:bg-[#93E25A] after:rounded before:transition">Will you buy my car even if it&apos;s damaged or not running?</summary>
            <p className="accordionContent pt-4">Absolutely! We buy cars in all conditions, whether they&apos;re running perfectly or not running at all. Even if your car has mechanical issues, accident history, or extensive wear and tear, we&apos;re interested in purchasing it. Our team specializes in evaluating vehicles with various conditions, and we&apos;ll provide you with a fair offer based on its current state.</p>
          </details>
          <details className="accordionItem bg-white p-4 rounded-lg border-[1px] border-[#B7BEC3] mb-4 open [&>before]:rotate-0">
            <summary className="accordionHeading relative flex justify-between items-center pr-8 list-none font-bold before:absolute before:right-0 before:rotate-90 before:bg-[#93E25A] before:w-5 before:h-1 before:rounded after:absolute after:right-0 after:w-5 after:h-1 after:bg-[#93E25A] after:rounded before:transition">How do you determine the value of my car?</summary>
            <p className="accordionContent pt-4">Our car dealership employs a comprehensive and fair valuation process to determine the value of your car. Our appraisers consider factors such as the make, model, year, mileage, condition, market demand, and any additional features or upgrades your vehicle may have. We take pride in offering competitive prices that accurately reflect the true worth of your car.</p>
          </details>
          <details className="accordionItem bg-white p-4 rounded-lg border-[1px] border-[#B7BEC3] mb-4 open [&>before]:rotate-0">
            <summary className="accordionHeading relative flex justify-between items-center pr-8 list-none font-bold before:absolute before:right-0 before:rotate-90 before:bg-[#93E25A] before:w-5 before:h-1 before:rounded after:absolute after:right-0 after:w-5 after:h-1 after:bg-[#93E25A] after:rounded before:transition">Do I need to make an appointment to sell my car to your dealership?</summary>
            <p className="accordionContent pt-4">While walk-ins are welcome, we recommend scheduling an appointment beforehand to ensure the smoothest and most efficient process. An appointment allows us to allocate dedicated time to assess your car thoroughly and offer you the best possible service.</p>
          </details>
          <details className="accordionItem bg-white p-4 rounded-lg border-[1px] border-[#B7BEC3] mb-4 open [&>before]:rotate-0">
            <summary className="accordionHeading relative flex justify-between items-center pr-8 list-none font-bold before:absolute before:right-0 before:rotate-90 before:bg-[#93E25A] before:w-5 before:h-1 before:rounded after:absolute after:right-0 after:w-5 after:h-1 after:bg-[#93E25A] after:rounded before:transition">Can I sell my leased car to your dealership?</summary>
            <p className="accordionContent pt-4">Yes, you can! If you have a leased vehicle and want to sell it, we can help. Our team will work with you to understand the specifics of your lease agreement and guide you through the process of selling your leased car to our dealership.</p>
          </details>
          <details className="accordionItem bg-white p-4 rounded-lg border-[1px] border-[#B7BEC3] mb-4 open [&>before]:rotate-0">
            <summary className="accordionHeading relative flex justify-between items-center pr-8 list-none font-bold before:absolute before:right-0 before:rotate-90 before:bg-[#93E25A] before:w-5 before:h-1 before:rounded after:absolute after:right-0 after:w-5 after:h-1 after:bg-[#93E25A] after:rounded before:transition">How long does the entire selling process take?</summary>
            <p className="accordionContent pt-4">The selling process at our dealership is designed to be quick and convenient. After we assess your vehicle and make an offer, the remaining steps typically take just a few hours. However, the exact duration may vary depending on factors such as the complexity of paperwork and scheduling. Rest assured, we aim to complete the process as efficiently as possible.</p>
          </details>
          <details className="accordionItem bg-white p-4 rounded-lg border-[1px] border-[#B7BEC3]">
            <summary className="accordionHeading relative flex justify-between items-center pr-8 list-none font-bold before:absolute before:right-0 before:rotate-90 before:bg-[#93E25A] before:w-5 before:h-1 before:rounded after:absolute after:right-0 after:w-5 after:h-1 after:bg-[#93E25A] after:rounded before:transition">What documents do I need to bring when selling my car?</summary>
            <div className="accordionContent pt-4">
              <p>When you come to our dealership to sell your car, please bring the following documents with you:</p>
              <ul className="list-disc">
                <li>A valid photo ID (driver&apos;s license or passport)</li>
                <li>The vehicle&apos;s title or loan payoff information, if applicable</li>
                <li>Any service records or maintenance history you may have</li>
                <li>All sets of keys and remote controls for the vehicle</li>
              </ul>
              <p>If you have any more questions or would like to initiate the process of selling your car, don&apos;t hesitate to contact our friendly team at [Contact Number/Email]. We&apos;re here to assist you every step of the way!</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  </section>
);

export default Accordion;
