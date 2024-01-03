import React from "react";
import { About, Contact, Header, Home, ParticlesContainer, Projects, ServiceCount, Skills } from "./";
import { AnimatePresence,motion } from "framer-motion";
import { HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";

const App = () => {
  return (
    <div className="w-full py-20 px-4 lg:px-12 pr-4 lg:pr-32">
      {/* header */}
      <ParticlesContainer/>
      <Header />
      <Home />
      <ServiceCount />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div className="w-full flex flex-col items-center justify-start mt-32 mb-12">
        <p className="text-2xl tracking-wider text-texlight text-center">Measheanh Sengheng</p>
      <div className="flex items-center justify-center gap-16 mt-16">
      <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks key={index} data={item} index={index} />
                ))}
        </AnimatePresence>
      </div>
      <div>
      <p className="text-[9px] px-10 lg:text-md tracking-wider text-texlight text-center mt-16">© 2024 Sengheng Measheanh, All rights reserved.</p>
      </div>
      <div className="w-full flex flex-col mt-10 items-center justify-center gap-3">
          <p className="text-texlight text-center">senghengmeasheanh@gmail.com</p>
          <p className="text-texlight text-center">+85512543141</p>
          <p className="text-primary text-center">Hire Me</p>
      </div>
      </div>
    </div>
  );
};

export default App;
