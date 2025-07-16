import { details } from 'framer-motion/client';
import React from 'react';

const education = [
  {
    institution: 'University of Guelph',
    degree: 'Bachelor of Science in Computer Science',
    period: 'Still in school',

  },
  {
    institution: 'New Horizon',
    degree: 'Certificate of learning in frontend',
    period: 'July 2024 - February 2025',
    details: 'Learned HTML, CSS, Bootstrap, Wordpress, Javascript, React'

  },
  {
    institution: 'New Horizon',
    degree: 'Certificate of learning in UI/UX',
    period: 'November 2024 - March 2025',
    details: 'I’ve learned how to gather meaningful user feedback and apply it to improve a website’s experience. This helped me understand the value of user-centered and user-friendly design, as well as the importance of maintaining consistency across interfaces.'

  },
  {
    institution: 'New Horizon',
    degree: 'Certificate of learning in backend',
    period: 'February 2024 - June 2025',
    details:'Learned React, Mongo DB, Javascript, Express'

  },
];

const experience = [
  
];

const skills = [
  'React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Figma', 'Mongo DB'
];

export default function Resume() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-indigo-700 dark:text-cyan-400 mt-10">Resume</h1>

      {/* Education */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-700">Education</h2>
        {education.map(({ institution, degree, period, details }) => (
          <div key={institution} className="mb-6">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-cyan-400">{degree}</h3>
            <p className="text-gray-700 dark:text-gray-300">{institution} &mdash; <span className="italic">{period}</span></p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{details}</p>
          </div>
        ))}
      </div>

      {/* Experience */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Work Experience</h2>
        {experience.map(({ company, role, period, details }) => (
          <div key={company + role} className="mb-6">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-cyan-400">{role}</h3>
            <p className="text-gray-700 dark:text-gray-300">{company} &mdash; <span className="italic">{period}</span></p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{details}</p>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Skills</h2>
        <ul className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="bg-indigo-100 dark:bg-cyan-900 text-indigo-700 dark:text-cyan-400 px-4 py-2 rounded-full font-semibold"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
