// components/AnimatedCursor.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedCursor = () => {
  const rippleContainerRef = useRef(null);

  useEffect(() => {
    const dot = document.querySelector(".cursor-dot");
    const trail = document.querySelector(".cursor-trail");

    const moveCursor = (e) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });

      gsap.to(trail, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        lerp: 2,
        ease: "back.out",
      });
    };

    const createRipple = (e) => {
      const ripple = document.createElement("div");
      ripple.className = "ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      rippleContainerRef.current.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 0.6 },
        {
          scale: 3,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        }
      );
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", createRipple);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", createRipple);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[9999]">
      <div className="cursor-dot w-2 h-2 bg-yellow-400 rounded-full absolute -translate-x-1/2 -translate-y-1/2" />
      <div className="cursor-trail w-8 h-8 bg-yellow-400/30 rounded-full absolute -translate-x-1/2 -translate-y-1/2 " />
      <div ref={rippleContainerRef} className="fixed top-0 left-0 w-full h-full z-[9998] overflow-hidden" />
    </div>
  );
};

export default AnimatedCursor;