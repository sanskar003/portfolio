import ReactLenis from "lenis/react";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import ServiceSummary from "./sections/ServiceSummary";
import About from "./sections/About";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";
import Myworks from "./sections/Myworks";

const App = () => {
  return (
    <ReactLenis
      root
      smooth
      className="relative w-full min-h-screen"
      options={{
        duration: 2, // slower scroll
      }}
    >
      <Navbar />
      <Hero />
      <ServiceSummary />
      <About />
      <Myworks />
      <ContactSummary />
      <Contact />
    </ReactLenis>
  );
};

export default App;
