import React from "react";
import { motion } from "framer-motion";

export const Animatedtext = (props) => {
  const x = props.text;
  const words = x.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div 
    className=" text-center justify-center "
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" ,marginLeft: "10px"}}
      variants={container}
      initial="hidden"
      animate="visible" 
    >
      {words.map((word, index) => (
        
        <motion.span
        variants={child}
        style={{ marginRight: "10px" }}
        className="text-white text-center "
        key={index}
        >
        {word}
        </motion.span>
        
      ))}
    </motion.div>
  );
};
