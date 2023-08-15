import { OpeningHours } from '@/components/blocks/OpeningHours';
import { Image } from '../../utility-components/Image';

const Footer = () => (
  <footer className="root bg-[#121740] text-white py-12 md:py-20">
    <div className="wrapper px-4 md:px-8">
      <div className="container max-w-[1600px] mx-auto">
        <div className="footerContainer flex flex-col gap-8 md:flex-row justify-center items-center md:justify-between md:gap-10">
          <div className="footerWidget footerWidget--contact max-w-[500px] sm:grow-0 sm:shrink-1 sm:basis-auto">
            <div className="footerHeading mb-4 text-2xl md:text-3xl">Head Office</div>
            <div className="footerAddress">
              <em className="block font-bold not-italic mb-4">Click Dealer Ltd</em>
              <address className="not-italic mb-6">
                Winton House<br />
                Stoke Rd<br />
                Stoke-on-Trent<br />
                ST4 2RW
              </address>
            </div>
            <div className="footerContacts mb-8">
              <ul className="flex flex-col gap-2">
                <li><a href="/contact" className="flex items-center gap-2">
                  <i className="footerContact__icon">
                    <svg fill="#93e25a" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                      <path d="M5.153.747A1.246,1.246,0,0,0,3.672.022L.922.772A1.254,1.254,0,0,0,0,1.978a14,14,0,0,0,14,14,1.254,1.254,0,0,0,1.206-.922l.75-2.75a1.246,1.246,0,0,0-.725-1.481l-3-1.25a1.246,1.246,0,0,0-1.447.362L9.521,11.478A10.561,10.561,0,0,1,4.5,6.456L6.04,5.2A1.247,1.247,0,0,0,6.4,3.75l-1.25-3Z" transform="translate(0 0.023)"/>
                    </svg>
                  </i> 01782 478220
                </a></li>
                <li><a href="/contact" className="flex items-center gap-2">
                  <i className="footerContact__icon">
                    <svg fill="#93e25a" xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12">
                      <path d="M2,65.5a.5.5,0,0,0-.5.5v.691l5.391,4.425a1.748,1.748,0,0,0,2.222,0L14.5,66.691V66a.5.5,0,0,0-.5-.5Zm-.5,3.131V74a.5.5,0,0,0,.5.5H14a.5.5,0,0,0,.5-.5V68.631l-4.437,3.644a3.25,3.25,0,0,1-4.125,0ZM0,66a2,2,0,0,1,2-2H14a2,2,0,0,1,2,2v8a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2Z" transform="translate(0 -64)"/>
                    </svg>
                  </i> enquiries@clickdealer.co.uk
                </a></li>
              </ul>
            </div>
            <div className="footerLogo hidden sm:block">
              <Image src="/logo.svg" alt="Click Buy Motors" width="228" height="48" />
            </div>
          </div>
          <div className="footerWidget footerWidget--hours max-w-[500px] sm:grow-0 sm:shrink-1 sm:basis-auto">
            <div className="footerHeading mb-4 text-2xl md:text-3xl">Office Hours</div>
            <OpeningHours />
          </div>
          <div className="footerWidget footerWidget--clickBuy max-w-[500px] sm:grow-0 sm:shrink-1 sm:basis-auto">
            <div className="clickBuyWidget bg-[#1AB1F5] rounded-3xl p-8 text-center">
              <em className="block mb-2 text-2xl md:text-3xl font-bold not-italic">Start your application</em>
              <p className="text-lg mb-8">Get an up-to-the-minute valuation of your vehicle today</p>
              <form>
                <input type="text" placeholder="Enter Reg" className="bg-white rounded-lg py-4 px-12 mb-4 w-full max-w-[260px] text-3xl text-[#23323C] uppercase font-bold placeholder-[#23323C] shadow-md text-center" />
                <input type="submit" value="Start your quote" className="btn hover:bg-[#121740]" />
              </form>
            </div>
          </div>
        </div>
        <div className="footerMobileLogo sm:hidden block mt-8">
          <div className="footerLogo">
            <Image src="/logo.svg" alt="Click Buy Motors" width="228" height="48" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
