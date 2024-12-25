import React from 'react';

const StaffCard = ({ staff }) => (
    <div className="bg-gray-100 rounded-md p-4 mb-4 flex flex-col items-center justify-center hover:bg-gray-200 transition duration-200 transform hover:scale-105">
        <img src={staff.image} alt={staff.name} className="w-32 h-32 object-cover mb-2 rounded-full"/>
        <h3 className="text-lg font-semibold mb-1 text-center">{staff.name}</h3>
         <h4 className="text-sm text-gray-500 mb-1 text-center">{staff.title}</h4>
        <p className="text-gray-700 text-sm text-center">{staff.department}</p>
        <p className="text-gray-500 text-sm text-center">{staff.email}</p>
    </div>
);

export default StaffCard;