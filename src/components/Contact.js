import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios'

const Contact = ({ darkMode }) => {
    const [submit, setSubmit] = useState("Send Message");
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });

    const handleSubmit = async(e) => {
        e.preventDefault();
        setSubmit('Sending...')
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_URL}/feedback`,
                formData,
                {
                    headers: {
                        "X-API-KEY": process.env.REACT_APP_AUTH_KEY,
                    },
                }
            );
            const data = response.data;
            setSubmit("Message Sent!");
            console.log(data);
            setTimeout(() => {
                setSubmit("Send Message");
            }, 3000)
            return data;
        } catch (err) {
            console.log(err);
            setSubmit('Failed to send!');
            setTimeout(() => {
                setSubmit("Try again");
            }, 3000)
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
            <div className="max-w-6xl w-full mx-auto">
                <h2 className={`text-4xl md:text-5xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                    Contact Me
                </h2>
                <p className={`text-center text-lg mb-16 ${darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    Have a question or want to work together? Feel free to reach out!
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div className={`backdrop-blur-lg rounded-2xl p-6 border shadow-xl flex items-center gap-4 ${darkMode
                                ? 'bg-gray-900/30 border-gray-700/50'
                                : 'bg-white/30 border-white/50'
                            }`}>
                            <div className="p-3 bg-blue-500/20 rounded-full">
                                <Mail size={24} className="text-blue-500" />
                            </div>
                            <div>
                                <h3 className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    Email
                                </h3>
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    gauravpatel29@outlook.in
                                </p>
                            </div>
                        </div>

                        {/* <div className={`backdrop-blur-lg rounded-2xl p-6 border shadow-xl flex items-center gap-4 ${
              darkMode 
                ? 'bg-gray-900/30 border-gray-700/50' 
                : 'bg-white/30 border-white/50'
            }`}>
              <div className="p-3 bg-green-500/20 rounded-full">
                <Phone size={24} className="text-green-500" />
              </div>
              <div>
                <h3 className={`font-bold mb-1 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Phone
                </h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                  +91 7367974021
                </p>
              </div>
            </div> */}

                        <div className={`backdrop-blur-lg rounded-2xl p-6 border shadow-xl flex items-center gap-4 ${darkMode
                                ? 'bg-gray-900/30 border-gray-700/50'
                                : 'bg-white/30 border-white/50'
                            }`}>
                            <div className="p-3 bg-purple-500/20 rounded-full">
                                <MapPin size={24} className="text-purple-500" />
                            </div>
                            <div>
                                <h3 className={`font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    Location
                                </h3>
                                <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                                    Chandigarh, India
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={`backdrop-blur-lg rounded-2xl p-8 border shadow-xl ${darkMode
                            ? 'bg-gray-900/30 border-gray-700/50'
                            : 'bg-white/30 border-white/50'
                        }`}>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'
                                        }`}>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        className={`w-full px-4 py-3 rounded-xl backdrop-blur-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode
                                                ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400'
                                                : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                                            }`}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'
                                        }`}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your email"
                                        className={`w-full px-4 py-3 rounded-xl backdrop-blur-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode
                                                ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400'
                                                : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                                            }`}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'
                                    }`}>
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className={`w-full px-4 py-3 rounded-xl backdrop-blur-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode
                                            ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400'
                                            : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                                        }`}
                                    required
                                />
                            </div>

                            <div>
                                <label className={`block mb-2 font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'
                                    }`}>
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message"
                                    rows="5"
                                    className={`w-full px-4 py-3 rounded-xl backdrop-blur-lg border focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${darkMode
                                            ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-400'
                                            : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500'
                                        }`}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg"
                            >
                                <Send size={20} />
                                {submit}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
