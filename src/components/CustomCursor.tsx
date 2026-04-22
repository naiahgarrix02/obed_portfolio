import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = cursorFollowerRef.current;

    if (!cursor || !follower) return;

    // Mouse move handler
    const onMouseMove = (e: MouseEvent) => {
      // Main cursor dot - follows instantly
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.45,
      });

      // Follower ring - much smoother, more prominent trail
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.90, // Increased from 0.25 to 0.45 for more prominent trail
        ease: "power2.out",
      });
    };

    // Hover effect for interactive elements
    const onMouseEnterLink = () => {
      // Dot scales slightly
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.2,
      });
      // Ring expands and becomes more visible
      gsap.to(follower, {
        scale: 1.6,
        opacity: 0.6,
        duration: 0.3,
      });
    };

    const onMouseLeaveLink = () => {
      // Dot returns to normal
      gsap.to(cursor, {
        scale: 1,
        duration: 0.2,
      });
      // Ring returns to normal
      gsap.to(follower, {
        scale: 1,
        opacity: 0.4,
        duration: 0.3,
      });
    };

    // Select all interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .cursor-pointer, .letter, [role='button']",
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    window.addEventListener("mousemove", onMouseMove);

    // Keep default cursor visible
    document.body.style.cursor = "auto";

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#FDB12F] rounded-full pointer-events-none z-50"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Trailing ring */}
      <div
        ref={cursorFollowerRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-[#FDB12F] rounded-full pointer-events-none z-50 opacity-40"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default CustomCursor;
