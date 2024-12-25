import React from 'react';

const NewsCard = ({ news }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 hover:shadow-lg transition duration-200 transform hover:scale-105">
      <img src={news.image} alt={news.title} className="w-full h-48 object-cover"/>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
      <p className="text-gray-700 mb-2 line-clamp-2">{news.excerpt}</p>
      <p className="text-gray-500 text-sm">{news.date}</p>
    </div>
  </div>
);

export default NewsCard