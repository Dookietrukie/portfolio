import React from "react";
import { FiPlay, FiCode } from 'react-icons/fi';
import PetHubScreen from '../assets/mainScreenshot.png';
import BytesDungeonsScreen from '../assets/bytesDungeons.png';

function Projects() {

    const projects = [
        {
            title: 'PetHub',
            description: "PetHub is a web app that allows it's users to register pets just to display them, or to put them for adoption, in adoption bundles. In this project I worked alongside a mate both in the frontend and in the backend.",
            imageUrl: PetHubScreen,
            liveUrl: 'https://pethubpet.netlify.app/',
            sourceUrl: 'https://github.com/PetHub-MERN/pethub-client/tree/main'
        },
        {
            title: 'Bytes & Dungeons',
            description: "Bytes & Dungeons is a web app that allows it's users to create, view, edit and delete fantasy characters. It also allows the users to play with their characters against other players in a real-time 1v1 'Rock, Paper, Scissors' kind of match",
            imageUrl: BytesDungeonsScreen,
            liveUrl: 'https://bytes-and-dungeons.adaptable.app/',
            sourceUrl: 'https://github.com/bytes-and-dungeons/bytes-and-dungeons'
        }, 
        //Here you can add more projects.
    ];

    return (
        <section className="py-8">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:grid-cols-1">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white p-4 shadow-md rounded-md flex flex-col justify-between"
                  style={{ marginBottom: '1rem' }}
                >
                  <div className="mb-4">
                    {/* Set a fixed height for the image container */}
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-96"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                  </div>
                  <div className="flex justify-center md:justify-start">
                    {/* Live Demo Button */}
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <button className="bg-blue-600 text-white font-bold px-4 py-2 rounded flex items-center mr-2">
                        <FiPlay className="mr-2" />
                        Live Demo
                      </button>
                    </a>
                    {/* Source Code Button */}
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <button className="bg-gray-700 text-white font-bold px-4 py-2 rounded flex items-center">
                        <FiCode className="mr-2" />
                        Source Code
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }

export default Projects;