import { useRef } from "react";
import AnimatedHeaderSection from "../component/AnimatedHeaderSection";
import PixelTransition from "../components/PixelTransition";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import LogoLoop from "../components/LogoLoop";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiBootstrap,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import AnimatedAbout from "../component/AnimatedAbout";

gsap.registerPlugin(ScrollTrigger);

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiHtml5 />,
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    node: <SiCss3 />,
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  {
    node: <SiBootstrap />,
    title: "Bootstrap",
    href: "https://getbootstrap.com",
  },
  { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
];

const About = () => {
  const sectionRef = useRef(null);
  const introRef = useRef(null);

  const splitWords = (text) =>
    text.split(" ").map((word, i) => (
      <span
        key={i}
        className="word inline-block text-transparent textStrokeBlack opacity-0 translate-y-6"
      >
        {word}&nbsp;
      </span>
    ));

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const wordElements = introRef.current.querySelectorAll(".word");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 15%",
            end: "+=80%",
            scrub: true,
            pin: true,
            markers: false,
          },
        })
        .to(wordElements, {
          color: "#d4af37", // fills words with gold
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: "power1.out",
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen">

      
      
      <AnimatedHeaderSection
        subTitle=""
        title="About"
        text=""
        textColor="text-black"
        withScrollTrigger
      />



      <div className="min-h-screen flex justify-center items-center px-6 sm:px-10 lg:px-20">
        {/* ✨ Animated Word-by-Word Block */}
        <div ref={introRef} className="w-full max-w-[1400px]">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-lobster pb-6 sm:pb-10">
            <span className="text-lg sm:text-xl md:text-2xl font-amiamie">
              {splitWords("Hi, I'm")}
            </span>{" "}
            {splitWords("Sanskar")}
          </h1>

          <h2 className="font-amiamie-round font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-tight">
            <span className="block text-right mb-6">
              {splitWords("nice to see you here !")}{" "}
            </span>

            <div className="pt-10 sm:pt-16 lg:pt-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-amiamie tracking-tight leading-relaxed">
              <span>
                {splitWords("I’m excited to share a bit about myself —")}
              </span>
              <br />
              <span>
                {splitWords(" — not just what I do, but why I love doing it.")}
              </span>
            </div>
          </h2>

          {/* Optional vertical spacing */}
          <div className="min-h-screen"></div>
        </div>
      </div>

      <div className="relative min-h-screen overflow-hidden px-4">
        {/* Background Logo Scroll */}
        {/* <div className="absolute inset-0 z-10 pointer-events-none sm:top-0 md:top-0 lg:top-60 ">
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="right"
            logoHeight={55}
            gap={50}
            pauseOnHover={false}
            scaleOnHover={false}
            fadeOut={true}
            ariaLabel="Technology partners"
          />
        </div> */}

        {/* Optional Gradient Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/10 backdrop-blur-sm z-0" /> */}

        {/* About Section Cards */}
        <div className="relative  flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 py-20">
          {/* Card 1 */}
          {/* <div className="hover:z-11 rotate-0 lg:rotate-12 hover:rotate-0 transition-all duration-500 w-full max-w-sm">
            <PixelTransition
              firstContent={
                <img
                  src="/images/about-section/WhoAmI.png"
                  alt="Who Am I"
                  className="w-full h-full object-cover"
                />
              }
              secondContent={
                <div className="w-full h-full grid place-items-center bg-[#111]">
                  <p className="font-light text-base sm:text-lg md:text-xl text-white text-center p-4">
                    What people like to call a tech{" "}
                    <span className="text-gold font-medium text-2xl sm:text-3xl md:text-4xl font-amiamie-round">
                      enthusiast
                    </span>{" "}
                    — someone who gets genuinely excited about technology. Not
                    every tech though, I've got a thing for{" "}
                    <span className="text-gold font-medium text-2xl sm:text-3xl md:text-4xl font-amiamie-round">
                      front-end
                    </span>
                    .
                  </p>
                </div>
              }
              gridSize={15}
              pixelColor="gold"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div> */}

          {/* Card 2 */}
          {/* <div className="z-11 rotate-0 lg:rotate-3 hover:rotate-0 transition-all duration-500 w-full max-w-sm">
            <PixelTransition
              firstContent={
                <img
                  src="/images/about-section/WhatIDo.png"
                  alt="What I Do"
                  className="w-full h-full object-cover"
                />
              }
              secondContent={
                <div className="w-full h-full grid place-items-center bg-[#111]">
                  <p className="font-light text-base sm:text-lg md:text-xl text-white text-center p-4">
                    Building projects that{" "}
                    <span className="text-gold font-medium text-2xl sm:text-3xl md:text-4xl font-amiamie-round">
                      thrive
                    </span>
                    . Not just functionally, but visually. I want to{" "}
                    <span className="text-gold font-medium text-2xl sm:text-3xl md:text-4xl font-amiamie-round">
                      create
                    </span>{" "}
                    things that speak for themselves.
                  </p>
                </div>
              }
              gridSize={15}
              pixelColor="gold"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div> */}

          {/* Card 3 */}
          {/* <div className="hover:z-11 rotate-0 lg:-rotate-12 hover:rotate-0 transition-all duration-500 w-full max-w-sm">
            <PixelTransition
              firstContent={
                <img
                  src="/images/about-section/Why.png"
                  alt="Why"
                  className="w-full h-full object-cover"
                />
              }
              secondContent={
                <div className="w-full h-full grid place-items-center bg-[#111]">
                  <p className="font-light text-base sm:text-lg md:text-xl text-white text-center p-4">
                    Because that’s what people{" "}
                    <span className="text-gold font-medium text-2xl sm:text-3xl md:text-4xl font-amiamie-round">
                      see
                    </span>{" "}
                    — and I love showing them what’s possible when you turn
                    simple{" "}
                    <span className="text-gold font-medium text-2xl sm:text-3xl md:text-4xl font-amiamie-round">
                      101010s
                    </span>{" "}
                    into something beautiful, engaging, and alive.
                  </p>
                </div>
              }
              gridSize={15}
              pixelColor="gold"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </div> */}
        </div>

            <AnimatedAbout/>

      </div>

      <div className="min-h-[10vh]"></div>
    </section>
  );
};

export default About;

/*
  Who Am <span className="highlitedText">I</span> ?
          </h2>
          <br />
          <h2 className="text-3xl font-light leading-[1.2em] tracking-normal">
            what people like to call a tech{" "}
            <span className="text-gold font-medium">enthusiast</span>—someone
            who gets genuinely excited about technology. Not{" "}
            <span className="text-gold font-medium">every</span> tech, though.
            I’ve got a thing for front-end.


 Why <span className="text-3xl font-lobster">?</span>
            <br />
            Because that’s what people see—and I love showing them what’s possible
            when you turn simple 010101s into something beautiful, engaging, and alive.




             What Drives Me <span className="text-3xl font-lobster">?</span>
            <br />
            Building projects that thrive.
            <br />
            Not just functionally, but visually. I want to create things that speak for themselves—
            experiences that feel intuitive, expressive, and smart.
*/
