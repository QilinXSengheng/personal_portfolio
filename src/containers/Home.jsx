import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Hero } from "../assets";
import { HeroTypeWritter, HomeSocialLinks } from "../components";
import { Socials } from "../utils/helper";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center gap-8 relative h-screen overflow-x-hidden" // Added overflow-x-hidden
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full h-auto overflow-x-hidden">
        {" "}
        {/* Set height to auto and added overflow-x-hidden */}
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-4">
          <h2 className="text-2xl lg:text-4xl text-texlight text-center lg:text-left">
            Hello It's me{" "}
            <span className="block tracking-wider text-3xl lg:text-4xl mt-4 text-white">
              Measheanh Sengheng
            </span>
          </h2>
          <h2 className="text-xl lg:text-2xl text-texlight mt-4">
            And I'm{" "}
            <HeroTypeWritter
              speed={100}
              words={["a Mobile Developer", " a UX/UI designer"]}
            />
          </h2>
          <p className="text-base text-texlight mt-6 text-center lg:text-left">
            The bravest moments of our lives are moments when we are at our
            lowest point. Because it's only in those moments, We have nothing to
            lose. And everything to gain. This is when we are truly alive.
          </p>

          <div className="flex items-center justify-center gap-16 mt-10">
            <AnimatePresence>
              {Socials &&
                Socials.map((item, index) => (
                  <HomeSocialLinks key={index} data={item} index={index} />
                ))}
            </AnimatePresence>
          </div>
          <a
            href="#"
            style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)"}}
            className="mt-10 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 
          group hover:border-primary"
          >
            <p
              className="text-texlight group-hover:text-transparent 
            group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary"
            >
              Hired me
            </p>
          </a>
        </div>
        <div className="w-full h-full flex justify-center items-start lg:items-center">
          <motion.img
            initial={{ y: 0 }}
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            src={Hero}
            className="w-4/5 h-auto max-w-md object-contain max-h-full" // Set max-height to 100% of the parent container
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
