import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/blocks/PageHeader';
import { PromoBanner } from '@/components/blocks/PromoBanner';
import { Carousel } from '@/components/blocks/Carousel';
import { ContentImageSteps } from '@/components/blocks/ContentImageSteps';

export default function SellMyCar() {
  return (
    <main className="">
      <Header />

      {/* <PageHeader /> */}

      <section className="root bg-[#121740] pt-16 sm:pt-20">

        <div className="wrapper px-4 md:px-8">
          <div className="container max-w-[1600px] mx-auto">
            
            <div className="pageHeader min-h-[240px] md:min-h-[360px] lg:min-h-[420px] flex flex-col items-center justify-between gap-10 sm:flex-row">
              <div className="pageHeaderMessage max-w-[800px] px-4 md:px-8 pt-6 pb-12 md:pt-12 md:pb-12">
                <h1 className="text-white font-bold text-3xl md:text-5xl mb-6">How does it work?</h1>
                <p className="text-[#93E25A] text-xl md:text-[26px]">Our simple 3 step process makes everything seamless</p>
              </div>
            </div>

          </div>
        </div>

      </section>

      <ContentImageSteps />

      {/* <PromoBanner /> */}
      <section className="root bg-white md:bg-[#f5f5f5] py-10 md:py-20">
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

      <Carousel />

      <Footer />
    </main>
  )
}
