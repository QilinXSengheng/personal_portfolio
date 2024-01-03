import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2,about } from "../assets";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-12 my-12" // Added overflow-x-hidden
    >
      <div className="w-full flex items-center justify-center py-19 mt-10">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            About Me
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full flex items-center justify-center px-8">
          <div className="w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative">
            <img
              src={about}
              className="w-full rounded-md h-auto object-contain"
              alt=""
            />
            <div
              className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-r from-primary to-secondary 
            rounded-md blur-[5px] -z-10"
            ></div>
          </div>
        </div>
        <div className="w-full px-8 flex flex-col gap-4 justify-start items-start">
          <p className="text-texlight text-base tracking-wide text-justify">
            I'm a third-year student majoring in Computer Science at the CADT,
            specializing in Software Engineering.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
            Hi there, My name is Measheanh Sengheng. I am a junior mobile app
            developer. I can provide clean code and pixel perfect design. I also
            make the mobile app more & more interactive with web animations. A
            responsive design makes your app accessible to all users,regardless
            of their device. You can contact me whenever you need help, i will
            try my best to deal with your problem as much as possible.
          </p>
          
          <a
            href="/SenghengMeasheanh_CV.pdf"
            download={true}
            style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)"}}
            className="mt-10 border border-[rgba(255,255,255,0.3)] rounded-xl px-8 py-3 active:95 
          group hover:border-primary"
          >
            <p
              className="text-texlight group-hover:text-transparent 
            group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary"
            >
              Download My CV
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
