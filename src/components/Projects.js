import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = ({ darkMode }) => {
    const projects = [
        {
            title: 'Webify - Cloud based Hosting Platform',
            description: 'SaaS alternative to Vercel, Netlify and Render to host applications live on the internet with free subdomains and analytics.',
            technologies: ['AWS', 'React', 'Docker', 'Nginx', 'Node'],
            demo: 'https://webifyapi.in/',
            demoVisible: true
        },
        {
            title: 'ETL Pipeline for NYC Taxi Dataset',
            description: 'Developed an end-to-end ETL pipeline for the NYC Taxi Trip Duration dataset using PySpark, SQL and AWS services',
            technologies: ['AWS S3', 'PySpark', 'SQL', 'AWS Glue'],
            demo: 'https://project-demo.com',
            demoVisible: false
        },
        {
            title: 'Airline Dataset Ingestion',
            description: 'Built a data ingestion pipeline using AWS that pulls daily flight data into S3, triggers an ETL workflow via EventBridge, and runs automated transformation jobs using AWS Glue',
            technologies: ['AWS Services', 'PySpark',],
            github: 'https://github.com/yourusername/project',
            demo: 'https://project-demo.com',
            demoVisible: false
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-7xl w-full mx-auto">
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                    Projects
                </h2>
                <p className={`text-center text-lg mb-16 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    A selection of my recent work and personal projects
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`backdrop-blur-lg rounded-2xl p-6 border shadow-xl transition-all hover:scale-[1.03] ${darkMode
                                ? 'bg-gray-900/30 border-gray-700/50'
                                : 'bg-white/30 border-white/50'
                                }`}
                        >
                            <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'
                                }`}>
                                {project.title}
                            </h3>
                            <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode
                                            ? 'bg-gray-800/50 text-gray-300'
                                            : 'bg-gray-200/70 text-gray-700'
                                            }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                {/* <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-800/50 hover:bg-gray-700/50 text-gray-200' 
                      : 'bg-gray-200/70 hover:bg-gray-300/70 text-gray-700'
                  }`}
                >
                  <Github size={18} />
                  Code
                </a> */}
                                {project.demoVisible ? <>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all hover:scale-105"
                                    >
                                        <ExternalLink size={18} />
                                        Demo
                                    </a></> : <></>}

                            </div>
                        </div>
                    ))}
                </div>

                {
                    projects.length > 3 ? <>
                        <div className="flex justify-center mt-12">
                            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg">
                                Load More Projects
                            </button>
                        </div>
                        </> : <></>
                }
            </div>
        </section>
    );
};

export default Projects;
