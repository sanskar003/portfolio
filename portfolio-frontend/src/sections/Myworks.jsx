import AnimatedHeaderSection from "../component/AnimatedHeaderSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedWorkSection from "../component/AnimatedWorkSection";

gsap.registerPlugin(ScrollTrigger);

const Myworks = () => {
  return (
    <section id="projects" className="min-h-screen bg-black text-white pt-10">
      <AnimatedHeaderSection
        subTitle={"the magic i created"}
        title={"PROJECT"}
        text={" "}
        textColor={"text-white"}
      />

      <AnimatedWorkSection />
    </section>
  );
};

export default Myworks;
