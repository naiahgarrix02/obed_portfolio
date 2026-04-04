const Hero = () => {
  return (
    <div className="bg-[url('/bg_img.jpg')] bg-cover bg-center min-h-screen flex flex-col justify-between">
      <header className="pt-15 px-15 flex flex-row justify-between">
        <div>
          <img src="/kemdev.svg" alt="logo" />
        </div>
        <div className="bg-[#FDB12F] w-10 h-10 rounded-full"></div>
        <a>
          <div className="flex flex-row items items-center text-[20px] gap-2">
            <p className="text-white font-outfit-regular hover:underline">
              Get In Touch
            </p>
            <img src="/arrow.svg" alt="arrow" className="w-6 h-6" />
          </div>
        </a>
      </header>

      <section className="flex flex-col gap-4">
        <div className="px-15 justify-center text-center">
          <h1 className="font-steelfish-regular text-[#FDB12F] text-[300px] tracking-[-18px] m-0">
            SOFTWARE ENGINEER
          </h1>
          <h1 className="font-steelfish-regular text-white text-[300px] tracking-[-18px] m-0 -mt-44">
            UI/UX DESIGNER
          </h1>
        </div>

        <div className="-mt-18 mb-10">
          <p className="font-outfit-regular text-[24px] text-center text-white">
            Clean design. Efficient code. Meaningful user experiences.
          </p>
        </div>
      </section>

      <div className="flex flex-row justify-between px-15 pb-15">
        <p className="font-outfit-regular text-[20px] text-white">
          Scroll Down
        </p>
        <p className="font-outfit-regular text-[20px] text-white">
          2026 Portfolio
        </p>
      </div>
    </div>
  );
};

export default Hero;
