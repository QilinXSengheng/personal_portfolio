import React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub } from 'react-icons/fa6'

const ProjectCard = ({project}) => {
   const [isHoverred, setIsHoverred] = useState(false)
  return (
    <motion.div 
    key={project.id}
    className='overflow-hidden cursor-pointer relative rounded-md'
    onMouseEnter={() => setIsHoverred(true)}
    onMouseLeave={() => setIsHoverred(false)}
    >
        <motion.img 
        whileHover={{scale: 1.1}}
        src={project.imgSrc} 
        className="w-full h-full object-contain rounded-lg"/>
        {isHoverred && (
            <motion.div className='absolute inset-0 backdrop-blur-md bg-[rgba(0,0,0,0.6)] flex items-center justify-center flex-col gap-2'>
            <p className='text-xl text-primary'>{project?.name}</p>
            <a href={project?.gitURL}>
                <FaGithub className='text-3xl text-white hover:text-primary'/>
            </a>
        </motion.div>
        )}
    </motion.div>
  )
}

export default ProjectCard