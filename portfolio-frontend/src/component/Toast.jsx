import { useEffect, useRef } from "react";
import gsap from "gsap";

const Toast = ({ message, type = "success", onClose }) => {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { y: "-100%", opacity: 0, scale: 0.95 },
      { y: "0%", opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" }
    );

    const timeout = setTimeout(() => {
      gsap.to(ref.current, {
        y: "-100%",
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        ease: "power2.in",
        onComplete: onClose,
      });
    }, 3500);

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div
      ref={ref}
      className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-full shadow-xl border border-white/20 backdrop-blur-md bg-black/30 text-gold flex items-center gap-4 transition-all duration-300 ${
        type === "error" ? "border-red-400 bg-red-400/10" : "border-green-400 bg-green-400/10"
      }`}
    >
      <span className="text-sm sm:text-base font-medium tracking-wide">{message}</span>
    </div>
  );
};

export default Toast;