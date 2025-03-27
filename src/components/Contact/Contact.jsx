import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [notification, setNotification] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setNotification("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "7140e048-f121-44ee-92e1-d9ff73648674");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setNotification("Form Submitted Successfully");
        event.target.reset();
      } else {
        setNotification("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setNotification("An error occurred. Please try again.");
    }

    setTimeout(() => {
      setNotification("");
    }, 5000);
  };

  return (
    <div className="bg-white text-white py-12 px-6 flex flex-col items-center">
      <div className="text-center max-w-4xl mb-8">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mt-2">
          Contact Me
        </h2>
        <p className="text-lg font-medium text-gray-500 mt-4">
          Have a question or want to work together? Get in touch!
        </p>
      </div>

      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          {notification}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Social Cards Section */}
        <div className="space-y-6">
          {/* Email Card */}
          <a
            href="mailto:engr.hassan.ali007@gmail.com"
            className="block bg-blue-900 rounded-lg shadow-lg p-6 w-72 flex items-center space-x-4 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            <div className="bg-blue-500 p-3 rounded-full">
              <FaEnvelope className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Email</h3>
              <p className="text-gray-300">engr.hassan.ali007</p>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/hassan-ali-7b2a05301"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-900 rounded-lg shadow-lg p-6 w-72 flex items-center space-x-4 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            <div className="bg-blue-500 p-3 rounded-full">
              <FaLinkedin className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">LinkedIn</h3>
              <p className="text-gray-300">Send a message</p>
            </div>
          </a>

          {/* WhatsApp Card */}
          <a
            href="https://wa.me/923034542335"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-blue-900 rounded-lg shadow-lg p-6 w-72 flex items-center space-x-4 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            <div className="bg-blue-500 p-3 rounded-full">
              <FaWhatsapp className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">WhatsApp</h3>
              <p className="text-gray-300">+92 303 4542335</p>
            </div>
          </a>
        </div>

        {/* Contact Form Section */}
        <div className="rounded-lg shadow-lg border-[0.5px] border-gray-300 p-8 bg-white">
          <h3 className="text-2xl font-light text-gray-500 mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-500 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 rounded bg-white text-white border border-blue-700 focus:outline-none focus:border-blue-400"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-500 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 rounded bg-white text-white border border-blue-700 focus:outline-none focus:border-blue-400"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-500 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 rounded bg-white text-white border border-blue-700 focus:outline-none focus:border-blue-400"
                rows="5"
                placeholder="Your Message"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
