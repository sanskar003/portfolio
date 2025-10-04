import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import Cubes from "../components/Cubes";

const Hero = () => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  // detect mobile
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });

    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: 200,
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);

  return (
    <section id="home" className=" relative flex flex-col justify-start min-h-screen overflow-hidden">
      {/* 🧊 Responsive Cubes */}
      <div className="relative px-4 sm:px-10 py-10">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center">
          <Cubes
            gridSize={isMobile ? 3 : 5}
            maxAngle={30}
            radius={isMobile ? 1.2 : 2}
            borderStyle="1px solid gold"
            faceColor="white"
            rippleColor="gold"
            rippleSpeed={1.5}
            autoAnimate={true}
            rippleOnClick={true}
          />
          <Cubes
            gridSize={isMobile ? 3 : 5}
            maxAngle={-30}
            radius={isMobile ? 1.2 : 2}
            borderStyle="1px solid gold"
            faceColor="white"
            rippleColor="gold"
            rippleSpeed={1.5}
            autoAnimate={true}
            rippleOnClick={true}
          />
        </div>
      </div>

      {/* 🌟 Overlay Text */}
      <div
        ref={contextRef}
        className="absolute bottom-10  pointer-events-none z-10 w-full"
      >
        <div className="flex justify-start items-end">
          <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
            <div
              ref={headerRef}
              className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
            >
              <p className="backdrop-blur-sm px-3 w-fit rounded-2xl text-sm font-lobster tracking-[1em] font-light mx-6 sm:mx-16">
                let's bend the normal
              </p>
              <div className="px-6 sm:px-10">
                <h1 className="backdrop-blur-sm px-2 rounded-full flex flex-col flex-wrap gap-12 uppercase banner-text-responsive sm:gap-16 md:block">
                  SANSKAR
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;