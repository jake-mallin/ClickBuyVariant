import NextLink from 'next/link';

import { Image } from '@/components/utility-components/Image';

const Header = () => (
  <header className="root fixed w-full p-3 sm:p-4 z-20">
    <div className="wrapper px-4 md:px-8">
      <div className="container max-w-[1600px] mx-auto">
        <div className="headerContainer flex items-center justify-between">
          <div className="headerLogo mr-auto">
            <NextLink href="/"><Image src="/logo.svg" alt="Click Buy Motors" width="228" height="48" /></NextLink>
          </div>
          <nav className="navContainer ml-auto flex gap-8">
            <NextLink href="/" className="text-white hover:underline underline-offset-3">Home</NextLink>
            <NextLink href="/sell-my-car" className="text-white hover:underline underline-offset-3">Sell my car</NextLink>
            <NextLink href="/how-it-works" className="text-white hover:underline underline-offset-3">How it works</NextLink>
            <NextLink href="/faq" className="text-white hover:underline underline-offset-3">FAQ</NextLink>
            <NextLink href="/contact" className="text-white hover:underline underline-offset-3">Contact</NextLink>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
