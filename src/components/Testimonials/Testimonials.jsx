import React, { useState } from 'react';
import Testnomial1 from '../../assets/Olia.jpg';
import Testnomial2 from '../../assets/Ibrahim.jpeg';
import Testnomial3 from '../../assets/json.jpg';
import Testnomial4 from '../../assets/Aisha.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Olia Harper',
    image: Testnomial1,
    review: 'Working with this team was an absolute pleasure. They delivered high-quality work on time and exceeded my expectations!',
  },
  {
    id: 2,
    name: 'Ibrahim Bellow',
    image: Testnomial2,
    review: 'The developer was very professional and responsive. I highly recommend their services for anyone looking for top-notch work.',
  },
  {
    id: 3,
    name: 'Json Miler',
    image: Testnomial3,
    review: 'Amazing experience! The app they built for me is flawless and has significantly improved my business operations.',
  },
  {
    id: 4,
    name: 'Aisha Bello',
    image: Testnomial4,
    review: 'I am extremely satisfied with the results. The team was very collaborative and understood my requirements perfectly.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-white text-white py-12 px-6 flex flex-col items-center">
      <div className="text-center max-w-4xl mb-8">
        <p className="text-lg font-medium text-gray-500">Review From Clients</p>
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mt-2">
          Testimonials
        </h2>
      </div>

      <div className="flex items-center justify-center w-full max-w-4xl relative">
        {/* Testimonial Card */}
        <div className="bg-blue-900 rounded-lg shadow-lg p-8 w-[600px] mx-4 hover:shadow-blue-500/50 transition-all duration-300">
          <div className="flex flex-col items-center text-center">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-400"
            />
            <h3 className="text-2xl font-bold text-white">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-gray-300 mt-4 text-lg">
              {testimonials[currentIndex].review}
            </p>
          </div>
        </div>
      </div>

      {/* Dots for Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-400' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;