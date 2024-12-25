import React, { useContext } from 'react';
import { LanguageContext } from "../i18n.jsx";

const ContactPage = () => {
    const { translations } = useContext(LanguageContext);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center text-center">
                <h2 className="text-4xl font-bold mb-12 text-blue-600">{translations.contact}</h2>
                <div className="flex flex-col items-center gap-8">
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-700">{translations.address}</h3>
                        <p className="text-lg text-gray-600">Rua da Liberdade, 123</p>
                        <p className="text-lg text-gray-600">Sao Paulo, SP</p>
                        <p className="text-lg text-gray-600">Brazil</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-700">{translations.email}</h3>
                        <p className="text-lg text-gray-600">info@verzantlias-school.academy</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-700">{translations.phone}</h3>
                        <p className="text-lg text-gray-600">+55 11 1234-5678</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;