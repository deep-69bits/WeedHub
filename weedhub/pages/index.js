import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HEAD from "../components/HEAD";
import { Animatedtext } from "../components/Animatedtext";
import { motion } from "framer-motion";
import { ethers } from "ethers";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState("Connect");

  const handleClick = async () => {
    if (typeof window.ethereum !== "undefined") {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected!");
      // connectButton.innerHTML = "Connected";
      setState("Connected");
    } else {
      console.log("No Metamask!");
      // connectButton.innerHTML = "Install Metamask";
      ("Please Install Metamask!!");
      setState("Install Metamask");
    }
  };

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
        <Animatedtext text="You can buy and sell all types of weed here ..." />
      </div>
      {window.ethereum ? (
        <button
          className="block mx-auto text-white font-light border rounded-lg px-4 py-2 hover:border-blue-800 hover:text-blue-800"
          onClick={handleClick}
        >
          {state}
        </button>
      ) : (
        <h1
          text="You need to install metamask"
          className="text-blue-800 text-center"
        >
          You need to install <span className="text-orange-700">Metamask</span>{" "}
          !!!!
        </h1>
      )}
    </motion.div>
  );
}
