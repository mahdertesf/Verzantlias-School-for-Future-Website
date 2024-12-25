import React, { useContext } from 'react';
import CourseCard from '../components/CourseCard.jsx';
import {LanguageContext} from "../i18n.jsx";
const AcademicsPage = () => {
    const { translations } = useContext(LanguageContext);

  const grade9Courses = [
        { name: "Algebra I", description: "Introduction to basic algebra concepts.", credits: 1 },
        { name: "Biology", description: "Study of living organisms.", credits: 1 },
         { name: "English 9", description: "Introduction to literary analysis.", credits: 1 },
         { name: "World History", description: "Overview of significant world events and civilizations", credits: 1 },
         { name: "Physical Education", description: "Introduction to Physical Education", credits: 1 },
      { name: "Fine Arts", description: "Introduction to Art", credits: 1 }
    ];
    const grade10Courses = [
        { name: "Geometry", description: "Exploration of geometric shapes.", credits: 1 },
         { name: "Chemistry", description: "Study of matter and its properties.", credits: 1 },
         { name: "English 10", description: "Focus on narrative and expository writing.", credits: 1 },
         { name: "American History", description: "Exploration of history and significant events of America", credits: 1 },
       { name: "Health", description: "Overview of health education", credits: 1 },
         { name: "Computer Science", description: "Introduction to coding concepts.", credits: 1 }
    ];
  const grade11Courses = [
         { name: "Pre-Calculus", description: "Advanced algebraic concepts.", credits: 1 },
      { name: "Physics", description: "Study of the fundamental laws of the universe.", credits: 1 },
    { name: "English 11", description: "Introduction to American literature.", credits: 1 },
       { name: "Civics", description: "Overview of civil responsibilities", credits: 1 },
        { name: "Music Theory", description: "Introduction to music theory", credits: 1 },
        { name: "Creative Writing", description: "Creative Writing practice", credits: 1 }
    ];
    const grade12Courses = [
         { name: "Calculus", description: "Introduction to differential and integral calculus.", credits: 1 },
      { name: "Advanced Biology", description: "Exploration of advanced biological topics.", credits: 1 },
        { name: "English 12", description: "Introduction to world literature.", credits: 1 },
      { name: "Economics", description: "Introduction to economics", credits: 1 },
    { name: "Psychology", description: "Introduction to psychology", credits: 1 },
         { name: "Advanced Studio Arts", description: "Advanced practice in visual arts", credits: 1 },
        {name:"Vestibular Prep", description:"Preparation for university entrance exam", credits: 1}
    ];

  return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-8">{translations.academics}</h2>
            <p className="mb-4">{translations.academicsText}</p>
            <h3 className="text-2xl font-semibold mb-4">{translations.grade9}</h3>
            <p className="mb-4">{translations.grade9Text}</p>
            {grade9Courses.map(course => <CourseCard key={course.name} course={course} />)}
             <h3 className="text-2xl font-semibold mb-4">{translations.grade10}</h3>
           <p className="mb-4">{translations.grade10Text}</p>
            {grade10Courses.map(course => <CourseCard key={course.name} course={course} />)}
              <h3 className="text-2xl font-semibold mb-4">{translations.grade11}</h3>
           <p className="mb-4">{translations.grade11Text}</p>
             {grade11Courses.map(course => <CourseCard key={course.name} course={course} />)}
             <h3 className="text-2xl font-semibold mb-4">{translations.grade12}</h3>
             <p className="mb-4">{translations.grade12Text}</p>
            {grade12Courses.map(course => <CourseCard key={course.name} course={course} />)}
            <h3 className="text-2xl font-semibold mb-4">{translations.specialized}</h3>
            <p className="mb-4">{translations.specializedText}</p>
            <ul className="list-disc list-inside mb-4">
                <li>AP Courses: AP Calculus, AP Physics, AP English Literature, AP Computer Science, AP Statistics, AP US History</li>
                <li>IB Courses: IB Math, IB Chemistry, IB English, IB Biology, IB Economics, IB Global Politics</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4">{translations.resources}</h3>
            <p className="mb-4">{translations.resourcesText}</p>
        </div>
    );
};

export default AcademicsPage;