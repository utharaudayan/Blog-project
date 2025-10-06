import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AboutUS() {
    return (
        <>
            <Navbar />
          


     <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-6 py-16 flex flex-col items-center justify-center text-center">
      {/* Hero Image */}
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
        alt="Team working together"
        className="w-full max-w-xl rounded-3xl shadow-xl mb-10"
      />

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
        Who We Are
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
        We’re a passionate collective of writers, developers, and dreamers who believe in the power of storytelling. Our blog is a canvas for ideas, insights, and inspiration—crafted to spark curiosity and connect minds.
      </p>
    </div>




            <Footer />
        </>
    );
}

export default AboutUS;


