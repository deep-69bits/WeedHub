import HEAD from "../../components/HEAD";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rating } from "../../components/Rating";

const weed = () => {
  const img =
    "https://media3.giphy.com/media/3o8dFDfk3hEnnWhxiE/giphy.gif?cid=ecf05e47fh4eqcf5i17c23zo6iaug16xyhxqhsr60dqry78u&amp;rid=giphy.gif&amp;ct=g";
  const styling = {
    backgroundImage: `url('${img}')`,
  };

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 2 },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };
  const animationConfiguration = {  
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      className="w-screen h-screen bg-no-repeat bg-cover bg-black"
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between  ">
        <div>
          <motion.img
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-full"
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/9-point-cannabis-leaf-black-background-luke-moore.jpg"
            alt=""
          />
        </div>
        <motion.div
          className="text-white  w-2/3 text-center h-1/2  mt-60"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="font-black text-2xl m-10">Purple Kush</h1>
          <span>
            <Rating />
          </span>
          <div className=" m-auto mt-14 w-2/5">
            <div className="text-white flex  justify-between">
              <span className="text">NAME</span>
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
              <span>PRICE</span>
              <span>$10</span>
            </div>
          </div>
          <button class="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white"> BUY</button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default weed;
