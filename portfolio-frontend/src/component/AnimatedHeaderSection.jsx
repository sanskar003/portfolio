import { useRef } from "react";
import AnimatedTextLines from "./AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  textColor,
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
          }
        : undefined,
    });
    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: "200",
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  }, []);

  return (
    <div ref={contextRef} className=" pointer-events-none z-10 ">
      <div className={`${textColor}`}>
        <div style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
          <div
            ref={headerRef}
            className="flex flex-col justify-center gap-12 sm:gap-16"
          >
            <p className="text-sm  tracking-[0.5rem]  px-10 font-lobster">
              {subTitle}
            </p>
            <div className="px-5">
              <h1 className="flex flex-col flex-wrap gap-12 uppercase banner-text-responsive sm:gap-16 md:block">
                {title}
              </h1>
            </div>
          </div>
        </div>

        <div className="relative px-10">
          <div className="absolute inset-x-0 border-t-2 pointer-events-none" />
          <div className="py-12 sm:py-16 text-end">
            <AnimatedTextLines
              text={text}
              className="font-light uppercase value-text-responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
