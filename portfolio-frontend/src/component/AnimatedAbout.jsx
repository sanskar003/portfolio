import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useRef } from "react";
import LogoLoop from "../components/LogoLoop";
import CircularText from "../components/CircularText";
import ClickSpark from "../components/ClickSpark";
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

gsap.registerPlugin(ScrollTrigger);

const techLogos1 = [
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
];

const techLogos2 = [
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

const AnimatedAbout = () => {
  const container = useRef();

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".section");

      sections.forEach((el) => {
        const heading = el.querySelector(".heading-block h1");
        const text = el.querySelector(".about-text");

        // Animate heading characters
        const splitHeading = new SplitType(heading, { types: "chars" });
        gsap.from(splitHeading.chars, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 40%",
            toggleActions: "play none none reverse",
          },
        });

        // Animate paragraph lines
        const splitText = new SplitType(text, { types: "lines" });
        gsap.from(splitText.lines, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 30%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="min-h-screen px-4 sm:px-8 space-y-[20vh] sm:space-y-[30vh] md:space-y-[40vh]"
    >
      {/* Section 1 */}
      <div className="section relative">
        <div className="heading-block text-[2.5em] sm:text-[4em] md:text-[5.5em] font-amiamie font-bold leading-tight">
          <h1 className="[writing-mode:vertical-rl] hollowText">
            WHO <span className="highlitedText">I</span> AM
          </h1>
        </div>
        <div className="absolute hidden sm:block top-10 w-[80vw] h-[60vh]  font-amiamie font-light">
          <div className="mr-[15vw]">
            <CircularText
              text="curious-visionary-"
              onHover="speedUp"
              spinDuration={10}
              className="circular-text-custome"
            />
          </div>
          <div className="ml-[30vw]">
            <CircularText
              text="Explorative-clarity-"
              onHover="speedUp"
              spinDuration={10}
              className="circular-text-custome"
            />
          </div>
          <div className="mr-[10vw]">
            <CircularText
              text="imaginative-bold-"
              onHover="speedUp"
              spinDuration={10}
              className="circular-text-custome"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <h2 className="about-text text-base sm:text-xl md:text-3xl w-full sm:w-2/3 md:w-1/3 uppercase font-amiamie-round leading-7 px-2 sm:px-0 py-10 sm:py-10 my-10 sm:my-0">
            What people like to call a tech{" "}
            <span className="text-gold">enthusiast</span> — someone who gets
            genuinely excited about technology. Not every tech though, I've got
            a thing for <span className="text-gold">frontend</span>.
          </h2>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section relative">
        <div className="heading-block text-[3em] sm:text-[4em] md:text-[5.5em] font-amiamie font-bold leading-tight">
          <h1 className="[writing-mode:vertical-rl] hollowText">
            WHAT <span className="highlitedText">I</span> DO
          </h1>
        </div>
        <div className="absolute top-50 right-4 hidden sm:block sm:right-20 md:right-60 w-full sm:w-[80vw] md:w-[60vw]">
          <LogoLoop
            logos={techLogos1}
            speed={80}
            direction="right"
            logoHeight={55}
            gap={50}
            pauseOnHover={false}
            scaleOnHover={false}
            fadeOut={true}
            ariaLabel="Technology partners"
          />
          <div className="min-h-[5vh]" />
          <LogoLoop
            logos={techLogos2}
            speed={80}
            direction="left"
            logoHeight={55}
            gap={50}
            pauseOnHover={false}
            scaleOnHover={false}
            fadeOut={true}
            ariaLabel="Technology partners"
          />
        </div>
        <div className="flex justify-end">
          <h2 className="about-text text-base sm:text-xl md:text-3xl w-full sm:w-2/3 md:w-1/3 uppercase font-amiamie-round leading-7 px-2 sm:px-0 my-10 sm:my-0">
            I build projects that <span className="text-gold">thrive</span> —
            not just functionally, but visually. Experiences that don’t just
            work, but <span className="text-gold">resonate</span>. I create
            things that <span className="text-gold">speak</span> for themselves.
          </h2>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section">
        <ClickSpark
          sparkColor={["#FFD700", "#FF69B4", "#00FFFF", "#ADFF2F"]}
          sparkSize={60}
          sparkRadius={90}
          sparkCount={40}
          duration={400}
        >
          <div className="heading-block text-[2.5em] sm:text-[4em] md:text-[5.5em] font-amiamie font-bold leading-tight cursor-pointer">
            <h1 className="[writing-mode:vertical-rl] hollowText">
              WHY <span className="highlitedText">I</span> DO
            </h1>
          </div>
          <div className="flex justify-end">
            <h2 className="about-text text-base sm:text-xl md:text-3xl w-full sm:w-2/3 md:w-1/3 uppercase font-amiamie-round leading-7 px-2 sm:px-0 my-10 sm:my-0">
              Because that’s what people <span className="text-gold">see</span>,
              and I love showing them what’s possible when you turn simple{" "}
              <span className="text-gold">101010</span> into something
              beautiful, engaging, and alive.
            </h2>
          </div>
        </ClickSpark>
      </div>

      <div className="min-h-[5vh]" />
    </div>
  );
};

export default AnimatedAbout;

/*
   Because that’s what people see and I love showing them what’s possible when you turn simple 101010s into something beautiful, engaging, and alive.


const techLogos1 = [
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
];

const techLogos2 = [
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


   */
