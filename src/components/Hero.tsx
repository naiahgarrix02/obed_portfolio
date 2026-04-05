import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLParagraphElement>(null);
  const yearRef = useRef<HTMLParagraphElement>(null);
  const cursorLightRef = useRef<HTMLDivElement>(null);

  const softwareEngineerRef = useRef<HTMLSpanElement>(null);
  const uiuxDesignerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Initial state - hide everything
      gsap.set(
        [
          logoRef.current,
          menuRef.current,
          ctaRef.current,
          titleRef.current,
          taglineRef.current,
          scrollRef.current,
          yearRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        },
      );

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        paused: true,
      });

      tl.to(
        logoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        0.2,
      )
        .to(
          menuRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          0.3,
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          0.4,
        )
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "back.out(0.3)",
          },
          0.6,
        )
        .to(
          taglineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          1.1,
        )
        .to(
          scrollRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          1.5,
        )
        .to(
          yearRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          1.5,
        );

      const checkAppReady = setInterval(() => {
        const appLayer = document.querySelector(".app-layer");
        if (appLayer && window.getComputedStyle(appLayer).opacity !== "0") {
          clearInterval(checkAppReady);
          setTimeout(() => {
            tl.play();
          }, 500);
        }
      }, 50);

      return () => clearInterval(checkAppReady);
    }, heroRef);

    // More prominent parallax scroll effect
    if (heroBgRef.current && heroContentRef.current) {
      // Background moves significantly more
      gsap.to(heroBgRef.current, {
        y: 400,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Content fades and moves up more dramatically
      gsap.to(heroContentRef.current, {
        opacity: 0.6,
        y: 150,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Individual title elements for extra depth
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          y: 80,
          scale: 0.98,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Simple cursor light that follows mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorLightRef.current) {
        gsap.to(cursorLightRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleLetterEnter = (letter: HTMLSpanElement) => {
    gsap.to(letter, {
      y: -12,
      color: "#FDB12F",
      duration: 0.2,
      ease: "back.out(0.5)",
    });
  };

  const handleLetterLeave = (letter: HTMLSpanElement) => {
    gsap.to(letter, {
      y: 0,
      color: "",
      duration: 0.2,
      ease: "power2.in",
    });
  };

  const wrapLetters = (text: string, isWhiteText: boolean = false) => {
    return text.split("").map((char, index) => {
      if (char === " ") {
        return (
          <span key={index} className="inline-block w-[0.3em]">
            &nbsp;
          </span>
        );
      }
      return (
        <span
          key={index}
          className={`letter inline-block cursor-pointer transition-colors duration-200 ${isWhiteText ? "hover:text-[#FDB12F]" : ""}`}
          onMouseEnter={(e) => handleLetterEnter(e.currentTarget)}
          onMouseLeave={(e) => handleLetterLeave(e.currentTarget)}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <div
      ref={heroRef}
      className="bg-[#0D1B2A] min-h-screen flex flex-col justify-between relative overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div
        ref={heroBgRef}
        className="absolute inset-0 bg-[url('/bg_img.jpg')] bg-cover bg-center"
        style={{ transform: "scale(1.08)" }}
      />

      {/* Background overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/40 pointer-events-none"></div>

      {/* Hero Content (will fade on scroll) */}
      <div
        ref={heroContentRef}
        className="relative z-10 flex flex-col justify-between min-h-screen"
      >
        <header className="pt-15 px-15 flex flex-row justify-between items-center">
          <div ref={logoRef}>
            <img
              src="/kemdev.svg"
              alt="logo"
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div
            ref={menuRef}
            className="bg-[#FDB12F] w-10 h-10 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300"
          ></div>
          <a ref={ctaRef} href="#" className="group">
            <div className="flex flex-row items-center text-[20px] gap-2">
              <p className="text-white font-outfit-regular group-hover:underline transition-all duration-300">
                Get In Touch
              </p>
              <img
                src="/arrow.svg"
                alt="arrow"
                className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
              />
            </div>
          </a>
        </header>

        <section className="flex flex-col gap-4">
          <div className="px-15 justify-center text-center mt-8 pt-6 md:mt-12">
            <h1
              ref={titleRef}
              className="font-steelfish-regular text-[#FDB12F] text-[220px] md:text-[300px] tracking-[-4px] md:tracking-[-18px] m-0 leading-none"
            >
              <span ref={softwareEngineerRef} className="inline-block">
                {wrapLetters("SOFTWARE ENGINEER", false)}
              </span>
              <br />
              <span ref={uiuxDesignerRef} className="inline-block text-white">
                {wrapLetters("UI/UX DESIGNER", true)}
              </span>
            </h1>
          </div>
          <div className="mt-8 md:mt-2 mb-10">
            <p
              ref={taglineRef}
              className="font-outfit-regular text-[18px] md:text-[24px] text-center text-white/80 px-4"
            >
              Clean design. Efficient code. Meaningful user experiences.
            </p>
          </div>
        </section>

        <div className="flex flex-row justify-between px-15 pb-15">
          <p
            ref={scrollRef}
            className="font-outfit-regular text-[16px] md:text-[20px] text-white/80 hover:text-white transition-colors duration-300 cursor-default"
          >
            Scroll Down
          </p>
          <p
            ref={yearRef}
            className="font-outfit-regular text-[16px] md:text-[20px] text-white/80 cursor-default"
          >
            2026 Portfolio
          </p>
        </div>
      </div>

      {/* Cursor-following light */}
      <div
        ref={cursorLightRef}
        className="absolute pointer-events-none rounded-full"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(253, 177, 47, 0.12) 0%, rgba(253, 177, 47, 0.04) 40%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          left: 0,
          top: 0,
        }}
      />
    </div>
  );
};

export default Hero;
