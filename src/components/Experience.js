import React from 'react';
import { Calendar } from 'lucide-react';

const Experience = ({ darkMode }) => {
  const experiences = [
    // {
    //   title: 'Technology Analyst',
    //   company: 'Company Name',
    //   location: 'Location',
    //   period: 'Jan 2025 - Present',
    //   description: 'Designed and developed interactive dashboards to visualize insights, leveraging modern data transformation tools. Ensured data integrity and accuracy through comprehensive validation.',
    //   technologies: ['Python', 'React', 'AWS', 'PostgreSQL']
    // },
    {
      title: 'Full-Stack Developer',
      company: 'Superceuticals',
      location: 'Gurugram',
      period: 'November 2024 - February 2025',
      description: 'Gained hands-on experience of building applications using react and redux-toolkit along with session handling of real-time health diagonistic software.',
      technologies: ["ReactJs", 'Redux', 'Dev tools', 'API Testing']
    },
    {
      title: 'Project Intern',
      company: 'MDaRT DIC',
      location: 'Chandigarh',
      period: 'June 2024 - July 2024',
      description: ' Developed a React Native app integrated with ESP32 microcontrollers and reflex sensors, enabling real-time finger joint motion tracking via Bluetooth serial communication and storing data into Firebase',
      technologies: ['React', 'GCP', 'ESP32', 'Embedded C']
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-8 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Experience & Internships
        </h2>
        <p className={`text-center text-lg mb-16 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          My professional journey and work experience
        </p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`backdrop-blur-lg rounded-2xl p-8 border shadow-xl transition-all hover:scale-[1.02] ${
                darkMode 
                  ? 'bg-gray-900/30 border-gray-700/50' 
                  : 'bg-white/30 border-white/50'
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {exp.title}
                  </h3>
                  <p className={`text-lg font-semibold ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {exp.company}
                  </p>
                </div>
                <div className={`flex items-center gap-2 mt-2 md:mt-0 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <Calendar size={18} />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <p className={`mb-4 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      darkMode 
                        ? 'bg-gray-800/50 text-gray-300' 
                        : 'bg-gray-200/70 text-gray-700'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
