import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import StudentLifePage from './pages/StudentLifePage';
import NewsEventsPage from './pages/NewsEventsPage';
import ContactPage from './pages/ContactPage';
import ParentsPortalPage from './pages/ParentsPortalPage';
import FacultyDirectoryPage from './pages/FacultyDirectoryPage'
import AlumniNetworkPage from './pages/AlumniNetworkPage';
import SupportUsPage from './pages/SupportUsPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import { LanguageProvider } from "./i18n.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    return (
        <LanguageProvider>
            <Router>
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/academics" element={<AcademicsPage />} />
                        <Route path="/admissions" element={<AdmissionsPage />} />
                        <Route path="/student-life" element={<StudentLifePage />} />
                        <Route path="/news-events" element={<NewsEventsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/parents-portal" element={<ParentsPortalPage />} />
                        <Route path="/faculty-directory" element={<FacultyDirectoryPage />} />
                        <Route path="/alumni-network" element={<AlumniNetworkPage />} />
                        <Route path="/support-us" element={<SupportUsPage />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    </Routes>
                </main>
                <Footer/>
            </Router>
        </LanguageProvider>
    );
};

export default App;