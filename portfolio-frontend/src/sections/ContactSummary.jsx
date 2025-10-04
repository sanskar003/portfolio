import { useRef } from "react";
import ScrollVelocity from "../components/ScrollVelocity";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

const ContactSummary = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=500", // ✅ pin for 300px of scroll
      pin: true,
      pinSpacing: true,
      scrub: false,
      anticipatePin: 1,
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="flex flex-col justify-center items-center min-h-screen "
    >


      <div className="overflow-hidden font-light  text-center contact-text-responsive">
        <div>
          Let’s{" "}
          <span className="text-gold font-amiamie-round text-[1.3em] tracking-tight">
            Build
          </span>{" "}
          a <br />
          <div className="py-10 w-[90vw] flex flec-col justify-center items-center">
            <ScrollVelocity
              texts={[
                "Creative ✦ Bold ✦ Timeless ✦ Extraordinary ✦",
                "Innovative ✦ Meaningful ✦ Elegent ✦ Inspiring ✦",
              ]}
              velocity={50}
              className="custom-scroll-text"
            />
          </div>
          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10">
            <span className="text-gold font-amiamie-round text-[1.3em] tracking-tight">
              Digital Story
            </span>
            <h1>together</h1>
          </div>
        </div>
      </div>

      <div className="h-[20vh]"></div>
    </section>
  );
};

export default ContactSummary;
