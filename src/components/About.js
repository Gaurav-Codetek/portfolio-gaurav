import React from 'react';
import { FileText } from 'lucide-react';

const About = ({ darkMode }) => {
    const interests = [
        'System Design',
        'Cloud Computing',
        'DevOps',
        'Robotics OS'
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-7xl w-full mx-auto">
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                    About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Background Card */}
                    <div className={`backdrop-blur-lg rounded-2xl p-8 border shadow-xl ${darkMode
                        ? 'bg-gray-900/30 border-gray-700/50'
                        : 'bg-white/30 border-white/50'
                        }`}>
                        <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'
                            }`}>
                            Background
                        </h3>
                        <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                            I'm a full-stack & cloud-focused developer with hands-on experience in building ETL pipelines, cloud-native applications, and scalable software solutions. I work with technologies like Python, SQL, AWS, and ReactJS to create efficient systems that handle real-world data and automation needs.
                        </p>
                        <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                            I'm passionate about developing reliable APIs, optimizing workflows, and working with cloud services such as AWS Glue, Redshift, S3, and Step Functions to build end-to-end solutions.
                        </p>
                        <p className={`leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'
                            }`}>
                            Outside of coding, I enjoy exploring modern cloud infrastructure, automating processes, learning new technologies, and continuously improving my skills to stay aligned with industry trends.
                        </p>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all hover:scale-105">
                                <FileText size={20} />
                                View Resume
                            </button>
                        </a>
                    </div>

                    {/* Education & Interests */}
                    <div className="space-y-8">
                        {/* Education Card */}
                        <div className={`backdrop-blur-lg rounded-2xl p-8 border shadow-xl ${darkMode
                            ? 'bg-blue-900/30 border-blue-700/50'
                            : 'bg-blue-100/50 border-blue-300/50'
                            }`}>
                            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                Bachelor of Engineering
                            </h3>
                            <p className={`text-lg font-semibold ${darkMode ? 'text-blue-300' : 'text-blue-700'
                                }`}>
                                Electronics and Communication Engineering
                            </p>
                            <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                UIET, Panjab University, India
                            </p>
                            <p className={`mt-1 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                2022 - 2026
                            </p>
                        </div>

                        {/* Interests Card */}
                        <div className={`backdrop-blur-lg rounded-2xl p-8 border shadow-xl ${darkMode
                            ? 'bg-purple-900/30 border-purple-700/50'
                            : 'bg-purple-100/50 border-purple-300/50'
                            }`}>
                            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                Interests
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {interests.map((interest, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-xl text-center font-medium ${darkMode
                                            ? 'bg-purple-800/30 text-purple-200'
                                            : 'bg-white/50 text-purple-700'
                                            }`}
                                    >
                                        {interest}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
