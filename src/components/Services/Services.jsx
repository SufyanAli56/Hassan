import React, { useRef } from 'react';
import { FaCheck } from 'react-icons/fa';
import { LuBadgeCheck } from 'react-icons/lu';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const services = [
  {
    title: 'React Native ',
    points: [
      'Building cross-platform mobile apps for iOS and Android.',
      'High-performance and responsive user interfaces.',
      'Integration with native modules for advanced functionality.',
      'Custom animations and transitions for better UX.',
      'Code reusability for faster development cycles.',
    ],
  },
  {
    title: 'State Management',
    points: [
      'Managing app state using Redux or Context API.',
      'Efficient data flow and state updates.',
      'Handling complex state logic with ease.',
      'Debugging and optimizing state management.',
      'Ensuring scalability for large applications.',
    ],
  },
  {
    title: 'API Integration',
    points: [
      'Connecting apps with RESTful APIs and GraphQL.',
      'Handling authentication and authorization.',
      'Optimizing API calls for faster performance.',
      'Error handling and data validation.',
      'Real-time data synchronization.',
    ],
  },
];

const ServiceCard = ({ title, points }) => {
  const iconRef = useRef(null);
  const badgeRefs = useRef([]);

  // GSAP Rotation Animation for FaCheck icon
  const handleMouseEnter = () => {
    gsap.to(iconRef.current, {
      rotation: 360,
      duration: 0.5,
      repeat: -1,
      ease: 'linear',
    });
  };

  const handleMouseLeave = () => {
    gsap.killTweensOf(iconRef.current);
    gsap.to(iconRef.current, { rotation: 0, duration: 0.5 });
  };

  // GSAP Animation for LuBadgeCheck icon
  const handleBadgeHover = (index) => {
    gsap.to(badgeRefs.current[index], {
      scale: 1.2,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: 'power2.out',
    });
  };

  return (
    <motion.div
      className="p-6 bg-blue-900 rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4">
        <div
          ref={iconRef}
          className="p-2 rounded-full cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaCheck className="text-blue-400 text-xl" />
        </div>
        <h3 className="text-xl font-bold text-white bg-[#4EB5FF] px-4 py-2 rounded-full">
          {title}
        </h3>
      </div>
      <ul className="text-gray-300 mt-4 space-y-2">
        {points.map((point, index) => (
          <li
            key={index}
            className="flex items-start gap-2"
            onMouseEnter={() => handleBadgeHover(index)}
          >
            <span ref={(el) => (badgeRefs.current[index] = el)} className="text-blue-400">
              <LuBadgeCheck />
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="bg-white text-white py-12 px-6 flex flex-col items-center">
      <div className="text-center max-w-4xl mb-8">
        <p className="text-lg font-medium text-gray-500">What I Offer</p>
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mt-2">
          My Services
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} points={service.points} />
        ))}
      </div>
    </div>
  );
};

export default Services;