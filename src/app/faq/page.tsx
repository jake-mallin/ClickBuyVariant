import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/blocks/PageHeader';
import { Accordion } from '@/components/blocks/Accordion';
import { PromoBanner } from '@/components/blocks/PromoBanner';
import { Carousel } from '@/components/blocks/Carousel';

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
                <h1 className="text-white font-bold text-3xl md:text-5xl mb-6">Frequently Asked Questions</h1>
                <p className="text-[#93E25A] text-xl md:text-[26px]">Some of the most common questions that we get asked</p>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* <ContentBlock /> */}

      <section className="root py-10 sm:py-20">
        <div className="wrapper px-4 md:px-8">
          <div className="container max-w-[1200px] mx-auto">
            <p className="text-center">At Click Car Buy, we understand that selling your car can be a significant decision, and we&apos;re here to make the process as smooth as possible. To address any queries you may have, we&apos;ve compiled a comprehensive list of frequently asked questions about selling your car to our dealership. Whether you&apos;re looking to sell a well-maintained vehicle or one that needs a little extra care, we&apos;re ready to assist you. Our experienced team of appraisers is committed to providing fair and competitive offers, regardless of your car&apos;s make, model, or condition. Explore our FAQ section below to gain insights into our selling process and find answers to common inquiries. Should you have any additional questions, feel free to <a href="/contact" className="textLink">reach out to us</a>. Thank you for considering Click Car Buy as your trusted partner in selling your car!</p>
          </div>
        </div>
      </section>

      <Accordion />

      <PromoBanner />

      <Carousel />

      <Footer />
    </main>
  )
}
