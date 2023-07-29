import React from "react";

function Projects() {

    const projects = [
        {
            title: 'Project 1',
            description: 'Project 1 Lorem Ipsum',
            imageUrl: 'https://via.placeholder.com/300',
            liveUrl: '#',
            sourceUrl: '#'
        },
        {
            title: 'Project 2',
            description: 'Project 2 Lorem Ipsum',
            imageUrl: 'https://via.placeholder.com/300',
            liveUrl: '#',
            sourceUrl: '#'
        }, 
        //Here you can add more projects.
    ];

    return(

        <section className="py-8">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white p-4 shadow-md">
                            <img src={project.imageUrl} alt={project.title} className="mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <div>
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mr-2">
                                    Live Demo!
                                </a>
                                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                                    Source Code
                                </a>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </section>

    )

}

export default Projects;