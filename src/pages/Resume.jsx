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
            Review my resume or download a copy for your records.
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
            <span>+1 (548) 316-4218</span>
            <span>•</span>
            <a href="mailto:olamide.toyinsola@gmail.com" className="hover:underline text-indigo-500 dark:text-cyan-400">olamide.toyinsola@gmail.com</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/toyinsola-obayemi-408b69350/" target="_blank" rel="noreferrer" className="hover:underline text-indigo-500 dark:text-cyan-400">://linkedin.com</a>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="space-y-2">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
            Highly motivated Computer Science Co-op student with hands-on experience building web and mobile applications from scratch, utilizing the MERN stack and React Native alongside AI-assisted tools to speed up delivery while maintaining a strict focus on system verification and debugging.
          </p>
        </section>

        <section className="space-y-6">
          <h3 className="text-md font-bold tracking-wider text-indigo-600 dark:text-cyan-400 uppercase border-b border-gray-100 dark:border-gray-900 pb-1">
            EXPERIENCE
          </h3>

          {/* Temotoy Temtop Limited */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row justify-between font-semibold text-gray-900 dark:text-white">
              <span>
                Junior IT Consultant (Intern) |{" "}
                <span className="font-normal text-gray-500 dark:text-gray-400">
                  Temotoy Temtop Limited
                </span>
              </span>
              <span className="text-sm font-normal text-gray-500">
                September 2024 to April 2025
              </span>
            </div>
            <p className="text-xs italic text-gray-600 dark:text-gray-400">
              <span className="font-semibold not-italic">Tech Stack:</span> React, Node.js, Express, MongoDB, Tailwind CSS, Postman
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
              <li>
                Built a custom car sales web platform from scratch using React, Node.js, Express, and MongoDB to modernize vehicle browsing and customer service requests, featuring dynamic specification pages and an automotive news section.
              </li>
              <li>
                Streamlined vehicle inventory tracking and client inquiry records into structured digital spreadsheets, reducing manual lookup times and data entry errors for sales staff.
              </li>
              <li>
                Diagnosed and resolved daily workstation, network, and software issues for non technical staff, writing clear reference guides for everyday digital tools.
              </li>
            </ul>
          </div>
        </section>
        <section className="space-y-6">
          <h3 className="text-md font-bold tracking-wider text-indigo-600 dark:text-cyan-400 uppercase border-b border-gray-100 dark:border-gray-900 pb-1">
            PERSONAL PROJECTS
          </h3>

          {/* MindTock */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row justify-between font-semibold text-gray-900 dark:text-white">
              <span>MindTock | <span className="font-normal text-gray-500 dark:text-gray-400">Full-Stack Developer</span></span>
              <span className="text-sm font-normal text-gray-500">July 2026 - Present</span>
            </div>
            <p className="text-xs italic text-gray-600 dark:text-gray-400">
              <span className="font-semibold not-italic">Project Scope:</span> Architected, verified, and published a live mobile utility application to the Google Play Store, managing the full release pipeline.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
              <li>Architected and published a challenge-based Android alarm app to the Google Play Store using React Native, Expo SDK 54, TypeScript, and Node.js inside a pnpm monorepo.</li>
              <li>Integrated OpenAI with an Express 5 backend using Zod schema validation, OpenAPI, and TanStack React Query to generate dynamic AI roasts, trivia, and conversational challenges without exposing API keys in the APK.</li>
              <li>Structured local device persistence with AsyncStorage and React Context to manage user profiles, alarm schedules, and streak statistics offline.</li>
              <li>Isolated critical background thread and foreground service regressions by analyzing native Android device logs, guiding Replit via targeted prompts to resolve Kotlin AlarmManager and Gradle build configurations.</li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-3">
          <h3 className="text-md font-bold tracking-wider text-indigo-600 dark:text-cyan-400 uppercase border-b border-gray-100 dark:border-gray-900 pb-1">
            TECHNICAL SKILLS
          </h3>
          <ul className="list-none space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
            <li><span className="font-semibold text-gray-900 dark:text-white">Languages:</span> Java, JavaScript, TypeScript, C, Kotlin, HTML, CSS</li>
            <li><span className="font-semibold text-gray-900 dark:text-white">Development Tools:</span> Git, GitHub, Postman, Claude, Google Play Console</li>
            <li><span className="font-semibold text-gray-900 dark:text-white">Databases & OS:</span> MongoDB, Windows(10/11), macOS</li>
            <li><span className="font-semibold text-gray-900 dark:text-white">Frameworks and Libraries:</span> React, React Native, Node.js, Express.js, Expo</li>
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
                <span>University of Guelph</span>
                <span className="text-sm font-normal text-gray-500">2025 – Expected June 2030</span>
              </div>
              <span className="text-xs text-gray-500 block ml-4">Bachelor of Computing – Computer Science Co-op</span>
            </li>
          </ul>
        </section>

        {/* Volunteer & Certifications */}
        <section className="space-y-3">
          <h3 className="text-md font-bold tracking-wider text-indigo-600 dark:text-cyan-400 uppercase border-b border-gray-100 dark:border-gray-900 pb-1">
            Volunteer & Certifications
          </h3>
          <ul className="list-none space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
            <li><span className="font-semibold text-gray-900 dark:text-white"></span> Technical Peer Volunteer — Google Developer Student Club (GDSC)</li>
            <li><span className="font-semibold text-gray-900 dark:text-white"></span> Software Verification & Relational Database Design Academic Competencies</li>
          </ul>
        </section>

      </div>
    </motion.main>
  );
}
