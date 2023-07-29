import React from "react";

function About() {

    return (
        <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <img
              src="path/to/your/image.jpg"
              alt="Your Name"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg leading-relaxed mb-4">
              Hello! I'm Cris, a passionate Full Stack Web Developer with a strong background in the MERN (MongoDB, Express, React, Node.js) stack. I enjoy turning ideas into reality through clean and efficient code.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              My journey as a developer started a few years ago when I discovered my love for problem-solving and creating user-friendly web applications. Since then, I've been on an exciting learning journey, constantly honing my skills and embracing new technologies.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              When I'm not coding, you can find me exploring the outdoors, attending tech meetups, or diving into a good book. I believe in the power of collaboration and always strive to be a valuable member of any development team I work with.
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href="#contact"
                className="text-white bg-blue-500 py-3 px-8 rounded-lg shadow-lg hover:bg-blue-600 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;