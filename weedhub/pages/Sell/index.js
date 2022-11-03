import React from "react";
import { Animatedtext } from "../../components/Animatedtext";
import HEAD from "../../components/HEAD";
import { useState, useEffect } from "react";
import axios from "axios";
import { ethers } from "ethers";
import { motion } from "framer-motion";

const index = () => {
  const img = "https://media.tenor.com/q7UwhQ7Z0qoAAAAC/smoke.gif";
  const styling = {
    backgroundImage: `url('${img}')`,
  };
  var acc;
  const [user, setUser] = useState({
    Name: "",
    Price: "",
    Location: "",
    Type: "",
    Quality: "",
    SellerAddress: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      async function run() {
        const provider = new ethers.providers.Web3Provider(window.ethereum); //http endpoint for metamask
        const signer = provider.getSigner();
        acc = await signer.getAddress();
        console.log(acc);
        setUser({
          ...user,
          SellerAddress: acc,
        });
      }
      run();
    }
  }, []);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });

    setLoading(!loading);
  };

  const register = async () => {
    // setLoading(!loading);
    console.log(user);
    const { Name, Price, Location, Type, Quality, SellerAddress } = user;

    if (Name && Price && Location && Type && Quality && SellerAddress) {
      try {
        axios
          .post("http://localhost:9000/register", user, {
            headers: { "Content-Type": "application/json" },
          })
          .then((res) => {
            alert(res.data.message);
          });
      } catch (error) {
        console.error(error.response.data);
      }
    } else {
      alert("invlid input");
    }
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
    >
      <HEAD />
      <div className="mt-20">
        <Animatedtext className="" text="Sell your weed here" />
      </div>
      <div className="w-1/5 mt-10 m-auto">
        <div className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-100">Name </span>
            <input
              value={user.Name}
              name="Name"
              onChange={handleChange}
              type="text"
              className="mt-1 block w-full"
              placeholder="Anshu"
            />
          </label>
          <label className="block">
            <span className="text-gray-100">Price</span>
            <input
              value={user.Price}
              name="Price"
              onChange={handleChange}
              type="number"
              className="mt-1 block w-full"
              placeholder="$10"
            />
          </label>
          <label className="block">
            <span className="text-gray-100">Location</span>
            <input
              value={user.Location}
              name="Location"
              onChange={handleChange}
              type="text"
              className="mt-1 block w-full"
              placeholder="IIIT LUCKNOW"
            />
          </label>
          <label className="block">
            <span className="text-gray-100">Type</span>
            <input
              value={user.Tyep}
              name="Type"
              onChange={handleChange}
              type="text"
              className="mt-1 block w-full"
              placeholder="PURPLE KUSH"
            />
          </label>
          <label className="block">
            <span className="text-gray-100">Quality</span>
            <input
              value={user.Quality}
              name="Quality"
              onChange={handleChange}
              type="text"
              className="mt-1 block w-full"
              placeholder="Good"
            />
          </label>

          <div className="block">
            <button
              onClick={register}
              className="block  mx-auto text-white font-light border rounded-lg px-4 py-2 hover:border-blue-800 hover:text-blue-800"
            >
              Sell
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default index;
