import React from "react";
import { FiDownload } from 'react-icons/fi';
import { IoFlashOutline, IoPhonePortraitOutline, IoStarOutline, IoShieldOutline, IoTrendingUpOutline, IoPeopleOutline } from 'react-icons/io5'; 
import TechnologiesTypewriter from "./TechnologiesTypewriter";

function About() {

  const handleDownload = () => {
    // Replace 'YOUR_PDF_URL' with the actual URL of your PDF file
    const pdfUrl = 'https://drive.google.com/uc?export=download&id=1u-aSvoB1zEB3XSgD7GxzJBl_2wNbfHan';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'CVCristianPalao.pdf';
    link.click();
  };

  return (
    <section id="about-section" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center justify-center">
          {/* About Me */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
            <p className="text-lg text-gray-700 text-center">
            Hey there! I'm Cris, a passionate Full Stack Web Developer. I believe in creating <strong>user-friendly and innovative web applications</strong> that make a positive impact on people's lives.
            </p>
            {/* The button to download your curriculum (You can add the download functionality later) */}
            <div className="mt-6 flex justify-center">
              <button className="custom-button" onClick={handleDownload}>
                <span>Download Curriculum</span>
                <FiDownload className="download-icon" size={20} />
              </button>
            </div>
          </div>

          {/* Key Points about My Code */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-6">My code is...</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col items-center justify-center md:justify-start">
                <IoFlashOutline className="text-blue-600 text-4xl mb-4" />
                <p className="text-lg text-center">
                  <strong>Fast:<br /></strong> I build blazing-fast web experiences for you.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center md:justify-start">
                <IoPhonePortraitOutline className="text-blue-600 text-4xl mb-4" />
                <p className="text-lg text-center">
                  <strong>Responsive:<br /></strong> My designs fit perfectly on any device.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center md:justify-start">
                <IoStarOutline className="text-blue-600 text-4xl mb-4" />
                <p className="text-lg text-center">
                  <strong>Elegant:<br /></strong> I strive for elegance in my code and design.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center md:justify-start">
                <IoShieldOutline className="text-blue-600 text-4xl mb-4" />
                <p className="text-lg text-center">
                  <strong>Secure:<br /></strong> Your safety is my top priority.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center md:justify-start">
                <IoTrendingUpOutline className="text-blue-600 text-4xl mb-4" />
                <p className="text-lg text-center">
                  <strong>Scalable:<br /></strong> My projects grow with your needs.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center md:justify-start">
                <IoPeopleOutline className="text-blue-600 text-4xl mb-4" />
                <p className="text-lg text-center">
                  <strong>Accessible:<br /></strong> Inclusivity matters - my apps are for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge in Different Technologies */}
        <div className="mt-12 text-center">
          <h3 className="text-3xl font-bold mb-6">
          What I know about different&nbsp;
          <span>
            <TechnologiesTypewriter />
          </span>
          </h3>
          <p className="text-lg text-gray-700">
            {/* Your text about your knowledge in different technologies */}
          </p>
          {/* The bars representing your knowledge */}
          <div className="grid grid-cols-2 gap-4">
            {/* JavaScript Knowledge */}
            <div>
              <p className="text-lg font-bold mb-2">JavaScript</p>
              <div className="bg-gray-300 rounded-lg h-6 relative">
                <div className="bg-blue-600 rounded-lg h-6" style={{ width: '90%' }}></div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                  90%
                </span>
              </div>
            </div>
            {/* React Knowledge */}
            <div>
              <p className="text-lg font-bold mb-2">React</p>
              <div className="bg-gray-300 rounded-lg h-6 relative">
                <div className="bg-blue-600 rounded-lg h-6" style={{ width: '90%' }}></div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                  90%
                </span>
              </div>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">Node.js</p>
              <div className="bg-gray-300 rounded-lg h-6 relative">
                <div className="bg-blue-600 rounded-lg h-6" style={{ width: '85%' }}></div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                  85%
                </span>
              </div>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">MongoDB</p>
              <div className="bg-gray-300 rounded-lg h-6 relative">
                <div className="bg-blue-600 rounded-lg h-6" style={{ width: '90%' }}></div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                  90%
                </span>
              </div>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">Express</p>
              <div className="bg-gray-300 rounded-lg h-6 relative">
                <div className="bg-blue-600 rounded-lg h-6" style={{ width: '70%' }}></div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                  70%
                </span>
              </div>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">Java</p>
              <div className="bg-gray-300 rounded-lg h-6 relative">
                <div className="bg-blue-600 rounded-lg h-6" style={{ width: '65%' }}></div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                  65%
                </span>
              </div>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">HTML</p>
              <div className="bg-gray-300 rounded-lg h-6 relative">
                <div className="bg-blue-600 rounded-lg h-6" style={{ width: '95%' }}></div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                  95%
                </span>
              </div>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">CSS</p>
              <div className="bg-gray-300 rounded-lg h-6 relative">
                <div className="bg-blue-600 rounded-lg h-6" style={{ width: '95%' }}></div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                  95%
                </span>
              </div>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">Bootstrap, Tailwind CSS, Material UI</p>
              <div className="bg-gray-300 rounded-lg h-6 relative">
                <div className="bg-blue-600 rounded-lg h-6" style={{ width: '80%' }}></div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                  80%
                </span>
              </div>
            </div>
            <div>
              <p className="text-lg font-bold mb-2">Excel</p>
              <div className="bg-gray-300 rounded-lg h-6 relative">
                <div className="bg-blue-600 rounded-lg h-6" style={{ width: '80%' }}></div>
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold">
                  80%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;