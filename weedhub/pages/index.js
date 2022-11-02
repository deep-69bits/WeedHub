import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HEAD from "../components/HEAD";
import { Animatedtext } from "../components/Animatedtext";
import { motion } from "framer-motion";

export default function Home() {
  const img =
    "https://media1.giphy.com/media/665bCkVeV6ELu/giphy.gif?cid=ecf05e47fg5hcpgwbalc3plmde5tyby2kwxg1oa2pygd7hgn&rid=giphy.gif&ct=g";
  const styling = {
    backgroundImage: `url('${img}')`,
  };
  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
      className="w-screen h-screen bg-no-repeat bg-cover "
      style={styling}
    >
      <HEAD />
      <div className="text-center w-2/4 m-auto mt-80">
        <Animatedtext text="Welcome to WeedHub " />
        <Animatedtext text="You can buy  and sell all types of weed here ..." />
      </div>
    </motion.div>
  );
}
