import "./App.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import LenisScroll from "./components/LenisScroll";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor"; // Add this

function App() {
  const [progress, setProgress] = useState(0);

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const appRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // ... rest of your useEffect code stays exactly the same ...
    const images = ["/bg_img.jpg", "/bg_projects.jpg", "/bg_footer.jpg"];

    let loadedCount = 0;
    const total = images.length;

    let current = 0;
    let interval: ReturnType<typeof setInterval> | null = null;

    interval = setInterval(() => {
      if (loadedCount === total) return;

      current = Math.min(current + Math.random() * 1.5, 90);
      setProgress(Math.floor(current));
    }, 100);

    const startFinish = () => {
      const fin = setInterval(() => {
        current = Math.min(current + 2, 100);
        setProgress(Math.floor(current));

        if (current >= 100) {
          clearInterval(fin);

          setTimeout(() => {
            const tl = gsap.timeline({
              defaults: { ease: "power3.out" },
            });

            tl.to(
              appRef.current,
              {
                opacity: 1,
                duration: 1,
              },
              0,
            );

            tl.to(
              loaderRef.current,
              {
                yPercent: -100,
                duration: 1,
                ease: "power2.inOut",
              },
              0,
            );
          }, 1500);
        }
      }, 30);
    };

    images.forEach((src) => {
      const img = new Image();
      img.src = src;

      img.onload = img.onerror = () => {
        loadedCount += 1;

        if (loadedCount === total) {
          if (interval) clearInterval(interval);
          startFinish();
        }
      };
    });

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <>
      <CustomCursor /> {/* Add this here */}
      <div ref={loaderRef} className="loader-layer">
        <Loader progress={progress} />
      </div>
      <div ref={appRef} className="app-layer">
        <LenisScroll>
          <Hero />
          <Carousel />
          <About />
          <Services />
          <Projects />
          <TechStack />
          <Footer />
        </LenisScroll>
      </div>
    </>
  );
}

export default App;
