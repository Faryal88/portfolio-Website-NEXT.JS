import Image from "next/image";
import React from "react";

const Project = () => {
  const projectList = [
    {
      title: "Project One",
      description: "Portfolio Website",
      link: "https://github.com/Faryal88/Portfolio-Tailwind-CSS.git",
      image: "/pro1.jpg", 
    },
    {
      title: "Project Two",
      description: "E-Commerce Website",
      link: "https://github.com/Faryal88/E-Commerce-Website.git",
      image: "/pro2.jpg", 
    },
    {
      title: "Project Three",
      description: "Landing page",
      link: "https://github.com/Faryal88/CodeCrafters-Hub-Task-3-Landing-Page.git",
      image: "/pro3.jpg", 
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-[#0e051f] to-[#571b52]">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-stone-50 font-Merienda font-bold mb-8">
          MY PROJECTS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-5 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={project.image} // Dynamically setting the image source
                alt={`${project.title} image`} // Dynamic alt text
                width={800}
                height={500}
                className="rounded-lg mb-4"
                unoptimized={true}
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="px-4 py-2 bg-pink-800 text-white rounded-full hover:bg-pink-600 transition duration-200">
                  View Project
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
