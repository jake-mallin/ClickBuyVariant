import { Image } from '@/components/utility-components/Image';

const ContentImage = () => (
  
  <section className="root relative bg-white pb-16 md:py-36 before:absolute before:top-0 before:left-0 before:h-16 before:w-full md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-16 md:after:w-full before:bg-[#93E25A] md:after:bg-[#121740] after:z-0">
    <div className="wrapper md:px-8">
      <div className="container max-w-[1600px] mx-auto">
        <div className="aboutImage relative md:absolute top-0 right-0 w-full aspect-video md:h-full md:w-[calc(50%-40px)] rounded-[32px] md:rounded-0 md:rounded-l-[112px] overflow-hidden bg-[#121740] shadow-2xl z-10">
          <Image src="/contentImage.jpg" alt="Click Buy Motors" width="200" height="200" className="h-full w-full object-cover" />
        </div>
        <div className="aboutText w-full md:w-[calc(50%-40px)] px-4 py-8 md:px-0">
          <h1 className="text-[#121740] text-4xl md:text-5xl mb-6">A car buying service you can trust</h1>
          <p className="text-[#121740] mb-8">Welcome to Click Car Buy, your trusted partner in selling your car quickly and hassle-free! If you&apos;re looking to sell your car and want a seamless experience, look no further. At Click Car Buy, we pride ourselves on offering top-dollar prices for all types of vehicles, whether they&apos;re old or new, running or not. Our process is designed to be simple and convenient, saving you time and effort.</p>
          <p className="text-[#121740] mb-8">When you choose Click Car Buy, you&apos;re choosing a company that values transparency and fair deals. Our team of expert appraisers will assess your car&apos;s value based on its make, model, condition, and market trends, ensuring you receive the best offer possible. Say goodbye to lengthy negotiations and tiresome paperwork because we handle it all for you. Once we agree on a price, we&apos;ll take care of the paperwork and logistics, making the selling process a breeze. Join thousands of satisfied customers who have trusted Click Car Buy to sell their cars quickly and for the right price.</p>
          <p className="text-[#121740]">Contact us today, and let us turn your car into cash!</p>

          <div className="aboutText__ctas mt-10 flex flex-wrap gap-6">
            <a href="/sell-my-car" className="btn">Start your quote</a>
            <a href="/contact" className="btn">Get in touch</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContentImage;
