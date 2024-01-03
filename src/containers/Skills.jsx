import React from "react";
import { motion ,AnimatePresence} from "framer-motion";
import SkillCard from "../components/SkillCard";
import { Leaf1, Leaf2} from "../assets";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-12 my-40 overflow-x-hidden" // Added overflow-x-hidden
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
           Skills
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full px-8 flex flex-col gap-4 justify-start items-start">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
           My Skills & Work Experience 
          </p>
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
          <p className="text-texlight text-base tracking-wide text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            et provident earum dolore id vero? Error maxime tempora velit quas!
            Itaque, labore deleniti hic voluptas possimus debitis tempore rerum
            culpa!
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 items-center justify-center px-8">
          <SkillCard skill={"Flutter and Dart"} percentage={"80%"} color={"#57c5ed"} move={true} />
          <SkillCard skill={"React JS"} percentage={"65%"} color={"#61dafb"} />
          <SkillCard skill={"Laravel PHP"} percentage={"65%"} color={"#ff291a"} move={true}/>
          <SkillCard skill={"TailwindCSS"} percentage={"70%"} color={"#1dc0cd"} />
          <SkillCard skill={"JavaScript"} percentage={"65%"} color={"#00ff69"}  move={true}/>
        </div>
      </div>
    </section>
  );;
};

export default Skills;
