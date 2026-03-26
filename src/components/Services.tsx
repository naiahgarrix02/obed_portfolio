const Services = () => {
  return (
    <div className="bg-[url('/bg_img.jpg')] bg-cover bg-center min-h-screen flex flex-col justify-between px-15 pt-30">
      <div className="flex flex-row justify-between items-start align-center">
        <h2 className="font-outfit-bold text-[64px] text-[#FDB12F] m-0 ">
          WHAT DO I OFFER
        </h2>
        <div className="flex flex-row justify-end gap-16 items-center align-center">
          <p className="text-[24px] font-outfit-regular text-white w-7/10">
            Explore a curation of services focused on building efficient,
            user-centered digital products. Each is designed to solve real
            problems, improve usability, and deliver across platforms.
          </p>
          <a>
            <div className="flex flex-row items items-center text-[20px] gap-2">
              <p className="text-white font-outfit-regular hover:underline">
                My Resume
              </p>
              <img src="/arrow.svg" alt="arrow" className="w-6 h-6" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services