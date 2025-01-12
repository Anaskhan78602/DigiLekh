import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { motion } from "framer-motion";
import { FaPen, FaShare, FaChartLine, FaLock, FaRocket, FaHandsHelping } from "react-icons/fa"; // New icons added
import Header from "./Header"; // Import the Header component
import Footer from "./Footer"; // Import the Footer component
import "./Features.css";

function Features() {
  const features = [
    {
      title: "Easy Blog Writing",
      description: "Write and publish blogs effortlessly with our tools.",
      icon: <FaPen />,
    },
    {
      title: "Community Sharing",
      description: "Share your blogs with a vibrant community of readers.",
      icon: <FaShare />,
    },
    {
      title: "Responsive Design",
      description: "Access and write blogs seamlessly on any device.",
      icon: <FaChartLine />,
    },
    {
      title: "Secure Platform",
      description: "Your data and blogs are protected with top-notch security.",
      icon: <FaLock />,
    },
    {
      title: "Fast Performance",
      description: "Experience blazing-fast load times and optimized tools.",
      icon: <FaRocket />,
    },
    {
      title: "24/7 Support",
      description: "Get help anytime with our dedicated support team.",
      icon: <FaHandsHelping />,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Add the Header */}
      <Header />

      {/* Main content */}
      <section id="features" className="bg-[#CBDEB] features-section flex-grow">
        <div className="features-header">
          <h1>Our Features</h1>
          <p>Discover the key features that make our platform unique and powerful.</p>
        </div>

        <div className="features-container">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              {/* Link to the Learn More page */}
              <Link
                to="/LearnMore"
                className="action-button"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add the Footer */}
      <Footer />
    </div>
  );
}

export default Features;
