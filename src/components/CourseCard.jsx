import React from 'react';

const CourseCard = ({ course }) => (
  <div className="bg-gray-100 rounded-md p-4 mb-2 hover:bg-gray-200 transition duration-200 transform hover:scale-105">
    <h3 className="text-lg font-semibold mb-1">{course.name}</h3>
    <p className="text-gray-700">{course.description}</p>
  </div>
);

export default CourseCard;