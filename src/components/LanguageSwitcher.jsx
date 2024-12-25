import React, { useContext } from 'react';
import { LanguageContext } from '../i18n.jsx';
import {GlobeAltIcon} from "@heroicons/react/24/outline"

const LanguageSwitcher = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
    };

    return (
        <div className="relative group">
            <button className="focus:outline-none flex items-center" >
                <GlobeAltIcon className="h-5 w-5 mr-2"/>
                {language}
            </button>
            <div className="hidden group-hover:block absolute bg-white shadow-md rounded p-2 mt-1">
                <button onClick={() => handleLanguageChange('en')}
                        className={`block py-1 px-2 hover:bg-gray-100 ${language === 'en' ? 'font-semibold' : ''} `}>
                    English
                </button>
                <button onClick={() => handleLanguageChange('pt')}
                        className={`block py-1 px-2 hover:bg-gray-100 ${language === 'pt' ? 'font-semibold' : ''}`}>
                    Português
                </button>
            </div>
        </div>
    );
};

export default LanguageSwitcher;