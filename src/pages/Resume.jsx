import React from 'react';
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <motion.main
      className="mt-24 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Action Header Block */}
      <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-300 dark:border-gray-800 pb-6 mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-extrabold text-indigo-600 dark:text-cyan-400 tracking-tight">
            My Resume
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Review my experience or download a copy for your records.
          </p>
        </div>
        {/* DOWNLOAD BUTTON */}
        <a
          href="/Toyinsola_Obayemi_Resume.pdf" 
          download="Toyinsola_Obayemi_Resume.pdf"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-semibold px-5 py-2.5 rounded-md shadow transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://w3.org">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          Download PDF
        </a>
      </div>

      {/* Resume Document Wrapper (Simulates real single-column layout) */}
      <div className="bg-white dark:bg-gray-950 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-800 space-y-8 text-left">
        
        {/* Contact Block */}
        <div className="text-center sm:text-left border-b border-gray-100 dark:border-gray-900 pb-6">
          <h2 className="text-2xl font-bold tracking-wide">TOYINSOLA OBAYEMI</h2>
          <p className="text-indigo-600 dark:text-cyan-400 font-medium text-sm tracking-wider uppercase mt-1">
            Software Developer (Student Position)
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center sm:justify-start text-sm text-gray-600 dark:text-gray-400 mt-3">
            <span>Guelph, ON</span>
            <span>•</span>
            <span>+1 (226) 270-2165</span>
            <span>•</span>
            <a href="mailto:tobayemi@uoguelph.ca" className="hover:underline text-indigo-500 dark:text-cyan-400">tobayemi@uoguelph.ca</a>
            <span>•</span>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline text-indigo-500 dark:text-cyan-400">://linkedin.com</a>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="space-y-2">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
            Highly motivated Computer Science Co-op student with hands-on experience building web and mobile applications from scratch, leveraging the MERN stack and React Native alongside AI-assisted tools to accelerate delivery while maintaining a strict focus on system verification and debugging.
          </p>
        </section>

        {/* Experience Section */}
        <section className="space-y-6">
          <h3 className="text-md font-bold tracking-wider text-indigo-600 dark:text-cyan-400 uppercase border-b border-gray-100 dark:border-gray-900 pb-1">
            Experience
          </h3>

          {/* MindTock */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row justify-between font-semibold text-gray-900 dark:text-white">
              <span>MindTock Mobile Application | <span className="font-normal text-gray-500 dark:text-gray-400">Full-Stack Developer</span></span>
              <span className="text-sm font-normal text-gray-500">July 2025 - Present</span>
            </div>
            <p className="text-xs italic text-gray-600 dark:text-gray-400">
              <span className="font-semibold not-italic">Project Scope:</span> Architected, verified, and published a live mobile utility application to the Google Play Store, managing the full release pipeline.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
              <li>Utilized AI-assisted coding tools including Claude and Cursor to rapidly prototype frontend forms, accelerating the initial development lifecycle.</li>
              <li>Isolated and resolved critical runtime regressions within background threads by analyzing native hardware device logs and build configurations.</li>
              <li>Programmed native background execution logic using Kotlin to guarantee 100% alarm delivery and system reliability when devices are locked.</li>
              <li>Integrated the OpenAI API into an asynchronous backend framework by designing custom data-handling guardrails and API fallback parameters.</li>
            </ul>
          </div>

          {/* Car Website */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row justify-between font-semibold text-gray-900 dark:text-white">
              <span>Car E-Commerce Website | <span className="font-normal text-gray-500 dark:text-gray-400">Full-Stack Developer</span></span>
              <span className="text-sm font-normal text-gray-500">June 2025 – August 2025</span>
            </div>
            <p className="text-xs italic text-gray-600 dark:text-gray-400">
              <span className="font-semibold not-italic">Project Scope:</span> Developed a full-stack web application project featuring a hardcoded frontend car inventory catalog, dedicated vehicle detail pages, an automotive news blog, and a backend-integrated service appointment booking system.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
              <li>Created reusable React components to dynamically render individual vehicle specification pages and layout the automotive news blog from frontend data arrays.</li>
              <li>Built an automated appointment booking system from scratch to capture user data and handle service scheduling workflows.</li>
              <li>Used Node.js and Express.js to build the backend logic for processing service appointment requests.</li>
              <li>Used Postman to test and verify the backend API booking routes to ensure user appointment data flows correctly.</li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-3">
          <h3 className="text-md font-bold tracking-wider text-indigo-600 dark:text-cyan-400 uppercase border-b border-gray-100 dark:border-gray-900 pb-1">
            Skills
          </h3>
          <ul className="list-none space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
            <li><span className="font-semibold text-gray-900 dark:text-white">● Languages:</span> Java, TypeScript, JavaScript, C, Kotlin, HTML, CSS</li>
            <li><span className="font-semibold text-gray-900 dark:text-white">● Frameworks:</span> React Native, React, Node.js, Express.js, Mongoose.js, Expo</li>
            <li><span className="font-semibold text-gray-900 dark:text-white">● Databases & OS:</span> MongoDB, Relational Database Design, Windows, macOS</li>
            <li><span className="font-semibold text-gray-900 dark:text-white">● Tools & Focus:</span> Git, GitHub Workflows, Postman, Claude, Cursor, Agile/Scrum</li>
          </ul>
        </section>

        {/* Education Section */}
        <section className="space-y-3">
          <h3 className="text-md font-bold tracking-wider text-indigo-600 dark:text-cyan-400 uppercase border-b border-gray-100 dark:border-gray-900 pb-1">
            Education
          </h3>
          <ul className="list-none space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>
              <div className="flex justify-between font-semibold text-gray-900 dark:text-white">
                <span>● University of Guelph</span>
                <span className="text-sm font-normal text-gray-500">2025 – Expected April 2029</span>
              </div>
              <span className="text-xs text-gray-500 block ml-4">Bachelor of Computing (Honours) – Computer Science Co-op</span>
            </li>
            <li>
              <div className="flex justify-between font-semibold text-gray-900 dark:text-white">
                <span>● New Horizons Systems</span>
                <span className="text-sm font-normal text-gray-500">2025</span>
              </div>
              <span className="text-xs text-gray-500 block ml-4">FranklinCovey Leadership Program Certificate</span>
            </li>
          </ul>
        </section>

        {/* Volunteer & Certifications */}
        <section className="space-y-3">
          <h3 className="text-md font-bold tracking-wider text-indigo-600 dark:text-cyan-400 uppercase border-b border-gray-100 dark:border-gray-900 pb-1">
            Volunteer & Certifications
          </h3>
          <ul className="list-none space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
            <li><span className="font-semibold text-gray-900 dark:text-white">●</span> Technical Peer Volunteer — Google Developer Student Club (GDSC)</li>
            <li><span className="font-semibold text-gray-900 dark:text-white">●</span> Software Verification & Relational Database Design Academic Competencies</li>
          </ul>
        </section>

      </div>
    </motion.main>
  );
}
