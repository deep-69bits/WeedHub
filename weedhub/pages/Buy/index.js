import React from "react";
import { motion } from "framer-motion";
import HEAD from "../../components/HEAD";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import Link from "next/link";

const index = () => {
  const img =
    "https://media3.giphy.com/media/3o8dFDfk3hEnnWhxiE/giphy.gif?cid=ecf05e47fh4eqcf5i17c23zo6iaug16xyhxqhsr60dqry78u&amp;rid=giphy.gif&amp;ct=g";
  const styling = {
    backgroundImage: `url('${img}')`,
  };
  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const list = [
    {
      title: "Orange",
      price: "$5.50",
    },
  ];
  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 1 },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <motion.div
      className="w-screen h-screen bg-no-repeat bg-cover "
      style={styling}
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <HEAD />
      <motion.div className="w-2/3 variants={stagger} m-auto flex">
        <motion.div
          className="block p-6 rounded-lg shadow-lg bg-black max-w-sm"
          variants={fadeInUp}
          
        >
          <motion.img
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/9-point-cannabis-leaf-black-background-luke-moore.jpg "
            alt=""
          />
          <div className=" flex justify-between ">
            <span className="text-white text-xl leading-tight font-medium mb-2 inline-block">
              WEED
            </span>
            <span className="text-white mr text-xl leading-tight font-medium mb-2 inline-block">
              $10
            </span>
          </div>
          <div className="">
            <div className="text-white flex  justify-between">
              <span>NAME</span>
              <span>ANSHU VERMA</span>
            </div>
            <div className="text-white flex justify-between">
              <span>LOCATION</span>
              <span>IIIT LUCKNOW</span>
            </div>
            <div className="text-white flex justify-between">
              <span>QUALITY</span>
              <span>GOOD</span>
            </div>
            <div className="text-white flex justify-between">
              <span>TYPE</span>
              <span>Purple Kush</span>
            </div>
          </div>
          <button
            type="button"
            className="mt-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            <Link href="/Buy/id">BUY</Link>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default index;
