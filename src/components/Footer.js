import React from 'react';
import { FiLinkedin, FiInstagram, FiGithub, FiArrowUp    } from 'react-icons/fi';

function Footer() {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };

    return (
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-8">
        <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center mb-4">
          <button
            onClick={handleScrollToTop}
            className="text-white text-4xl focus:outline-none"
          >
            <FiArrowUp />
          </button>
        </div>
        <div className='flex justify-center mb-5'>
          <a href="https://www.linkedin.com/in/cristian-pc/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin className="text-4xl mx-4" />
          </a>
          <a href="https://www.instagram.com/crisiiiwis/" target="_blank" rel="noopener noreferrer">
            <FiInstagram className="text-4xl mx-4" />
          </a>
          <a href="https://github.com/Dookietrukie" target="_blank" rel="noopener noreferrer">
            <FiGithub className="text-4xl mx-4" />
          </a>
        </div>
        </div>
        <p className="text-center text-xs opacity-70">
          <span className="text-blue-300">CRISTIAN PALAO</span> ©2023
        </p>
      </footer>
    );
  }
  
  export default Footer;    