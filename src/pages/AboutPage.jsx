import React, { useContext } from 'react';
import { LanguageContext } from '../i18n.jsx';

const AboutPage = () => {
    const { translations } = useContext(LanguageContext);

    const principal = {
        name: "Dr. Sarah Johnson",
        title: "Principal",
        description: "Dr. Johnson has been Principal since 2018, working with parents, staff, and students to create a thriving community.",
        image: "/assets/images/principal.jpg",
         email: "principal.johnson@verzantlias-school.academy",
    };
    const headOfDepartment1 = {
        name: "Prof. Jane Smith",
        title: "Head of Science Department",
        description: "Professor Smith has been part of Verzantlias since its start and has helped countless students in science.",
        image: "/assets/images/head-1.jpg",
        email: "jane.smith@verzantlias-school.academy",
    };
    const headOfDepartment2 = {
        name: "Prof. Thomas Lee",
        title: "Head of Art Department",
        description: "Professor Lee has an impressive 10 years of experience and helps foster student creativity.",
        image: "/assets/images/head-2.jpg",
        email: "thomas.lee@verzantlias-school.academy",
    };
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold text-center mb-8">{translations.aboutUs}</h2>
            <h3 className="text-2xl font-semibold mb-4">{translations.mission}</h3>
            <p className="mb-4">{translations.missionText}</p>
            <h3 className="text-2xl font-semibold mb-4">{translations.vision}</h3>
            <p className="mb-4">{translations.visionText}</p>
            <h3 className="text-2xl font-semibold mb-4">{translations.coreValues}</h3>
            <ul className="list-disc list-inside mb-4">
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Inclusivity</li>
                <li>Excellence</li>
                <li>Collaboration</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4">{translations.history}</h3>
            <p className="mb-4">{translations.historyText}</p>
            <h3 className="text-2xl font-semibold mb-4">{translations.leadership}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 rounded-md p-4 mb-4 flex flex-col items-center justify-center">
                    <img src={principal.image} alt={principal.name} className="w-40 h-40 object-cover mb-2 rounded-full" />
                    <h3 className="text-lg font-semibold mb-1 text-center">{principal.name}</h3>
                    <h4 className="text-md text-gray-500 mb-1 text-center">{principal.title}</h4>
                    <p className="text-gray-700 text-center text-sm">{principal.description}</p>
                  <p className="text-gray-500 text-sm text-center">{principal.email}</p>
                </div>
                <div className="bg-gray-100 rounded-md p-4 mb-4 flex flex-col items-center justify-center">
                    <img src={headOfDepartment1.image} alt={headOfDepartment1.name} className="w-40 h-40 object-cover mb-2 rounded-full" />
                    <h3 className="text-lg font-semibold mb-1 text-center">{headOfDepartment1.name}</h3>
                     <h4 className="text-md text-gray-500 mb-1 text-center">{headOfDepartment1.title}</h4>
                    <p className="text-gray-700 text-center text-sm">{headOfDepartment1.description}</p>
                     <p className="text-gray-500 text-sm text-center">{headOfDepartment1.email}</p>
                </div>
                <div className="bg-gray-100 rounded-md p-4 mb-4 flex flex-col items-center justify-center">
                   <img src={headOfDepartment2.image} alt={headOfDepartment2.name} className="w-40 h-40 object-cover mb-2 rounded-full" />
                    <h3 className="text-lg font-semibold mb-1 text-center">{headOfDepartment2.name}</h3>
                    <h4 className="text-md text-gray-500 mb-1 text-center">{headOfDepartment2.title}</h4>
                     <p className="text-gray-700 text-center text-sm">{headOfDepartment2.description}</p>
                      <p className="text-gray-500 text-sm text-center">{headOfDepartment2.email}</p>
                </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4">{translations.campus}</h3>
            <p className="mb-4">{translations.campusText}</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <img src="/assets/images/campus-1.jpg" alt="Campus 1" className="rounded-md" />
                <img src="/assets/images/campus-2.jpg" alt="Campus 2" className="rounded-md" />
                <img src="/assets/images/campus-3.jpg" alt="Campus 3" className="rounded-md" />
                <img src="/assets/images/campus-4.jpg" alt="Campus 4" className="rounded-md" />
            </div>
        </div>
    );
};

export default AboutPage;