import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { LanguageContext } from "../i18n.jsx";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { translations, setLanguage } = useContext(LanguageContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <header className="bg-white shadow">
            <div className="container mx-auto p-4 flex justify-between items-center">
               
                <div className="hidden md:flex space-x-6">
                    <NavLink to="/" className={({ isActive }) => `hover:text-gray-500 transition duration-200 ${isActive ? 'text-blue-500' : ''}`}>{translations.home}</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `hover:text-gray-500 transition duration-200 ${isActive ? 'text-blue-500' : ''}`}>{translations.about}</NavLink>
                    <NavLink to="/academics" className={({ isActive }) => `hover:text-gray-500 transition duration-200 ${isActive ? 'text-blue-500' : ''}`}>{translations.academics}</NavLink>
                    <NavLink to="/admissions" className={({ isActive }) => `hover:text-gray-500 transition duration-200 ${isActive ? 'text-blue-500' : ''}`}>{translations.admissionsLink}</NavLink>
                    <NavLink to="/student-life" className={({ isActive }) => `hover:text-gray-500 transition duration-200 ${isActive ? 'text-blue-500' : ''}`}>{translations.studentLife}</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `hover:text-gray-500 transition duration-200 ${isActive ? 'text-blue-500' : ''}`}>{translations.contactLink}</NavLink>
                    <NavLink to="/parents-portal" className={({ isActive }) => `hover:text-gray-500 transition duration-200 ${isActive ? 'text-blue-500' : ''}`}>{translations.parents}</NavLink>
                </div>
                <div className="flex items-center">
                    <select onChange={handleLanguageChange} className="border border-gray-300 rounded-md p-2 text-sm">
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                    </select>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="focus:outline-none">
                            {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-100 p-4">
                    <NavLink to="/" className="block py-2 hover:text-gray-500 transition duration-200">{translations.home}</NavLink>
                    <NavLink to="/about" className="block py-2 hover:text-gray-500 transition duration-200">{translations.about}</NavLink>
                    <NavLink to="/academics" className="block py-2 hover:text-gray-500 transition duration-200">{translations.academics}</NavLink>
                    <NavLink to="/admissions" className="block py-2 hover:text-gray-500 transition duration-200">{translations.admissionsLink}</NavLink>
                    <NavLink to="/student-life" className="block py-2 hover:text-gray-500 transition duration-200">{translations.studentLife}</NavLink>
                    <NavLink to="/contact" className="block py-2 hover:text-gray-500 transition duration-200">{translations.contactLink}</NavLink>
                    <NavLink to="/parents-portal" className="block py-2 hover:text-gray-500 transition duration-200">{translations.parents}</NavLink>
                </div>
            )}
        </header>
    );
};

export default Header;
