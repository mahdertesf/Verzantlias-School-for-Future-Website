import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Calendar = ({ events }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const days = [];

    for (let i = 0; i < firstDayOfWeek; i++) {
        days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const day = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
        days.push(day);
    }

    const previousMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    }

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    }

    const eventOnDate = (date) => {
        return events.find(event => {
            const eventDate = new Date(event.date)
            return eventDate.getDate() === date.getDate() && eventDate.getMonth() === date.getMonth() && eventDate.getFullYear() === date.getFullYear();
        });
    }

    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            month: 'long',
            year: 'numeric',
        }).format(date)
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
                <button onClick={previousMonth}><ChevronLeftIcon className="h-5 w-5" /></button>
                <h2 className="text-xl font-semibold">{formatDate(currentMonth)}</h2>
                <button onClick={nextMonth}><ChevronRightIcon className="h-5 w-5" /></button>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day =>
                    <div key={day} className="text-center font-semibold text-gray-600">{day}</div>)}
                {days.map((day, index) =>
                    <div key={index} className={`text-center border rounded p-2 ${day ? 'cursor-pointer hover:bg-gray-100 transition-colors duration-200' : ''} ${eventOnDate(day) ? "bg-blue-100 hover:bg-blue-200" : ''}`}>
                        {day && day.getDate()}
                        {eventOnDate(day) && <span className="block text-sm mt-1 text-blue-700 font-bold"> {eventOnDate(day).title}</span>}
                    </div>)}
            </div>
        </div>
    );
};

export default Calendar;