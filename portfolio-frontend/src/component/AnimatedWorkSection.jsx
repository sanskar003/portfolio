import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { projects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedWorkSection = () => {
  const sectionRef = useRef(null);
  const planetRefs = useRef([]);
  const textRefs = useRef([]);
  // const [activeIndex, setActiveIndex] = useState(null);

  useGSAP(() => {
    projects.forEach((_, i) => {
      const planet = planetRefs.current[i];
      const text = textRefs.current[i];
      if (!planet || !text) return;

      gsap.fromTo(
        planet,
        { y: 300 },
        {
          y: -300,
          scrollTrigger: {
            trigger: planet,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        text,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: text,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black min-h-[50vh] text-white  space-y-64 relative overflow-hidden"
    >
      <div className="h-[0.5vh]"/>

      {projects.map((project, i) => {
        const isEven = i % 2 === 0;

        return (
          <div
          key={project.name}
          className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-8"
          >
           
              <>
                {/* 🌟 Centered Text */}
                <div
                  ref={(el) => (textRefs.current[i] = el)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none"
                  // onClick={() => setActiveIndex(i)}
                >
                  <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-6xl font-amiamie-round mb-2 hollowText text-white pb-5">
                    {project.name}
                  </h2>
                  <p className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-light tracking-tight text-gold leading-5 sm:leading-5 md:leading-10 lg:leading-10">
                    {project.description}
                  </p>
                </div>

                {/* 🪐 Planet Image */}
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    ref={(el) => (planetRefs.current[i] = el)}
                    className={`absolute top-1/2 transform -translate-y-1/2 cursor-pointer ${
                      isEven ? "left-4 sm:left-10" : "right-4 sm:right-10"
                    } w-[15em] sm:w-[20em] md:w-[30em] lg:w-[35em] aspect-square rounded-full shadow-xl overflow-hidden`}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover object-center border rounded-full"
                    />
                  </div>
                </a>
              </>
   
          </div>
        );
      })}

      <div className="min-h-[10vh] bg-black"></div>
    </section>
  );
};

export default AnimatedWorkSection;
