import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import { LanguageContext } from '../i18n.jsx';

const translations = {
    home: 'Home',
    about: 'About',
    academics: 'Academics',
    academicLink: 'Academic Programs',
    admissionsLink: 'Admissions',
    studentLife: 'Student Life',
    studentLifeLink: 'Student Life',
    newsEventsLink: 'News & Events',
    contactLink: 'Contact',
    more: 'More',
    parents: 'Parents Portal',
    faculty: 'Faculty Directory',
    alumni: 'Alumni Network',
    supportUs: 'Support Us',
    privacyPolicy: 'Privacy Policy'
};

const renderHeader = () => {
    render(
        <LanguageContext.Provider value={{ translations }}>
            <Router>
                <Header />
            </Router>
        </LanguageContext.Provider>
    );
};

test('renders logo link', () => {
    renderHeader();
    const logoLink = screen.getByAltText(/Verzantlias Logo/i);
    expect(logoLink).toBeInTheDocument();
});

test('renders navigation links', () => {
    renderHeader();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Academics/i)).toBeInTheDocument();
    expect(screen.getByText(/Student Life/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    expect(screen.getByText(/More/i)).toBeInTheDocument();
});

test('toggles mobile menu', () => {
    renderHeader();
    const menuButton = screen.getByRole('button');
    fireEvent.click(menuButton);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    fireEvent.click(menuButton);
    expect(screen.queryByText(/Home/i)).not.toBeInTheDocument();
});

test('opens dropdown menus on click', () => {
    renderHeader();
    const academicsButton = screen.getByText(/Academics/i);
    fireEvent.click(academicsButton);
    expect(screen.getByText(/Academic Programs/i)).toBeInTheDocument();
    expect(screen.getByText(/Admissions/i)).toBeInTheDocument();

    const studentLifeButton = screen.getByText(/Student Life/i);
    fireEvent.click(studentLifeButton);
    expect(screen.getByText(/Student Life/i)).toBeInTheDocument();
    expect(screen.getByText(/News & Events/i)).toBeInTheDocument();

    const moreButton = screen.getByText(/More/i);
    fireEvent.click(moreButton);
    expect(screen.getByText(/Parents Portal/i)).toBeInTheDocument();
    expect(screen.getByText(/Faculty Directory/i)).toBeInTheDocument();
    expect(screen.getByText(/Alumni Network/i)).toBeInTheDocument();
    expect(screen.getByText(/Support Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
});