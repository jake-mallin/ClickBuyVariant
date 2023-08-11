import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/blocks/PageHeader';
import { Address } from '@/components/blocks/Address';
import { OpeningHoursDark } from '@/components/blocks/OpeningHoursDark';
import { ContactForm } from '@/components/blocks/ContactForm';
import { Map } from '@/components/blocks/Map';
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
                <h1 className="text-white font-bold text-3xl md:text-5xl mb-6">Contact Us</h1>
                <p className="text-[#93E25A] text-xl md:text-[26px]">We&apos;re available to contact 24/7. We&apos;ll get back to you the next working day.</p>
              </div>
            </div>

          </div>
        </div>

      </section>

      <section className="root py-10 sm:py-20">
        <div className="wrapper px-4 md:px-8">
          <div className="container max-w-[1600px] mx-auto">
            
            <div className="sm:grid sm:grid-cols-3 sm:gap-20">
              <div className="contactWidget contactWidget--contact">
                <div className="contactHeading mb-4 text-2xl md:text-3xl">Head Office</div>
                <div className="contactAddress">
                  <Address />
                </div>
                <div className="contactContacts mb-8">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="tel:01782478220" className="flex items-center gap-2">
                        <i className="contactContact__icon">
                          <svg fill="#93e25a" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                            <path d="M5.153.747A1.246,1.246,0,0,0,3.672.022L.922.772A1.254,1.254,0,0,0,0,1.978a14,14,0,0,0,14,14,1.254,1.254,0,0,0,1.206-.922l.75-2.75a1.246,1.246,0,0,0-.725-1.481l-3-1.25a1.246,1.246,0,0,0-1.447.362L9.521,11.478A10.561,10.561,0,0,1,4.5,6.456L6.04,5.2A1.247,1.247,0,0,0,6.4,3.75l-1.25-3Z" transform="translate(0 0.023)"/>
                          </svg>
                        </i> 01782 478220
                      </a>
                    </li>
                    <li>
                      <a href="mailto:enquiries@clickdealer.co.uk" className="flex items-center gap-2">
                        <i className="contactContact__icon">
                          <svg fill="#93e25a" xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12">
                            <path d="M2,65.5a.5.5,0,0,0-.5.5v.691l5.391,4.425a1.748,1.748,0,0,0,2.222,0L14.5,66.691V66a.5.5,0,0,0-.5-.5Zm-.5,3.131V74a.5.5,0,0,0,.5.5H14a.5.5,0,0,0,.5-.5V68.631l-4.437,3.644a3.25,3.25,0,0,1-4.125,0ZM0,66a2,2,0,0,1,2-2H14a2,2,0,0,1,2,2v8a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2Z" transform="translate(0 -64)"/>
                          </svg>
                        </i> enquiries@clickdealer.co.uk
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="contactWidget contactWidget--hours">
                <div className="contactHeading mb-4 text-2xl md:text-3xl">Office Hours</div>
                <OpeningHoursDark />
              </div>

              <div className="contactWidget contactWidget--form row-span-2">
                <div className="contactHeading mb-4 text-2xl md:text-3xl">Contact Us</div>
                <ContactForm />
              </div>

              <div className="contactWidget contactWidget--map col-span-2">
                <div className="contactHeading mb-4 text-2xl md:text-3xl">Map</div>
                <Map />
              </div>

            </div>

          </div>
        </div>
      </section>

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
