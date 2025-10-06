import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-6 py-16">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Image & Intro */}
          <div className="flex flex-col items-center text-center md:text-left">
            <img
              src="https://images.unsplash.com/photo-1665072204431-b3ba11bd6d06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbm5lY3R8ZW58MHx8MHx8fDA%3D"
              alt="Contact illustration"
              className="w-full max-w-md rounded-3xl shadow-2xl mb-8"
            />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Let’s Connect
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Have a question, suggestion, or just want to say hi? Fill out the
              form and we’ll get back to you soon.
            </p>
          </div>

          {/* Right Side: Contact Form */}
          <form className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
