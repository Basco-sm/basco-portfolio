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
          Hi, I'm Toyinsola — a passionate fullstack developer and UI/UX enthusiast on a 
          mission to learn, build, and explore the endless possibilities of tech. I believe 
          great software blends clean, efficient code with thoughtful, user-centered design to 
          solve real-world problems. I strive to write modular, reusable components that keep my 
          codebase lean and maintainable — delivering more with less. Every product I work on is 
          shaped by real user feedback, because the best solutions begin with understanding the 
          people who use them.
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

      {/* Learning Journey Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-12 text-indigo-600 dark:text-cyan-400 text-center">
          My Learning Journey
        </h2>

        <ol className="relative border-l-2 border-indigo-300 dark:border-cyan-700 max-w-xl mx-auto space-y-14 px-4">
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
            <li key={year} className="ml-8 relative">
              <span className="absolute -left-6 top-2 bg-indigo-600 dark:bg-cyan-400 rounded-full w-8 h-8 border-4 border-white dark:border-gray-900"></span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{year}: {title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description}</p>
            </li>
          ))}
        </ol>
      </section>
    </motion.main>
  );
}
