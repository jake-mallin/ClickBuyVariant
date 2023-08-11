import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/blocks/Hero';
import { Features } from '@/components/blocks/Features';
import { Carousel } from '@/components/blocks/Carousel';
import { ContentImage } from '@/components/blocks/ContentImage';

export default function Home() {
  return (
    <main className="">
      <Header />
      
      <Hero />

      <Features />

      <Carousel />

      <ContentImage />
      
      <Footer />
    </main>
  )
}
