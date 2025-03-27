import React from "react";
import Img1 from '../../assets/Cheak app.jpeg';
import Img2 from '../../assets/Ajheryuk.jpeg';
import Img3 from '../../assets/Kaillma app.jpeg';
import Img4 from '../../assets/Depressin apo.jpeg';
import Img5 from '../../assets/Tour ap.jpeg';
import Img6 from '../../assets/V-Blog.jpeg';
import Img7 from '../../assets/E-Book.jpeg';
import Img8 from '../../assets/Wallet.jpeg';

const projects = [
  { title: "Cheak App", image: Img1, demoLink: "https://drive.google.com/drive/u/0/folders/1ofM0Kz_x7MF_u08BoioTIUyP_wybb--k ", githubLink: "#" },
  { title: "Ajheryuk", image: Img2, demoLink: "https://drive.google.com/drive/u/0/folders/1mesxsdc-L2zoNEzIWWQIAsTbZ8gv77pl  ", githubLink: "#" },
  { title: "Kaillma App", image: Img3, demoLink: "https://drive.google.com/drive/u/0/folders/148DjXYYXarc2zhP8-m31wilZ7K18NghG  ", githubLink: "#" },
  { title: "Depression App", image: Img4, demoLink: "https://drive.google.com/drive/u/0/folders/1dWPbZeYle0qDYyvL3JjzVLWowkXi1Y5U  ", githubLink: "#" },
  { title: "Tour App", image: Img5, demoLink: "https://drive.google.com/drive/folders/1Tom5bTu_LDK_ElJ8md0roSNCjKUHemPn  ", githubLink: "#" },
  { title: "V-Blog", image: Img6, demoLink: "https://drive.google.com/drive/folders/1hunh5rS38X-A1pOXBScyVkOAeILi89mt  ", githubLink: "#" },
  { title: "E-Book", image: Img7, demoLink: "https://drive.google.com/drive/folders/1-zsN-HRV4sP4cfSvotOhJJt9MBJ-Sedi ", githubLink: "#" },
  { title: "Wallet", image: Img8, demoLink: "https://drive.google.com/drive/folders/10QCfAD5sg-CGZvHFz7DdthSlJy5HjJQg", githubLink: "#" },
];

const Work = () => {
  return (
    <div className="bg-white text-gray-500 py-12 px-6 flex flex-col items-center">
      <div className="text-center max-w-4xl mb-12">
        <p className="text-lg font-medium text-gray-500">My Recent Work</p>
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mt-2">
          Portfolio
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl w-full">
        {projects.map((project, index) => (
          <div key={index} className="bg-blue-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
            {/* Project Image */}
            <div className="h-48 flex items-center justify-center overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <div className="p-6">
              {/* Project Title */}
              <h3 className="text-xl font-bold mb-6 text-white text-center">{project.title}</h3>
              
              {/* Buttons */}
              <div className="flex gap-4">
                <button 
                  onClick={() => window.open(project.demoLink, '_blank')}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Demo
                </button>
                <button 
                  onClick={() => window.open(project.githubLink, '_blank')}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Github
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;