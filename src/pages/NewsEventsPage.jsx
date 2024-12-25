import React, { useContext } from 'react';
import NewsCard from '../components/NewsCard.jsx';
import Calendar from '../components/Calendar.jsx';
import {LanguageContext} from "../i18n.jsx";

const NewsEventsPage = () => {
     const { translations } = useContext(LanguageContext);
    const news = [
      {title:"New STEM lab Opens", excerpt: "Our new state-of-the-art STEM lab opens its doors to all students...", image:"/assets/images/news-1.jpg", date: "October 15, 2024"},
         {title:"Robotics Club Wins Regional Competition", excerpt: "Our Robotics Club has won the regional competition...", image:"/assets/images/news-2.jpg", date:"October 10, 2024"},
       {title:"Art Exhibition on Display", excerpt: "Our talented art students are showcasing their pieces in our new exhibition hall...", image:"/assets/images/news-3.jpg", date: "September 28, 2024"}
    ];

     const events = [
        { date: '2024-10-26', title: "Parent-Teacher Conference", description: "Discuss your child's academic progress" },
        { date: '2024-11-02', title: "Fall Festival", description: "Fun for the whole family" },
        { date: '2024-11-15', title: "Open House", description: "Tour our campus and meet our staff" }
    ];
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-8">{translations.newsEvents}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {news.map(newsItem => <NewsCard key={newsItem.title} news={newsItem}/>)}
             </div>
              <h3 className="text-2xl font-semibold mb-4">{translations.schoolCalendar}</h3>
            <Calendar events={events}/>
        </div>
    );
};

export default NewsEventsPage;