const ContactForm = () => (
  <div className="root">
    <div className="formContainer p-6 md:p-8 rounded-2xl border-[#CDDDE8] border-[1px]">
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="w-full p-3 rounded-lg border-[#D1D1D1] border-[1px] shadow-inner"></input>
        <input type="text" placeholder="Contact Number" className="w-full p-3 rounded-lg border-[#D1D1D1] border-[1px] shadow-inner"></input>
        <input type="text" placeholder="Email Address" className="w-full p-3 rounded-lg border-[#D1D1D1] border-[1px] shadow-inner"></input>
        <textarea rows="5" placeholder="Your Message" className="w-full p-3 rounded-lg border-[#D1D1D1] border-[1px] shadow-inner"></textarea>
        <label className="text-[#868686]">What is 3 + 4?</label>
        <input type="submit" value="Start your quote" className="btn" />
      </form>
    </div>
  </div>
);

export default ContactForm;
