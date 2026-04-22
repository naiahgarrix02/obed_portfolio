import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "../constants";

const Services = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const servicesRef = useRef<HTMLDivElement[]>([]);

  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.src = "/bg_img.jpg";
    img.onload = () => {
      setImageLoaded(true);
    };
    img.onerror = () => {
      console.error("Failed to load background image");
      setImageLoaded(true);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial state - set opacity and position for elements
    gsap.set([titleRef.current, descriptionRef.current, linkRef.current], {
      opacity: 0,
      y: 50,
    });

    servicesRef.current.forEach((service) => {
      if (service) {
        gsap.set(service, {
          opacity: 0,
          x: 100,
        });
      }
    });

    // Create timeline for animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate title and description
    tl.to(
      titleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      0,
    )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        0.2,
      )
      .to(
        linkRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        0.4,
      );

    // Animate each service card one by one
    servicesRef.current.forEach((service, index) => {
      if (service) {
        tl.to(
          service,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "back.out(0.4)",
          },
          0.8 + index * 0.15,
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col justify-between px-15 pt-30 pb-50 overflow-hidden"
    >
      {/* Background with fallback color */}
      <div
        className="absolute inset-0 transition-opacity duration-700 bg-cover bg-center"
        style={{
          backgroundColor: "#152532",
          backgroundImage: `url('/bg_img.jpg')`,
          opacity: imageLoaded ? 1 : 0,
        }}
      />

      {/* Original content - exactly as you had it */}
      <div className="relative z-10">
        <div className="flex flex-row justify-between items-start align-start gap-44">
          <h2
            ref={titleRef}
            className="font-outfit-bold text-[44px] text-[#FDB12F] m-0 opacity-0"
          >
            WHAT I OFFER
          </h2>
          <div className="flex flex-col justify-end gap-7 items-left align-end">
            <p
              ref={descriptionRef}
              className="text-[24px] font-outfit-regular text-white w-7/10 opacity-0"
            >
              Explore a curation of services focused on building efficient,
              user-centered digital products. Each is designed to solve real
              problems, improve usability, and deliver across platforms.
            </p>
            <a ref={linkRef} href="#" className="opacity-0">
              <div className="flex flex-row items-center text-[20px] gap-2">
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
            {services.map((service, index) => (
              <div
                key={service.title}
                ref={(el) => {
                  if (el) servicesRef.current[index] = el;
                }}
                className="group flex flex-col items-start gap-14 w-100 h-118 
                  transition-all duration-300 ease-in-out
                  hover:bg-[#FDB12F] pl-11 pt-16 pb-16 hover:translate-y-2"
              >
                <div className="flex flex-col gap-12">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-16 h-16 transition-all duration-300 group-hover:invert"
                  />

                  <h3
                    className="font-outfit-regular text-[36px] text-white 
                      transition-all duration-300 group-hover:text-black w-1/3"
                  >
                    {service.title}
                  </h3>
                </div>

                <p
                  className="text-[20px] font-outfit-light text-white 
                    transition-all duration-300 group-hover:text-black w-4/5"
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
