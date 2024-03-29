import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Alert = ({status, message}) => {
  const statusConfig ={
    success:{
      bgColor: "bg-primary",
      borderColor: "border-primary",
      textColor: "text-primary",
    },
    warning:{
      bgColor: "bg-yellow-400",
      borderColor: "border-yellow-400",
      textColor: "text-yellow-400",
    },
    error:{
      bgColor: "bg-red-500",
      borderColor: "border-red-500",
      textColor: "text-red-500",
    },
  }

  const config = statusConfig[status];
  return <motion.div
  initial={{opacity: 0, x: 50}}
  animate={{opacity: 1, x: 0}}
  exit={{opacity: 0, x: 50}}
  className={`fixed top-12 right-12 px-3 py-3  rounded-md border ${config.borderColor} w-auto 
  overflow-hidden backdrop-blur-md`}
  >
    <p className={`${config.textColor}`}>{message}</p>
    <div className="absolute inset-x-0 h-1 bottom-0 bg-[rgb(255,255,255,0.5)]">
    <motion.div 
    className={`${config.bgColor} h-full`}
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{duration: 4, delay: 0.5}}
    exit={{ width: 0 }}
    >

    </motion.div>
    </div>
  </motion.div>;
};

export default Alert;
