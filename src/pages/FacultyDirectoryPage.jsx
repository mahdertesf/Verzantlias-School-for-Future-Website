import React from 'react';
import StaffCard from '../components/StaffCard.jsx';
const FacultyDirectoryPage = () => {
    const staffs = [
        { name: "Dr. Sarah Johnson", title: "Principal", department:"Administration", image: "/assets/images/principal.jpg", email: "principal.johnson@verzantlias-school.academy"},
         { name: "Prof. Jane Smith", title: "Head of Science Department",department:"Science", image: "/assets/images/head-1.jpg", email:"jane.smith@verzantlias-school.academy" },
         { name: "Prof. Thomas Lee", title: "Head of Art Department", department:"Art", image: "/assets/images/head-2.jpg", email: "thomas.lee@verzantlias-school.academy" },
           { name: "Prof. Maria Silva", title: "English Teacher", department: "English", image: "/assets/images/staff-1.jpg", email: "maria.silva@verzantlias-school.academy"},
             { name: "Prof. Ricardo Oliveira", title: "Math Teacher", department:"Math", image: "/assets/images/staff-2.jpg", email:"ricardo.oliveira@verzantlias-school.academy" },
          { name: "Prof. Ana Santos", title: "History Teacher", department:"History", image: "/assets/images/staff-3.jpg", email: "ana.santos@verzantlias-school.academy" },
       { name: "Prof. Paulo Costa", title: "Physical Education Teacher", department: "Physical Education", image: "/assets/images/staff-4.jpg", email: "paulo.costa@verzantlias-school.academy" },
    ];
    return (
        <div className="container mx-auto p-4">
           <h2 className="text-3xl font-bold text-center mb-8">Faculty and Staff Directory</h2>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
               {staffs.map(staff => <StaffCard key={staff.name} staff={staff} />)}
           </div>
        </div>
    );
};

export default FacultyDirectoryPage;