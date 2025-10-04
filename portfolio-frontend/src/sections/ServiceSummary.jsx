import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ServiceSummary = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const animations = [
      { id: "#title-service-1", x: -100 },
      { id: "#title-service-2", x: 100 },
      { id: "#title-service-3", x: -100 },
      { id: "#title-service-4", x: 100 },
    ];

    animations.forEach(({ id, x }) => {
      gsap.from(id, {
        xPercent: x,
        opacity: 0,
        ease: "expo,inOut",
        duration: 4, // smoother entrance
        scrollTrigger: {
          trigger: id,
          scrub: 1.5, // scroll smoothing
          start: "top bottom",
          end: "center center",
        },
      });
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive px-4"
    >
      {/* Design */}
      <div id="title-service-1" className="mb-6">
        <p>Design</p>
      </div>

      {/* Development + Deployment */}
      <div
        id="title-service-2"
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6"
      >
        <p className="font-normal">Development</p>
        <div className="w-10 h-1 sm:w-32 bg-gold" />
        <p>Deployment</p>
      </div>

      {/* APIs + Frontends + Scalability */}
      <div
        id="title-service-3"
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6"
      >
        <p>APIs</p>
        <div className="w-10 h-1 sm:w-32 bg-gold" />
        <p className="italic">Frontends</p>
        <div className="w-10 h-1 sm:w-32 bg-gold" />
        <p>Scalability</p>
      </div>

      {/* Databases */}
      <div id="title-service-4">
        <p>Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
