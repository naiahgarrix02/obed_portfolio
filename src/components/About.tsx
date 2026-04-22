import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);

  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.src = "/bg_img.jpg";
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timer = setTimeout(() => {
      if (textRef.current) {
        const container = textRef.current;
        const originalHTML = container.innerHTML;
        const wrapper = document.createElement("div");
        wrapper.innerHTML = originalHTML;
        lettersRef.current = [];

        const wrapTextNodes = (node: Node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent || "";
            if (text.trim().length > 0) {
              const fragment = document.createDocumentFragment();
              const chars = text.split("");

              chars.forEach((char) => {
                const span = document.createElement("span");
                span.className = "about-letter inline-block";
                span.style.opacity = "0.3"; // Start at 30% opacity
                span.style.transform = "translateY(20px)";
                span.textContent = char === " " ? "\u00A0" : char;
                lettersRef.current.push(span);
                fragment.appendChild(span);
              });

              node.parentNode?.replaceChild(fragment, node);
            }
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.nodeName === "BR") return;
            const children = Array.from(node.childNodes);
            children.forEach((child) => wrapTextNodes(child));
          }
        };

        Array.from(wrapper.childNodes).forEach((child) => wrapTextNodes(child));
        container.innerHTML = wrapper.innerHTML;

        const letterSpans = document.querySelectorAll(".about-letter");
        const totalLetters = letterSpans.length;

        // Create a ScrollTrigger that spans the entire section
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top 70%", // Start when section top hits 70% of viewport
          end: "bottom bottom", // End when section bottom hits bottom of viewport
          scrub: 1,
          onUpdate: (self) => {
            // Calculate progress (0 to 1)
            const progress = self.progress;
            // Calculate how many letters should be fully visible based on progress
            const lettersToShow = Math.floor(totalLetters * progress);

            // Animate letters up to the current progress
            letterSpans.forEach((letter, index) => {
              if (index <= lettersToShow) {
                gsap.to(letter, {
                  opacity: 1,
                  y: 0,
                  duration: 0.1,
                  overwrite: true,
                });
              }
            });
          },
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center px-22 overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 transition-opacity duration-700 bg-cover bg-center"
        style={{
          backgroundColor: "#152532",
          backgroundImage: `url('/bg_img.jpg')`,
          opacity: imageLoaded ? 1 : 0,
        }}
      />

      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <p
        ref={textRef}
        className="relative z-10 text-[64px] text-white text-center font-outfit-regular leading-tight"
      >
        With <span className="text-[#FFC460]">over 5 years of experience,</span>{" "}
        I specialize in <span className="text-[#FFC460]">designing</span>
        <br />
        and <span className="text-[#FFC460]">building</span> software solutions
        that balance aesthetics <br />
        and usability — creating pixel-perfect, yet functional <br />
        designs that deliver useful user experiences.
      </p>
    </div>
  );
};

export default About;
