import React from 'react';

const SportCard = ({ sport }) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img src={sport.image} alt={sport.name} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white p-4">
                    <h3 className="text-2xl font-bold mb-2">{sport.name}</h3>
                </div>
            </div>
        </div>
    );
};

export default SportCard;