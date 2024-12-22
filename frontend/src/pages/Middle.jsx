import React, { useEffect, useRef } from "react";
import BackgroundImage from "../assets/frontimage.2.jpg";
import { Link } from "react-router-dom";
import Typed from "typed.js"; // Import typed.js directly
import './Middle.css';

const Middle = () => {
  const typedRef = useRef(null); // Reference for Typed.js

  useEffect(() => {
    const options = {
      strings: ["Welcome to ultimate blog writing website"],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy(); // Clean up Typed.js instance on unmount
    };
  }, []);

  return (
    <main className="relative py-12 flex justify-center items-center min-h-screen bg-white">
      <div
        className="absolute inset-0 bg-cover bg-left z-0"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      ></div>

      <div className="relative z-10 w-full max-w-2xl text-left px-4">
        <h1 className="text-4xl font-bold text-[#F29F58] mb-4">
          <span ref={typedRef}></span> {/* Use ref for Typed.js */}
        </h1>
        <h2  className="text-4xl font-semibold text-gray-900 mb-4"> Voices that shape the world...</h2>

        <p className="text-xl font-semibold text-black-700 mb-6">
          Explore the untold stories, discover new perspectives.
        </p>

        {/* Adjusted to align cards further to the right */}
        <div className="mt-8 flex justify-end pr-16"> {/* Added pr-16 for extra right padding */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-lg text-right">
            <div className="card">
              <h4 className="text-lg font-bold mb-2">Read Blogs</h4>
              <p className="text-sm mb-4">
                Discover stories from around the world and get inspired.
              </p>
              <Link to="/user/signup">
                <button className="animated-button">Start Reading</button>
              </Link>
            </div>

            <div className="card">
              <h4 className="text-lg font-bold mb-2">Write Blogs</h4>
              <p className="text-sm mb-4">
                Craft captivating stories using our special editor.
              </p>
             <Link to="/user/signup">
                <button className="animated-button">Start Writing</button>
              </Link>
            </div>

            <div className="card">
              <h4 className="text-lg font-bold mb-2">Share Content</h4>
              <p className="text-sm mb-4">
                Reach a wider audience with just one click.
              </p>
             <Link to="/user/signup">
                <button className="animated-button">Share Now</button>
              </Link>
            </div>

            <div className="card">
              <h4 className="text-lg font-bold mb-2">Grow Audience</h4>
              <p className="text-sm mb-4">
                Track your growth with our analytics tools.
              </p>
             <Link to="/user/signup">
                <button className="animated-button">Track Growth</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Middle;
