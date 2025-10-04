import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    heading: "WHO AM I",
    content: (
      <>
        <h2>
          what people like to call a tech{" "}
          <span className="text-6xl text-goldg font-medium">enthusiast</span>
        </h2>
        <h3>— someone who gets genuinely excited about technology.</h3>
        <h2>
          Not every tech though, I’ve got a thing for{" "}
          <span className="text-6xl text-goldg font-medium">front-end</span>.
        </h2>
      </>
    ),
  },
  {
    heading: "WHAT I DO",
    content: (
      <>
        <h2>
          I design and build{" "}
          <span className="text-6xl text-goldg font-medium">interactive UIs</span>
        </h2>
        <h3>— blending creativity with performance.</h3>
        <h2>
          Always pushing for{" "}
          <span className="text-6xl text-goldg font-medium">smooth experiences</span>.
        </h2>
      </>
    ),
  },
  {
    heading: "WHAT I LOVE",
    content: (
      <>
        <h2>
          Crafting{" "}
          <span className="text-6xl text-goldg font-medium">beautiful code</span>
        </h2>
        <h3>— and seeing ideas come alive on screen.</h3>
        <h2>
          Passionate about{" "}
          <span className="text-6xl text-goldg font-medium">innovation</span>.
        </h2>
      </>
    ),
  },
];

const AnimatedStackCard = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000", // shorter scroll distance to avoid glitches
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      cardData.forEach((card, i) => {
        // Update heading
        tl.to(headingRef.current, { textContent: card.heading, duration: 0.5 }, i);

        // Slide in card from right
        tl.fromTo(
          cardRefs.current[i],
          { x: "120%" },
          { x: "0%", duration: 1, ease: "power3.out" },
          i
        );

        // Scale down previous card slightly for depth
        if (i > 0) {
          tl.to(
            cardRefs.current[i - 1],
            { scale: 0.95, duration: 1, ease: "power2.out" },
            i
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col justify-center"
    >
      {/* Heading pinned top-left */}
      <h1
        ref={headingRef}
        className="absolute top-10 left-10 text-6xl md:text-8xl hollowText"
      >
        {cardData[0].heading}
      </h1>

      {/* Frame */}
      <div className="relative w-full flex justify-center">
        <div className="border-4 rounded-3xl relative flex justify-center items-center overflow-hidden w-[50rem] h-[30rem]">
          {cardData.map((card, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="absolute top-0 left-0 w-full h-full bg-black text-white rounded-2xl flex flex-col justify-center items-center shadow-xl"
              style={{ zIndex: i + 1 }}
            >
              <div className="px-8 text-2xl md:text-4xl font-light text-center space-y-6">
                {card.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStackCard;