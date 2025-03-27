import React, { useRef } from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import gsap from 'gsap'; // Import GSAP

const frontendSkills = [
  { skill: 'HTML', level: 'Experienced' },
  { skill: 'CSS', level: 'Experienced' },
  { skill: 'JavaScript', level: 'Experienced' },
  { skill: 'TypeScript', level: 'Intermediate' },
  { skill: 'React.js', level: 'Experienced' },
  { skill: 'Next.js', level: 'Experienced' },
  { skill: 'Tailwind CSS', level: 'Experienced' },
  { skill: 'Figma', level: 'Experienced' },
  { skill: 'Git & GitHub', level: 'Experienced' },
  { skill: 'Context API', level: 'Experienced' },
  { skill: 'Axios', level: 'Experienced' },
  { skill: 'Redux', level: 'Intermediate' },
  { skill: 'React Native', level: 'Intermediate' }, // Added React Native
];

const backendSkills = [
  { skill: 'Node.js', level: 'Experienced' },
  { skill: 'Express.js', level: 'Experienced' },
  { skill: 'RESTful APIs', level: 'Experienced' },
  { skill: 'MongoDB', level: 'Experienced' },
  { skill: 'Firebase', level: 'Experienced' },
  { skill: 'Python', level: 'Basic' },
  { skill: 'Prisma', level: 'Intermediate' },
  { skill: 'Postman', level: 'Proficient' },
  { skill: 'NPM', level: 'Experienced' },
];

const SkillCard = ({ title, skills }) => {
  const iconRefs = useRef([]); // Create an array of refs for each icon

  // GSAP animation for continuous movement on hover
  const handleMouseEnter = (icon) => {
    gsap.to(icon, {
      rotation: 360, // Rotate 360 degrees
      duration: 0.4, // Animation duration
      repeat: -1, // Infinite loop
      ease: 'linear', // Smooth linear rotation
    });
  };

  // Stop animation on mouse leave
  const handleMouseLeave = (icon) => {
    gsap.killTweensOf(icon); // Stop the animation
    gsap.to(icon, {
      rotation: 0, // Reset rotation
      duration: 0.5, // Smooth reset
    });
  };

  return (
    <motion.div 
      className="p-6 bg-blue-900 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-white mb-4 text-center">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <div
              ref={(el) => (iconRefs.current[index] = el)} // Assign ref to each icon
              className="p-2 rounded-full cursor-pointer"
              onMouseEnter={() => handleMouseEnter(iconRefs.current[index])} // Start animation on hover
              onMouseLeave={() => handleMouseLeave(iconRefs.current[index])} // Stop animation on leave
            >
              <FaCheck className="text-blue-400" />
            </div>
            <div>
              <h4 className="text-white font-bold">{item.skill}</h4>
              <p className="text-gray-300 text-sm">{item.level}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="bg-white text-white py-12 px-6 flex flex-col items-center">
      <div className="text-center max-w-4xl mb-8">
        <p className="text-lg font-medium text-gray-500">What Skills I Have</p>
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mt-2">
          My Experience
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        <SkillCard title="Frontend Development" skills={frontendSkills} />
        <SkillCard title="Backend Development" skills={backendSkills} />
      </div>
    </div>
  );
};

export default Experience;