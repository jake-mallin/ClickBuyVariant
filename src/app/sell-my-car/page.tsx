import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/blocks/PageHeader';
import { Features2 } from '@/components/blocks/Features2';
import { PromoBanner } from '@/components/blocks/PromoBanner';
import { Carousel } from '@/components/blocks/Carousel';

export default function SellMyCar() {
  return (
    <main className="">
      <Header />
      {/* <PageHeader /> */}

      <section className="root bg-[#121740]">

        <div className="wrapper px-4 md:px-8">
          <div className="container max-w-[1600px] mx-auto">
            
            <div className="pageHeader relative min-h-[240px] md:min-h-[360px] lg:min-h-[420px] flex flex-col items-center justify-between gap-10 sm:flex-row pt-16 pb-8 sm:pt-20 sm:pb-4 overflow-hidden">
              <div className="pageHeaderMessage max-w-[800px] px-4 md:px-8 pt-6 pb-0 md:pt-12 md:pb-12 text-center sm:text-left">
                <i className="pageHeaderIcon absolute right-[50%] sm:right-[6vw] top-[50%] translate-y-[-50%] z-0">
                  <svg fill="#1F2865" xmlns="http://www.w3.org/2000/svg" width="618" height="618" viewBox="0 0 618 618">
                    <path d="M319.505,94.311H427.293v91.372l-7.846-7.846a18.094,18.094,0,1,0-25.589,25.589L432.6,242.172a18,18,0,0,0,25.589,0l38.746-38.746a18.094,18.094,0,1,0-25.589-25.589l-7.846,7.846V76.205A18.081,18.081,0,0,0,445.4,58.1H319.505a18.105,18.105,0,0,0,0,36.211Z" transform="translate(62.399 12.029)" />
                    <path d="M192.909,441.407H105.762v-79.3l7.846,7.846a18.067,18.067,0,0,0,25.589,0,18,18,0,0,0,0-25.589l-38.746-38.746a18,18,0,0,0-25.589,0L36.116,344.362a18,18,0,0,0,0,25.589,18.067,18.067,0,0,0,25.589,0l7.846-7.846v97.407a18.081,18.081,0,0,0,18.105,18.105H193.03a18.081,18.081,0,0,0,18.105-18.105A18.342,18.342,0,0,0,192.909,441.407Z" transform="translate(6.371 62.166)" />
                    <path d="M274.481,270.181l-13.881,58.9c2.776-.241,5.552-.362,8.449-.362H502.368q4.164,0,8.328.362l-13.881-58.9A17.97,17.97,0,0,0,479.193,256.3H292.1a18.2,18.2,0,0,0-17.623,13.881Z" transform="translate(53.952 53.062)" />
                    <path d="M511.419,346.3H278.1a61.919,61.919,0,0,0-61.8,61.8v75.8a18.081,18.081,0,0,0,18.105,18.105h18.105V528.2a18.105,18.105,0,0,0,36.211,0V502.007H500.8V528.2a18.105,18.105,0,1,0,36.211,0V502.007h18.105A18.081,18.081,0,0,0,573.219,483.9V408.1A61.842,61.842,0,0,0,511.419,346.3ZM294.757,441.535a17.985,17.985,0,1,1,17.985-17.985A18.03,18.03,0,0,1,294.757,441.535Zm200.005,0a17.985,17.985,0,1,1,17.985-17.985A18.03,18.03,0,0,1,494.762,441.535Z" transform="translate(44.781 71.695)" />
                    <path d="M171.278,0C76.888,0,0,76.888,0,171.278S76.888,342.555,171.278,342.555s171.278-76.888,171.278-171.278S265.668,0,171.278,0Zm78.216,267.478c0,4.587-2.655,7.242-7.242,7.242H100.3c-4.587,0-7.242-2.655-7.242-7.242V237.3c0-4.587,2.655-7.242,7.242-7.242h11.829V202.54H103.2c-4.587,0-7.242-2.655-7.242-7.242V169.226c0-4.587,2.655-7.242,7.242-7.242h8.932v-29.21c0-44.66,33.555-64.938,65.18-64.938s65.18,20.278,65.18,64.938v7.242c0,4.587-2.655,7.242-7.242,7.242H203.385c-4.587,0-7.242-2.655-7.242-7.242v-7.242c0-12.432-7.846-19.675-18.83-19.675s-18.83,7.242-18.83,19.675v29.21h43.212c4.587,0,7.242,2.655,7.242,7.242V195.3c0,4.587-2.655,7.242-7.242,7.242H158.483v27.52h83.768c4.587,0,7.242,2.655,7.242,7.242v30.176Z" />
                  </svg>
                </i>
                <h1 className="relative text-white font-bold text-3xl md:text-5xl mb-6 z-10">Get an up-to-the-minute valuation of your vehicle today</h1>
                <p className="relative text-[#93E25A] text-xl md:text-[26px] z-10">Use our FREE car valuation tool to start your enquiry</p>
              </div>
              <div className="heroCta sm:grow-0 sm:shrink-0 sm:basis-[355px] sm:p-8 md:p-12 z-10">
                <form className="flex flex-col items-center justify-center">
                  <input type="text" placeholder="Enter Reg" className="bg-white rounded-lg py-4 px-12 mb-4 w-full max-w-[260px] text-3xl text-[#23323C] uppercase font-bold placeholder-[#23323C] shadow-md text-center" />
                  <input type="submit" value="Start your quote" className="btn" />
                </form>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* <ContentBlock /> */}

      <section className="root py-10 sm:py-20">
        <div className="wrapper px-4 md:px-8">
          <div className="container max-w-[1200px] mx-auto">
            <p className="text-center">When you choose Click Car Buy, you&apos;re choosing a company that values transparency and fair deals. Our team of expert appraisers will assess your car&apos;s value based on its make, model, condition, and market trends, ensuring you receive the best offer possible. Say goodbye to lengthy negotiations and tiresome paperwork because we handle it all for you. Once we agree on a price, we&apos;ll take care of the paperwork and logistics, making the selling process a breeze. Join thousands of satisfied customers who have trusted Click Car Buy to sell their cars quickly and for the right price.</p>
          </div>
        </div>
      </section>

      <Features2 />

      <PromoBanner />

      <Carousel />

      <Footer />
    </main>
  )
}
