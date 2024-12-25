import React from 'react';
import Hero from '../components/Hero.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import { AcademicCapIcon, GlobeAltIcon, UserGroupIcon, BookOpenIcon, LightBulbIcon } from "@heroicons/react/24/solid";

const HomePage = () => {
    return (
        <div>
            <Hero
                image="/assets/images/hero.jpg"
                heading="Welcome to Verzantlias School for Future"
                subheading="Empowering students to become innovative thinkers and compassionate leaders."
                buttonText="Learn More"
                buttonLink="/about"
            />
            <div className="container mx-auto p-4">
                <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={<AcademicCapIcon className="h-12 w-12 text-blue-500" />}
                        title="Academic Excellence"
                        text="We offer a rigorous core curriculum that includes mathematics, science, English language arts, social studies, and foreign language."
                    />
                    <FeatureCard
                        icon={<GlobeAltIcon className="h-12 w-12 text-green-500" />}
                        title="Global Perspective"
                        text="Our programs emphasize international mindedness and inquiry-based learning."
                    />
                    <FeatureCard
                        icon={<UserGroupIcon className="h-12 w-12 text-red-500" />}
                        title="Community Engagement"
                        text="We foster a welcoming environment and promote understanding and respect among our community members."
                    />
                    <FeatureCard
                        icon={<BookOpenIcon className="h-12 w-12 text-yellow-500" />}
                        title="Extensive Resources"
                        text="Our library and tutoring services support students in their academic endeavors."
                    />
                    <FeatureCard
                        icon={<LightBulbIcon className="h-12 w-12 text-purple-500" />}
                        title="Innovative Learning"
                        text="We embrace creativity and encourage experimentation in learning."
                    />
                </div>
                <div className="mt-12 space-y-12">
                    <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">About Verzantlias School for Future</h2>
                        <p className="mb-4">Verzantlias School for Future is dedicated to providing a transformative educational experience that empowers students to become innovative thinkers, compassionate leaders, and engaged global citizens. We strive to cultivate a learning environment that fosters intellectual curiosity, critical thinking, and a deep commitment to personal growth and community responsibility.</p>
                    </section>
                    <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Mission</h2>
                        <p className="mb-4">To be a leading educational institution that prepares students for the challenges and opportunities of a rapidly changing world. We aim to equip students with the knowledge, skills, and values necessary to excel in higher education, contribute meaningfully to society, and shape a better future.</p>
                    </section>
                    <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Core Values</h2>
                        <ul className="list-disc list-inside mb-4">
                            <li><strong>Integrity:</strong> We uphold the highest standards of honesty, ethics, and accountability in all our actions.</li>
                            <li><strong>Innovation:</strong> We embrace creativity, encourage experimentation, and seek new approaches to learning and problem-solving.</li>
                            <li><strong>Inclusivity:</strong> We celebrate diversity, foster a welcoming environment for all, and promote understanding and respect among our community members.</li>
                            <li><strong>Excellence:</strong> We strive for the highest standards in all aspects of education, from academics to extracurricular activities.</li>
                            <li><strong>Collaboration:</strong> We believe in the power of teamwork and cooperation, encouraging students, faculty, and staff to work together towards common goals.</li>
                        </ul>
                    </section>
                    <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">History</h2>
                        <p className="mb-4">Verzantlias School for Future was founded in 2010 by Dr. Eleanor Vance, a visionary educator with a passion for project-based learning. The school began as a small initiative focused on providing a more engaging and hands-on learning experience. Over the years, it has evolved into a prestigious high school known for its academic rigor, commitment to community service, and innovative approach to education. It has attracted students from diverse backgrounds who are passionate about making a difference in the world.</p>
                    </section>
                    <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Academic Programs</h2>
                        <p className="mb-4">Verzantlias offers a comprehensive and challenging curriculum designed to prepare students for the rigors of higher education and the demands of the 21st-century workplace. Our academic programs include:</p>
                        <ul className="list-disc list-inside mb-4">
                            <li><strong>Grades 9-12:</strong> A rigorous core curriculum that includes mathematics, science, English language arts, social studies, and foreign language.</li>
                            <li><strong>Electives:</strong> A wide range of elective courses in areas such as fine arts, computer science, music, and physical education to allow students to explore their interests and talents.</li>
                            <li><strong>Specialized Programs:</strong>
                                <ul className="list-disc list-inside ml-4">
                                    <li><strong>Advanced Placement (AP):</strong> A variety of AP courses are available for students seeking college-level work while in high school. These may include: AP Calculus, AP Physics, AP English Literature, AP Computer Science, AP Statistics, and AP US History.</li>
                                    <li><strong>International Baccalaureate (IB):</strong> The IB program offers a globally recognized curriculum that emphasizes international mindedness and inquiry-based learning. These courses may include: IB Math, IB Chemistry, IB English, IB Biology, IB Economics, and IB Global Politics.</li>
                                    <li><strong>Vestibular Preparation:</strong> Specific courses dedicated to preparing students for the Brazilian university entrance exam (Vestibular).</li>
                                </ul>
                            </li>
                            <li><strong>Learning Resources:</strong>
                                <ul className="list-disc list-inside ml-4">
                                    <li><strong>Library:</strong> A well-stocked library with an extensive collection of books, periodicals, and digital resources.</li>
                                    <li><strong>Tutoring:</strong> Peer tutoring and faculty-led tutoring services to support students in their academic endeavors.</li>
                                    <li><strong>Technology:</strong> State-of-the-art computer labs and access to online learning platforms.</li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                    <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Admissions Process</h2>
                        <p className="mb-4">Verzantlias School for Future is a free, scholarship-based school that provides full scholarships to exceptional students who have demonstrated outstanding academic performance in grade 8. Admission is highly competitive, based on merit, and requires:</p>
                        <ul className="list-disc list-inside mb-4">
                            <li><strong>Grade 8 Transcript:</strong> Submission of a complete grade 8 academic transcript, showing excellent performance.</li>
                            <li><strong>Entrance Exam/Interview:</strong> Completion of an entrance exam or interview (if requested) to further assess student potential.</li>
                            <li><strong>Personal Essay (Optional):</strong> Submission of a personal essay, which can help us understand the student’s personality and aspirations.</li>
                            <li><strong>No Application Fees:</strong> There are no application fees to apply for our school.</li>
                        </ul>
                        <p className="mb-4"><strong>Important Dates:</strong></p>
                        <ul className="list-disc list-inside mb-4">
                            <li><strong>Application Deadline:</strong> February 1st</li>
                            <li><strong>Entrance Exam/Interview:</strong> Late February</li>
                            <li><strong>Acceptance Notification:</strong> March</li>
                        </ul>
                    </section>
                    <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Student Life</h2>
                        <p className="mb-4">Verzantlias offers a vibrant and supportive student life with a wide range of extracurricular activities:</p>
                        <ul className="list-disc list-inside mb-4">
                            <li><strong>Clubs:</strong> A diverse selection of clubs, including debate club, robotics club, art club, chess club, and more.</li>
                            <li><strong>Athletics:</strong> A variety of sports programs, including basketball, soccer, track and field, and swimming.</li>
                            <li><strong>Student Support:</strong> A comprehensive suite of services, including guidance counseling, academic tutoring, and college advising.</li>
                            <li><strong>Community Engagement:</strong> Opportunities for students to participate in community service projects and develop their leadership skills.</li>
                            <li><strong>School Events:</strong> A calendar full of fun school events and traditions, such as the Fall Festival, sports games, and cultural celebrations.</li>
                        </ul>
                    </section>
                    <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Faculty and Staff</h2>
                        <p className="mb-4">The faculty and staff at Verzantlias are highly qualified and deeply committed to the success of their students. They include experienced educators, passionate mentors, and dedicated support staff. The school's leadership includes:</p>
                        <ul className="list-disc list-inside mb-4">
                            <li><strong>Dr. Sarah Johnson (Principal):</strong> A seasoned educator with a deep passion for creating a thriving and supportive learning environment.</li>
                            <li><strong>Prof. Jane Smith (Head of Science Department):</strong> An experienced scientist who is deeply passionate about helping students excel in science.</li>
                            <li><strong>Prof. Thomas Lee (Head of Art Department):</strong> An experienced art educator who has years of experience in helping students flourish in the arts.</li>
                        </ul>
                    </section>
                    <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                        <p className="mb-4"><strong>Address:</strong> Rua da Liberdade, 123, São Paulo, SP, Brazil</p>
                        <p className="mb-4"><strong>Email:</strong> info@verzantlias-school.academy</p>
                        <p className="mb-4"><strong>Admissions Email:</strong> admissions@verzantlias-school.academy</p>
                        <p className="mb-4"><strong>Phone:</strong> +55 11 1234-5678</p>
                    </section>
                    <section className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
                        <p className="mb-4">Verzantlias is committed to diversity, equity, and inclusion (DEI) and actively promotes a welcoming and respectful environment for all. The school encourages parental involvement and provides resources for parents to stay engaged in their child's education. Verzantlias strives to prepare students to be not just academically successful, but also compassionate, responsible, and innovative global citizens.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default HomePage;