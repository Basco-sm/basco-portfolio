import React from 'react';
import { motion } from 'framer-motion';
import Profilepic from '../assets/images/IMG-20240705-WA0265.jpg';

export default function About() {
  return (
    <motion.main
      className="mt-24 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-24 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-indigo-600 dark:text-cyan-400">
          About Me
        </h1>
        <p className="mx-auto text-lg max-w-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Hi, I'm Toyinsola — a Computer Science student at the University of Guelph on a mission to build software that makes
          a real difference. I believe that great software shouldn't just run efficiently behind the scenes but also need to be intuitive,
          accessible, and meaningful to the person using it. Whether I am writing backend API logic using Node.js or sketching out user flows
          in Figma, my goal is to always build clean, modular components that keep codebase maintainable. I take total ownership of my development workflow, 
          from mapping user requirements to conducting deep root-cause debugging when things don't go as planned.
        </p>
      </section>

      {/* Profile Image */}
      <section className="mb-20 flex justify-center">
        {/* Replace with your real image */}
        <img
          src={Profilepic}
          alt="Basco Profile"
          className="rounded-full w-56 h-56 shadow-lg"
          style={{ maxWidth: '100%' }}
        />
      </section>
      <p className="mx-auto text-lg max-w-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          When I'm not debugging code or building user interfaces, I like to keep my mind and body active. You can find me out playind soccer, 
          basketball, or hitting the ice for some skating. Playing sports has taught me a lot about team communication, rapid problem-solving, and 
          staying disciplined under pressure. On the creative side, I really love dancing, singing and catching up on great movies to unwind. For me, 
          keeping a healthy balance between competitive teamwork on the field and creative outlets at home is what keeps me energized, sharp, and motivated in my 
          software development work everyday.
        </p>

      {/* Learning Journey Timeline */}
      <section className='pb-16'>
        <h2 className="text-3xl font-bold mb-12 text-indigo-600 dark:text-cyan-400 text-center">
          My Learning Journey
        </h2>
        <div className='relative max-w-xl mx-auto px-4'>
        <div className='absolute left-[27px] top-2 bottom-2 w-0.5 bg-indigo-300 dark:bg-cyan-700'></div>
        <div className='space-y-12'>
        
          {[
            {
              year: '2024',
              title: 'Started exploring frontend',
              description:
                'Learned basics of HTML, CSS, and JavaScript. Built small projects with React and Tailwind CSS.',
            },
            {
              year: '2024',
              title: 'Explored UI/UX',
              description:
                'In my UI/UX learning journey, I’ve used tools like Figma and Google Forms to gather user feedback and define problems, craft user personas, map user flows, and build information architecture. These small projects have helped me understand how to design with users in mind and create practical, user-centered solutions.',
            },
            {
              year: '2025',
              title: 'Diving into backend & APIs',
              description:
                'I’ve deepened my knowledge of React, along with key frameworks and libraries. On the backend, I’ve worked with Express, MongoDB, and tools like Nodemon to build a full project, strengthening my fullstack development skills.',
            },
          ].map(({ year, title, description }) => (
            <div key={year} className="relative pl-12">
              <span className="absolute left-2.5 top-1.5 bg-indigo-600 dark:bg-cyan-400 rounded-full w-4 h-4 border-4 border-white dark:border-gray-900"></span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{year}: {title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        </div>
      </section>
    </motion.main>
  );
}
