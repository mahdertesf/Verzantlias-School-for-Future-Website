import React from 'react';
import { useContext } from "react";
import { LanguageContext } from "../i18n.jsx";

const Footer = () => {
    const { translations } = useContext(LanguageContext);
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <div>
                    <h4 className="text-xl font-semibold mb-4">Verzantlias School for Future</h4>
                    <p>© {new Date().getFullYear()} {translations.footerRights}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
