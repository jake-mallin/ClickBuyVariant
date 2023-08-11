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

      <section className="root bg-[#121740] pt-16 pb-8 sm:pt-20 sm:pb-0">

        <div className="wrapper px-4 md:px-8">
          <div className="container max-w-[1600px] mx-auto">
            
            <div className="pageHeader min-h-[240px] md:min-h-[360px] lg:min-h-[420px] flex flex-col items-center justify-between gap-10 sm:flex-row">
              <div className="pageHeaderMessage max-w-[800px] px-4 md:px-8 pt-6 pb-0 md:pt-12 md:pb-12 text-center sm:text-left">
                <h1 className="text-white font-bold text-3xl md:text-5xl mb-6">Get an up-to-the-minute valuation of your vehicle today</h1>
                <p className="text-[#93E25A] text-xl md:text-[26px]">Use our FREE car valuation tool to start your enquiry</p>
              </div>
              <div className="heroCta sm:grow-0 sm:shrink-0 sm:basis-[355px] sm:p-8 md:p-12">
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
