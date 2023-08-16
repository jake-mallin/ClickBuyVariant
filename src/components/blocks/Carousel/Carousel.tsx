const Carousel = () => (
  <section className="root bg-[#93E25A] py-10 md:py-20">
    <div className="wrapper px-4 md:px-8">
      <div className="container max-w-[1600px] mx-auto">
        <h3 className="heading text-center text-white text-4xl">Rated 4.9 on Google</h3>
        <div className="subheading text-center text-[#121740] text-2xl mb-12">Join the hundreds of customers who have used the Click Car Buy Service</div>
        <div className="@container w-full">
          <div className="promoCard flex overflow-x-scroll @[700px]:overflow-auto @[700px]:grid @[700px]:grid-cols-2 @[1200px]:grid-cols-4 gap-10">
            <div className="promoCard__item grow-0 shrink-0 basis-[calc(100vw-32px)]">
              <div className="reviewCard bg-white shadow-lg rounded-2xl p-8">
                <em className="block font-bold text-[#121740] not-italic mb-2">A Stress-Free Car Buying Experience!</em>
                <p className="text-sm text-[#121740] mb-2">I recently used Click Car Buying Service, and I must say, it was the best decision I made when purchasing my new car. From the moment I contacted them, the team was incredibly responsive and attentive to my needs.</p>
                <em className="block text-[#121740] font-bold not-italic text-sm">Samantha Rivera</em>
              </div>
            </div>
            <div className="promoCard__item grow-0 shrink-0 basis-[calc(100vw-32px)]">
              <div className="reviewCard bg-white shadow-lg rounded-2xl p-8">
                <em className="block font-bold text-[#121740] not-italic mb-2">Effortless Car Buying Made Possible!</em>
                <p className="text-sm text-[#121740] mb-2">I was skeptical about using a car buying service at first, but after trying out Click Car Buying, I&apos;m a true believer! The entire team at Click Car Buying was incredibly professional and knowledgeable. They really knew their stuff and guided me through the whole process with ease.</p>
                <em className="block text-[#121740] font-bold not-italic text-sm">Lucas Bennett</em>
              </div>
            </div>
            <div className="promoCard__item grow-0 shrink-0 basis-[calc(100vw-32px)]">
              <div className="reviewCard bg-white shadow-lg rounded-2xl p-8">
                <em className="block font-bold text-[#121740] not-italic mb-2">Top-Notch Car Buying Concierge!</em>
                <p className="text-sm text-[#121740] mb-2">I couldn&apos;t have asked for a better car buying experience, all thanks to Click Car Buy. They truly exceeded my expectations in every way possible. From the initial consultation to the final delivery of my new car, their level of customer service was impeccable.</p>
                <em className="block text-[#121740] font-bold not-italic text-sm">Isabella Patel</em>
              </div>
            </div>
            <div className="promoCard__item grow-0 shrink-0 basis-[calc(100vw-32px)]">
              <div className="reviewCard bg-white shadow-lg rounded-2xl p-8">
                <em className="block font-bold text-[#121740] not-italic mb-2">Exceptional!</em>
                <p className="text-sm text-[#121740] mb-2">I cannot express enough how grateful I am for the exceptional service provided by Click Buy. As a first-time car buyer, I was overwhelmed by the whole process and didn&apos;t know where to start. That&apos;s when I decided to seek professional help, and Click Buy came highly recommended.</p>
                <em className="block text-[#121740] font-bold not-italic text-sm">Ethan Mitchell</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Carousel;
