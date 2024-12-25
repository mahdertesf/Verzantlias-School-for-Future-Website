import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const FAQ = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded-md mb-2 bg-white p-4 hover:shadow-md transition duration-200 transform hover:scale-105">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{question}</h3>
                <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none" >
                    <ChevronDownIcon className={`h-6 w-6 transition-transform duration-200 ${isOpen ? 'rotate-180' : '' }`} />
                </button>
            </div>
            {isOpen && <div className="mt-2 text-gray-700 ">{answer}</div>}
        </div>
    );
};

export default FAQ