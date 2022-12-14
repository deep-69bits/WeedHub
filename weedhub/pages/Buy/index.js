import React, { useState, useEffect, use } from "react";
import { motion } from "framer-motion";
import HEAD from "../../components/HEAD";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import Link from "next/link";
import axios from "axios";
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
  
  const [arr,setArr]=useState([])

  const [loading, setLoading] = useState(false);
  
 

  useEffect(() => {
    axios.get(`http://localhost:9000/`).then((res)=>{
      setArr([...res.data]);
      setLoading(!loading);
    }
    )
   
  }, []);
  console.log(arr);

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
      
        return (
          
          <motion.div  className="w-2/3 variants={stagger} m-auto flex">
          {

            arr.map((items)=>{
             return(

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
                  <span>{items.Name}</span>
                  </div>
                  <div className="text-white flex justify-between">
                  <span>LOCATION</span>
                  <span>{items.Location}</span>
                  </div>
                  <div className="text-white flex justify-between">
                  <span>QUALITY</span>
                  <span>{items.Quality}</span>
                </div>
                <div className="text-white flex justify-between">
                <span>TYPE</span>
                <span>{items.Type}</span>
                </div>
                
                </div>
                <button
                type="button"
                className="block mt-5 mx-auto text-white font-light border rounded-lg px-4 py-2 hover:border-blue-800 hover:text-blue-800"
                >
                <Link href={`/Buy/${items.SellerAddress}`}>BUY</Link>
                </button>
                </motion.div>
                ) 
              })}
                </motion.div>
        );
      
    </motion.div>
  );
};

export default index;
