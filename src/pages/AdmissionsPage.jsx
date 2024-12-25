import React, { useContext, useState } from 'react';
import FAQ from '../components/FAQ.jsx';
import { LanguageContext } from '../i18n.jsx';

const AdmissionsPage = () => {
    const { translations } = useContext(LanguageContext);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        transcript: null,
        message: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const faqs = [
        { question: translations.faqQuestion1, answer: translations.faqAnswer1 },
        { question: translations.faqQuestion2, answer: translations.faqAnswer2 },
        { question: translations.faqQuestion3, answer: translations.faqAnswer3 }
    ];

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">{translations.admissions}</h2>
            <h3 className="text-3xl font-semibold mb-4 text-gray-700">Verzantlias School for Future: A Scholarship-Based School</h3>
            <p className="mb-6 text-lg text-gray-600">Verzantlias School for Future is a tuition-free school that provides full scholarships to exceptional students who demonstrate outstanding academic performance in grade 8. We are committed to providing access to high-quality education for talented students regardless of their financial background. Admission is highly competitive, and based on merit.</p>
            <h3 className="text-3xl font-semibold mb-4 text-gray-700">{translations.process}</h3>
            <p className="mb-4 text-lg text-gray-600">{translations.processText}</p>
            <ol className="list-decimal list-inside mb-6 text-lg text-gray-600">
                <li>Submit your grade 8 academic transcript.</li>
                <li>Complete the entrance exam or interview.</li>
                <li>Submit your personal essay (if required).</li>
            </ol>
            <h3 className="text-3xl font-semibold mb-4 text-gray-700">{translations.dates}</h3>
            <ul className="list-disc list-inside mb-6 text-lg text-gray-600">
                <li>Application Deadline: February 1st</li>
                <li>Entrance Exam / Interview: Late February</li>
                <li>Acceptance Notification: March</li>
            </ul>
            <h3 className="text-3xl font-semibold mb-4 text-gray-700">Start Your Application</h3>
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-8">
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                        Address
                    </label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="transcript">
                        Grade 8 Transcript
                    </label>
                    <input
                        type="file"
                        name="transcript"
                        id="transcript"
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit Application
                    </button>
                </div>
            </form>
            <h3 className="text-3xl font-semibold mb-4 text-gray-700">{translations.faq}</h3>
            {faqs.map(faq => <FAQ key={faq.question} question={faq.question} answer={faq.answer} />)}
        </div>
    );
};

export default AdmissionsPage;