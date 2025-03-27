import React from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaMedal } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import Img2 from "../../assets/Hassan.jpeg";

const About = () => {
  return (
    <div className="relative overflow-hidden min-h-screen w-full bg-white flex flex-col items-center justify-start px-4 py-12">
      
      {/* Heading Section - Moved to the Top */}
      <div className="text-center max-w-4xl mt-4 mb-12">
        <p className="text-lg font-medium text-gray-500">Get To Know</p>
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mt-2">
          About Me
        </h2>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4">
        
        {/* Left Side - Profile Image with Zoom Effect */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden rounded-lg shadow-2xl cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={Img2}
              alt="Hassan"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        {/* Right Side - About Text */}
        <motion.div
          className="text-white text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: <FaMedal />, title: "Experience", text: "1.5 Years" },
              { icon: <IoPeople />, title: "Clients", text: "10+ Worldwide" },
              { icon: <FaProjectDiagram />, title: "Projects", text: "20+ Completed" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-blue-900 cursor-pointer rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-2xl text-blue-400 mb-4">{item.icon}</div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-lg md:text-xl text-gray-500 font-extralight mb-6">
            I specialize in <span className="font-semibold text-blue-400">React Native</span>,
            building cross-platform mobile applications that are performant and user-friendly.
            My expertise includes state management, API integration, and creating reusable components
            for scalable applications.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Download CV
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
