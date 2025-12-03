import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Instagram, ArrowDown } from 'lucide-react';
import profile from "../Assets/profile.jpg"

const Hero = ({ darkMode }) => {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const getIndianTimeGreeting = () => {
            // Get current time in IST
            const now = new Date();
            const istTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
            const hours = istTime.getHours();

            if (hours >= 5 && hours < 12) {
                return 'Good Morning';
            } else if (hours >= 12 && hours < 17) {
                return 'Good Afternoon';
            } else {
                return 'Good Evening';
            }
        };

        setGreeting(getIndianTimeGreeting());

        // Update greeting every minute
        const interval = setInterval(() => {
            setGreeting(getIndianTimeGreeting());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const socialLinks = [
        { icon: Github, url: 'https://github.com/Gaurav-Codetek' },
        { icon: Linkedin, url: 'https://www.linkedin.com/in/gaurav-patel-50a6041b5/' }
        // { icon: Twitter, url: 'https://twitter.com/yourusername' },
        // { icon: Instagram, url: 'https://instagram.com/yourusername' },
    ];

    return (
        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
            <div className="max-w-7xl w-full mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        {/* Greeting with animation */}
                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-lg border ${darkMode
                                ? 'bg-purple-900/30 border-purple-500/50'
                                : 'bg-purple-100/50 border-purple-300/50'
                            }`}>
                            <span className="animate-pulse text-2xl">🙏</span>
                            <span className={`text-lg font-medium ${darkMode ? 'text-purple-200' : 'text-purple-700'
                                }`}>
                                {greeting} !!
                            </span>
                        </div>

                        <div>
                            <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'
                                }`}>
                                I'm <span className="text-blue-500">Gaurav</span>
                            </h1>
                            <p className={`text-xl md:text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                A Data Engineering and Cloud Architecture Enthusiast from India. I build modern ETL pipelines,
                                cloud-native applications, and scalable software solutions using Python, AWS, and ReactJS.
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-full backdrop-blur-lg transition-all hover:scale-110 ${darkMode
                                            ? 'bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700'
                                            : 'bg-white/50 hover:bg-white/70 border border-gray-200'
                                        }`}
                                >
                                    <social.icon size={24} className={darkMode ? 'text-gray-200' : 'text-gray-700'} />
                                </a>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg"
                            >
                                Get in Touch
                            </button>
                            <button
                                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                                className={`px-8 py-3 backdrop-blur-lg font-semibold rounded-xl transition-all hover:scale-105 border ${darkMode
                                        ? 'bg-gray-800/50 border-gray-700 text-white hover:bg-gray-700/50'
                                        : 'bg-white/50 border-gray-300 text-gray-700 hover:bg-white/70'
                                    }`}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <div className="flex justify-center">
                        <div className={`relative w-80 h-80 md:w-96 md:h-96 rounded-full backdrop-blur-xl p-2 ${darkMode
                                ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/30'
                                : 'bg-gradient-to-br from-purple-200/40 to-blue-200/40 border-2 border-purple-300/50'
                            }`}>
                            <div className="w-full h-full rounded-full overflow-hidden bg-gray-300">
                                {/* Replace with your image */}
                                <img
                                    src={profile}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Floating decoration */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full backdrop-blur-lg animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full backdrop-blur-lg animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="flex justify-center mt-16 animate-bounce">
                    <ArrowDown size={32} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                </div>
            </div>
        </section>
    );
};

export default Hero;
