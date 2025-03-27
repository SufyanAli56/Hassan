import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Home } from "lucide-react";
import { FaRegUser, FaBook, FaLaptopCode } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";

const navItems = [
  { id: "home", icon: Home, tooltip: "Home" },
  { id: "about", icon: FaRegUser, tooltip: "About" },
  { id: "experience", icon: FaBook, tooltip: "Experience" },
  { id: "services", icon: FaLaptopCode, tooltip: "Services" },
  { id: "contact", icon: MdMessage, tooltip: "Contact" },
];

const Navbar = () => {
  return (
    <header className="fixed top-140 left-1/2 transform -translate-x-1/2 z-50">
      <motion.nav
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-lg bg-gradient-to-r from-white  shadow-lg border border-white/30 px-6 py-3 rounded-full flex items-center space-x-6 justify-center"
      >
        {navItems.map(({ id, icon: Icon, tooltip }, index) => (
          <Link
            key={index}
            to={id}
            spy={true}
            smooth={true}
            offset={-70} // Adjust offset to align with navbar height
            duration={500} // Scrolling animation duration
            className="p-2 rounded-full bg-white transition hover:bg-blue-300 hover:shadow-lg cursor-pointer"
          >
            <motion.div whileHover={{ scale: 1.2 }} title={tooltip}>
              <Icon size={24} className="text-blue-800" />
            </motion.div>
          </Link>
        ))}
      </motion.nav>
    </header>
  );
};

export default Navbar;
