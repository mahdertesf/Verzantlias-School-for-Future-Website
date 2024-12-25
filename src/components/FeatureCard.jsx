import React from 'react';

const FeatureCard = ({ icon, title, text }) => (
    <div className="p-6 rounded-lg bg-gray-100 shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
        <div className="flex items-center justify-center mb-4">
            {icon}
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{text}</p>
    </div>
);

export default FeatureCard;