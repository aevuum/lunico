import Header from "./header";

const Main = () => {
  return (
    <main>
      <section className="relative w-full h-max min-h-[50rem] bg-cover bg-center bg-[url('/images/lunico-dubai-interior-2-1.jpg')] flex items-center justify-center overflow-hidden">
        <Header className="absolute top-8 left-0 z-10" />
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9) 100%)`,
          }}
        ></div>
        <div className="mt-64 relative text-white text-center font-[Against]">
          <h1 className="text-4xl">Taste Your Destiny</h1>
          <p className="text-xl mt-2">Book your table</p>
        </div>
      </section>
      <section className="bg-black w-full h-max min-h-[60rem]">
        <div className="text-white flex justify-between px-[30rem]">
          <div>
            <p>Sun to Thur <span className='font-extrabold'>12 PM – 1 AM</span></p>
            <p>Fri <span className='font-extrabold'>12 PM – 2 AM</span></p>
            <p>Sat <span className='font-extrabold'>12 PM – 2 AM</span></p>
          </div>
          <div className="flex flex-col">
            <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18798.4615674404!2d55.255700499999996!3d25.22666295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43f80055c67f%3A0xe2890ca94980b95e!2sLa%20mer%20beach!5e1!3m2!1sen!2sen!4v1729862528602!5m2!1sen!2sen" className="ease-in-out duration-200 hover:text-amber-300">J1 Beach</a>
            <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18798.4615674404!2d55.255700499999996!3d25.22666295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43f80055c67f%3A0xe2890ca94980b95e!2sLa%20mer%20beach!5e1!3m2!1sen!2sen!4v1729862528602!5m2!1sen!2sen" className="ease-in-out duration-200 hover:text-amber-300">La Mer, Dubai, UAE</a>
          </div>
        </div>
        <hr className="mt-6 h-0.5 w-full bg-[#B2884E] bg-gradient-to-l from-[#BA935A] to-transparent"/>
      </section>
    </main>
  );
};

export default Main;
