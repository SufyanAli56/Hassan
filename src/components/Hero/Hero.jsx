import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion"; // Import Framer Motion
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Img from "../../assets/Sufyan.png";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["React Native Developer", "Frontend Engineer", "JavaScript Enthusiast"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="relative h-screen w-full bg-white  flex flex-col justify-center items-center text-gray-500 text-center px-4 overflow-hidden">
      {/* Left Side - Social Icons with Line */}
      <div className="absolute left-4 md:left-8 lg:left-90 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 text-2xl">
        <div className="absolute left-1/2 h-20 top-40 w-0.5 bg-blue-500 opacity-50 -translate-x-1/2"></div>
        <a href="#" className="text-gray-500 hover:text-gray-300 transition duration-300">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/hassan-ali-7b2a05301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-500 hover:text-gray-300 transition duration-300">
          <FaLinkedin />
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-300 transition duration-300">
          <FaTwitter />
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-300 transition duration-300">
          <FaInstagram />
        </a>
      </div>

      {/* Right Side - Scrolling Down Text */}
      <motion.div 
        className="absolute right-4 md:right-8 lg:right-80 bottom-20 text-gray-500 rotate-90 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      >
        Scrolling Down
      </motion.div>

      <motion.p 
        className="text-lg md:text-xl font-light mt-24"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Hello, I am
      </motion.p>

      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mt-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Hassan Ali
      </motion.h1>

      {/* Animated Text */}
      <p className="text-lg md:text-xl font-medium mt-2 text-gray-300">
        <span ref={typedRef} className="text-yellow-400 font-bold"></span>
      </p>

      {/* Buttons Section with Motion Effects */}
      <div className="mt-6 flex space-x-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-white text-blue-900 cursor-pointer font-semibold text-lg rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Let's Talk
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-3 bg-blue-600 text-white cursor-pointer font-semibold text-lg rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          My Work
        </motion.button>
      </div>

      {/* Profile Image with Motion Animation */}
      <motion.div 
        className="mt-8 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <img 
          src={Img} 
          alt="Profile" 
          className="w-48 h-48 md:w-64 md:h-64 lg:w-90 lg:h-110 rounded-t-full rounded-b-none object-cover border-4 border-white shadow-lg" 
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white"></div>
      </motion.div>
    </div>
  );
};

export default Hero;