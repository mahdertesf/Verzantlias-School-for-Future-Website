import React, { useContext } from 'react';
import ClubCard from '../components/ClubCard.jsx';
import SportCard from '../components/SportCard.jsx';
import { LanguageContext } from "../i18n.jsx";

const StudentLifePage = () => {
    const { translations } = useContext(LanguageContext);

    const clubs = [
        { name: "Debate Club", image: "/assets/images/club-1.png", description: "Hone your public speaking skills." },
        { name: "Robotics Club", image: "/assets/images/club-2.png", description: "Build and program robots." },
        { name: "Art Club", image: "/assets/images/club-3.png", description: "Explore your creative side." },
        { name: "Chess Club", image: "/assets/images/club-4.png", description: "Master the game of strategy." }
    ];

    const sports = [
        { name: "Basketball", image: "/assets/images/basketball.jpg" },
        { name: "Soccer", image: "/assets/images/soccer.jpg" },
        { name: "Track and Field", image: "/assets/images/track.jpg" },
        { name: "Swimming", image: "/assets/images/swimming.jpg" }
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{translations.studentLife}</h2>
            <h3 className="text-3xl font-semibold mb-6 text-gray-700">{translations.clubs}</h3>
            <p className="mb-8 text-lg text-gray-600">{translations.clubsText}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {clubs.map(club => (
                    <ClubCard key={club.name} club={club} />
                ))}
            </div>
            <h3 className="text-3xl font-semibold mt-12 mb-6 text-gray-700">{translations.athletics}</h3>
            <p className="mb-8 text-lg text-gray-600">{translations.athleticsText}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {sports.map(sport => (
                    <SportCard key={sport.name} sport={sport} />
                ))}
            </div>
            <h3 className="text-3xl font-semibold mt-12 mb-6 text-gray-700">{translations.supportService}</h3>
            <p className="mb-8 text-lg text-gray-600">{translations.supportServiceText}</p>
            <ul className="list-disc list-inside mb-8 text-lg text-gray-600">
                <li>Guidance Counseling</li>
                <li>Academic Tutoring</li>
                <li>College Advising</li>
            </ul>
        </div>
    );
};

export default StudentLifePage;