import React from 'react';
import { FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

function Footer() {
    return (
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-8">
        <div className="container mx-auto flex justify-center mb-4">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin className="text-4xl mx-4" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FiInstagram className="text-4xl mx-4" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FiGithub className="text-4xl mx-4" />
          </a>
        </div>
        <p className="text-center text-xs opacity-70">
          <span className="text-blue-300">CRISTIAN PALAO</span> ©2023
        </p>
      </footer>
    );
  }
  
  export default Footer;    