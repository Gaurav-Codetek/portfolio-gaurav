import React from 'react';

const Skills = ({ darkMode }) => {
  const technicalSkills = [
    { name: 'PySpark', icon: '✨', category: 'Language' },
    { name: 'Databricks', icon: '🧱', category: 'Language' },
    { name: 'Python', icon: '🐍', category: 'Language' },
    { name: 'JavaScript', icon: '🟨', category: 'Language' },
    { name: 'React', icon: '⚛️', category: 'Framework' },
    { name: 'Node.js', icon: '🟢', category: 'Runtime' },
    { name: 'Docker', icon: '🐳', category: 'Tool' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Git', icon: '📦', category: 'Tool' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'Nginx', icon: '🔧', category: 'Server' },

  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl w-full mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-8 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Skills
        </h2>
        <p className={`text-center text-lg mb-16 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          A showcase of my technical expertise and soft skills
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technicalSkills.map((skill, index) => (
            <div
              key={index}
              className={`backdrop-blur-lg rounded-2xl p-6 border shadow-xl transition-all hover:scale-105 hover:shadow-2xl ${
                darkMode 
                  ? 'bg-gray-900/30 border-gray-700/50 hover:bg-gray-800/40' 
                  : 'bg-white/30 border-white/50 hover:bg-white/40'
              }`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="text-5xl">{skill.icon}</div>
                <h3 className={`text-lg font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {skill.name}
                </h3>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  darkMode 
                    ? 'bg-blue-900/50 text-blue-300' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
