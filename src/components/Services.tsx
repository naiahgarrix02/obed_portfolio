import { services } from "../constants";

const Services = () => {
  return (
    <div className="bg-[url('/bg_img.jpg')] bg-cover bg-center flex flex-col justify-between px-15 pt-30 pb-50">
      <div className="flex flex-row justify-between items-start align-start gap-32">
        <h2 className="font-outfit-bold text-[44px] text-[#FDB12F] m-0 ">
          WHAT DO I OFFER?
        </h2>
        <div className="flex flex-col justify-end gap-7 items-left align-end">
          <p className="text-[24px] font-outfit-regular text-white w-7/10">
            Explore a curation of services focused on building efficient,
            user-centered digital products. Each is designed to solve real
            problems, improve usability, and deliver across platforms.
          </p>
          <a>
            <div className="flex flex-row items items-center text-[20px] gap-2">
              <p className="text-white font-outfit-regular hover:underline hover:text-[#FDB12F]">
                My Resume
              </p>
              <img src="/arrow.svg" alt="arrow" className="w-6 h-6" />
            </div>
          </a>
        </div>
      </div>

      <div className="w-full mt-20 justify-end">
        <div className="flex flex-row justify-end gap-20 items-end align-end p-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col items-start gap-14 w-100 h-118 
               transition-all duration-300 
               hover:bg-[#FDB12F] pl-11 pt-16 pb-16 hover:translate-y-2"
            >
              <div className="flex flex-col gap-12">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-16 h-16  group-hover:invert"
                />

                <h3
                  className="font-outfit-regular text-[36px] text-white 
                     group-hover:text-black w-1/3"
                >
                  {service.title}
                </h3>
              </div>

              <p
                className="text-[20px] font-outfit-light text-white 
                  group-hover:text-black w-4/5"
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services