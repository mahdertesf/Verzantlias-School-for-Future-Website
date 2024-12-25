import React from 'react';

const EventCard = ({ event }) => (
    <div className="bg-white shadow rounded p-4 mb-4 hover:shadow-md transition duration-200 transform hover:scale-105">
        <h3 className="font-semibold text-lg">{event.title}</h3>
        <p className="text-gray-600 text-sm">{event.date}</p>
        <p className="text-gray-700">{event.description}</p>
    </div>
);

export default EventCard;