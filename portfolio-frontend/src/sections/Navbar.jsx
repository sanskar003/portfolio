import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";
import Shuffle from "../components/Shuffle"

const Navbar = () => {
  
  const navRef = useRef(null);
  const linksRef = useRef([]);
  const toplineRef = useRef(null);
  const bottomlineRef = useRef(null);
  const tl = useRef(null);
  const iconTl = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showBurger, setShowBurger] = useState(true);

  useGSAP(() => {
    // Initial setup
    gsap.set(navRef.current, { xPercent: 100 });
    gsap.set(linksRef.current, {
      autoAlpha: 0,
      x: -20,
    });

    // 🌙 Floating animation for burger button
    const floatTl = gsap.timeline({ repeat: -1, yoyo: true });

    floatTl
      .to(".floating-burger", {
        x: 10,
        y: -6,
        rotation: 5,
        duration: 3,
        ease: "sine.inOut",
      })
      .to(".floating-burger", {
        x: -10,
        y: 6,
        rotation: -5,
        duration: 3,
        ease: "sine.inOut",
      })
      .to(".floating-burger", {
        x: 5,
        y: -2,
        rotation: 0,
        duration: 3,
        ease: "sine.inOut",
      });

    // 🧭 Nav timeline
    tl.current = gsap
      .timeline({ paused: true })
      .to(navRef.current, {
        xPercent: 1,
        duration: 1,
        ease: "power2.out",
      })
      .to(
        linksRef.current,
        {
          autoAlpha: 1,
          delay: 1,
          x: 0,
          duration: 0.7,
          ease: "back.inOut",
          stagger: 0.1,
        },
        "<"
      );

    // 🍔 Icon transform timeline
    iconTl.current = gsap
      .timeline({ paused: true })
      .to(toplineRef.current, {
        rotate: 45,
        y: 3.3,
        duration: 0.3,
        ease: "power2.inOut",
      })
      .to(
        bottomlineRef.current,
        {
          rotate: -45,
          y: -3.3,
          duration: 0.3,
          ease: "power2.inOut",
        },
        "<"
      );
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isOpen) {
        // If nav is open, always show the icon
        setShowBurger(true);
      } else {
        // Otherwise, show/hide based on scroll direction
        setShowBurger(currentScrollY <= lastScrollY || currentScrollY < 10);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const toggleMenu = () => {
    const origin = "100% 50%"; // centered reveal point

    if (isOpen) {
      // 🧊 Collapse inward to center
      gsap.to(navRef.current, {
        clipPath: `circle(0% at ${origin})`,
        duration: 1.4,
        ease: "circ.inOut",
      });

      tl.current.reverse();
      iconTl.current.reverse();
    } else {
      // 🌌 Clean expansion — no bounce
      gsap.to(navRef.current, {
        clipPath: `circle(120% at ${origin})`,
        duration: 1.6,
        // ease: "stretch.inOut",
        ease: "circ.inOut",
      });

      tl.current.play();
      iconTl.current.play();
    }

    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        style={{ clipPath: "circle(0% at 100% 50%)" }}
        ref={navRef}
        className="fixed origin-top-right z-50 overflow-hidden flex flex-col justify-evenly w-full px-5 sm:px-5 md:px-20 lg:px-20 uppercase bg-gold/40 backdrop-blur-md text-white/80 py-28 gap-y-18 h-[100svh] md:h-auto md:w-1/2 md:left-1/2 lg:h-full"
      >
        <div className="flex flex-col text-5xl gap-y-2 md:text-6xl lg:text-8xl">
          {["home", "about", "projects", "contact"].map((section, index) => (
            <div key={index} ref={(el) => (linksRef.current[index] = el)}>
              <Link
                to={section}
                smooth={true}
                offset={0}
                duration={1000}
                onClick={() => {
                  if (isOpen) toggleMenu();
                }} // only triggers if the nav is actually open
                className=" hover:hollowText cursor-pointer"
              >
                <Shuffle
                  text={section}
                  shuffleDirection="right"
                  duration={1}
                  animationMode="evenodd"
                  shuffleTimes={1}
                  ease="expo.out"
                  stagger={0.03}
                  threshold={0.1}
                  triggerOnce={true}
                  triggerOnHover={true}
                  respectReducedMotion={true}
                />
              </Link>
            </div>
          ))}
        </div>
      </nav>

      <div
        style={{
          backgroundImage: "url(/images/icons/menu-Icon/icons8-planet-96.png)",
          clipPath: showBurger
            ? "circle(50% at 50% 50%)"
            : "circle(0% at 50% 50%)",
        }}
        className="floating-burger fixed top-6 right-12 z-50 flex flex-col items-center justify-center gap-1 transition-all duration-300 cursor-pointer w-14 h-14 md:w-20 md:h-20 bg-no-repeat bg-center bg-cover"
        onClick={toggleMenu}
      >
        <span
          ref={toplineRef}
          className="block w-1/4 h-0.5 md:w-1/3  lg:w-1/2 bg-gold rounded-full origin-center"
        ></span>
        <span
          ref={bottomlineRef}
          className="block w-1/4 h-0.5 md:w-1/3  lg:w-1/2 bg-gold rounded-full origin-center"
        ></span>
      </div>
    </>
  );
};

export default Navbar;
