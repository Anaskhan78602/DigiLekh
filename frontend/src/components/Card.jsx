import React from 'react';

const Card = ({ title, description, onJoin, onView }) => {
  return (
    <div className="bg-[#001F3F] shadow-md rounded-lg p-6 hover:shadow-lg transition duration-200">
      <h3
        className="text-[#78B7D0] text-xl font-bold mb-2 cursor-pointer"
        onClick={onView}
      >
        {title}
      </h3>
      <p className="text-white mb-4">{description}</p>
      <button
        onClick={onJoin}
        className="bg-[#ffb200] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Join
      </button>
    </div>
  );
};

export default Card;
