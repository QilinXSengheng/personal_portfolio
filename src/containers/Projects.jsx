import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf1, Leaf2, about } from "../assets";
import { ProjectsData } from "../utils/helper";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-12 my-12" // Added overflow-x-hidden
    >
      <div className="w-full flex items-center justify-center py-19 mt-10">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center w-52 ml-20"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Projects
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full ">
          <AnimatePresence>
            {ProjectsData && ProjectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project}/>
            ))}
          </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
