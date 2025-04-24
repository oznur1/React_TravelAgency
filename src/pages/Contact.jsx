import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-72 md:h-96 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="flex items-center justify-center h-full bg-black/50">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Contact</h1>
        </div>
      </div>

      {/* Contact Info + Form */}
      <div className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

            <div className="border border-gray-300 p-4 rounded-md bg-white flex items-start gap-4">
              <FaEnvelope className="text-blue-600 text-xl mt-1" />
              <p>info@travelagency.com</p>
            </div>

            <div className="border border-gray-300 p-4 rounded-md bg-white flex items-start gap-4">
              <FaPhone className="text-blue-600 text-xl mt-1" />
              <p>+123 456 7890</p>
            </div>

            <div className="border border-gray-300 p-4 rounded-md bg-white flex items-start gap-4">
              <FaMapMarkedAlt className="text-blue-600 text-xl mt-1" />
              <p>123 Travel St, City, Country</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-gray-700 font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message"
                  className="w-full border border-gray-400 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
              >
                Send
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;




