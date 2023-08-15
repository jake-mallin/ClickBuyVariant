import { Image } from '@/components/utility-components/Image';

const ContentImageSteps = () => (
  <div className="">
    <section className="root relative flex flex-col sm:flex-row items-center bg-white">
      <div className="aboutText w-full md:w-7/12 p-8 sm:p-12 md:order-1">
        <h2 className="text-[#121740] text-2xl md:text-3xl mb-6 font-bold flex items-center">
          <div className="flex justify-center items-center text-white text-3xl font-bold bg-[#1AB1F5] rounded-full aspect-square w-14 h-14 mr-6">1</div>
          Enter your registration
        </h2>
        <p className="text-[#121740] mb-8">Wherever you see an &apos;Enter Reg&apos; box, simply input your vehicles registration and hit enter.</p>
        <p className="text-[#121740] mb-8">This will give your car a profile that will allow us to identify and proceed with your quote.</p>
      </div>
      <div className="aboutImage relative w-full aspect-video sm:aspect-auto sm:h-full sm:w-5/12 overflow-hidden bg-[#121740] order-1 md:order-2">
        <Image src="/step1.jpg" alt="Click Buy Motors" width="200" height="200" className="h-full w-full object-cover" />
      </div>
    </section>
    
    <section className="root relative flex flex-col sm:flex-row items-center bg-[#F5F5F5]">
      <div className="aboutImage relative w-full aspect-video sm:aspect-auto sm:h-full sm:w-5/12 overflow-hidden bg-[#121740] order-1 md:order-1">
        <Image src="/step2.jpg" alt="Click Buy Motors" width="200" height="200" className="h-full w-full object-cover" />
      </div>
      <div className="aboutText w-full md:w-7/12 p-8 sm:p-12 md:order-2">
        <h2 className="text-[#121740] text-2xl md:text-3xl mb-6 font-bold flex items-center">
          <div className="flex justify-center items-center text-white text-3xl font-bold bg-[#1AB1F5] rounded-full aspect-square w-14 h-14 mr-6">2</div>
          Receive your up-to-the-minute market valuation
        </h2>
        <p className="text-[#121740] mb-8">Usually within 24 business hours, we will provide you with a competitive valuation based on its make, model, condition, and market trends.</p>
        <p className="text-[#121740] mb-8">Granted that the information provided is a true reflection then you can lock in this price.</p>
      </div>
    </section>

    <section className="root relative flex flex-col sm:flex-row items-center bg-white">
      <div className="aboutText w-full md:w-7/12 p-8 sm:p-12 md:order-1">
        <h2 className="text-[#121740] text-2xl md:text-3xl mb-6 font-bold flex items-center">
          <div className="flex justify-center items-center text-white text-3xl font-bold bg-[#1AB1F5] rounded-full aspect-square w-14 h-14 mr-6">3</div>
          Get paid for your vehicle!
        </h2>
        <p className="text-[#121740] mb-8">Arrange collection or delivery of your vehicle and get paid in full, in cash the very same day!</p>
      </div>
      <div className="aboutImage relative w-full aspect-video sm:aspect-auto sm:h-full sm:w-5/12 overflow-hidden bg-[#121740] order-1 md:order-2">
        <Image src="/step3.jpg" alt="Click Buy Motors" width="200" height="200" className="h-full w-full object-cover" />
      </div>
    </section>
  </div>
);

export default ContentImageSteps;
