import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import "./learnMore.css"; // Updated consolidated styles
import { FaCheckCircle, FaLightbulb, FaLink, FaQuoteLeft } from "react-icons/fa";

const featureDetails = {
  "Easy Blog Writing": {
    advantages: [
      "Rich text editor for formatting.",
      "Auto-save feature for drafts.",
      "Multiple templates for quick blog creation.",
      "Image and video embedding support.",
      "Markdown support for advanced users.",
    ],
    useCases: [
      "Personal blogging.",
      "Professional articles for marketing.",
      "Content for online magazines.",
    ],
    stats: {
      timeSaved: "50% time saved!",
      users: "10,000+ bloggers use this feature daily.",
    },
    testimonials: [
      { user: "John Doe", review: "Transformed my blogging experience!", rating: 5 },
      { user: "Jane Smith", review: "Simple and effective.", rating: 4.5 },
    ],
  },
  // Add other features here...
};

function LearnMore() {
  const [selectedFeature, setSelectedFeature] = useState("Easy Blog Writing");

  const { advantages, useCases, stats, testimonials } = featureDetails[selectedFeature];

  return (
    <motion.section
      className="learn-more-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <motion.div
        className="learn-more-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Learn More About Our Features</h1>
        <p>Discover how our platform can streamline your blogging journey.</p>
      </motion.div>

      {/* Feature List */}
      <motion.div
        className="learn-more-details"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Explore Our Key Features</h2>
        <ul className="feature-list">
          {Object.keys(featureDetails).map((feature, index) => (
            <motion.li
              key={index}
              onClick={() => setSelectedFeature(feature)}
              whileHover={{ scale: 1.1 }}
              className={`feature-item ${selectedFeature === feature ? "active" : ""}`}
            >
              <FaCheckCircle /> {feature}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Selected Feature Details */}
      <div className="feature-details">
        {/* Advantages */}
        <div className="details-section">
          <h2>Key Advantages</h2>
          <ul>
            {advantages.map((adv, idx) => (
              <li key={idx}>
                <FaCheckCircle className="icon" /> {adv}
              </li>
            ))}
          </ul>
        </div>

        {/* Use Cases */}
        <div className="details-section">
          <h2>Use Cases</h2>
          <div className="cards-container">
            {useCases.map((caseItem, idx) => (
              <div key={idx} className="use-case-card">
                <FaLightbulb className="icon" />
                <h3>{caseItem}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="stats-section">
          <h2>Platform Stats</h2>
          <div className="stats-cards">
            {Object.keys(stats).map((key, idx) => (
              <div key={idx} className="stats-card">
                <h3>{stats[key]}</h3>
                <p>{key}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="details-section">
          <h2>What Our Users Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((test, idx) => (
              <div key={idx} className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p>{test.review}</p>
                <h4>- {test.user}</h4>
                <div className="rating">{"⭐".repeat(Math.round(test.rating))}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        className="cta-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Ready to Get Started?</h2>
        <p>Start your blogging journey with our amazing features.</p>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        > 
        <Link to="/user/signup">
          Start Blogging Now
          </Link>
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

export default LearnMore;
