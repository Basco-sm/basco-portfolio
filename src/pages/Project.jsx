import React from 'react';
import vid1 from '../assets/videos/compressed_00.44.09.mp4';
import vid2 from '../assets/videos/compressed_00.52.08.mp4';
import vid3 from '../assets/videos/compressed_00.56.24.mp4';
const projects = [
  {
    id: 1,
    title: 'FIRST PERSONAL FULLSTACK WEBSITE',
    description: 'This is a personal car website project I worked on.',
    media: (
      <video
        src={vid1}
        controls
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    id: 2,
    title: 'UI/UX project',
    description: 'Quickpick is an ecommerce website I did to show my skils and understanding in UI/UX',
    media: (
      <video
        src={vid3}
        controls
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    id: 3,
    title: 'FIRST GROUP PROJECT',
    description: 'Devvisionary is a group project that gets blogs and allow user to login in. It is purely frontend.',
    media: (
      <video
        src={vid2}
        controls
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    id: 4,
    title: 'IA FOR QUICKPICK',
    description: 'This is the information arxhitecture of the quickpick project.',
    media: (
      <a
        href="https://www.figma.com/board/uk5gWCJcIWCVIVULamUrC6/ia-for-quickpick?node-id=0-1&p=f&t=TVdv80kPGKUbhk9U-0"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full h-48 bg-indigo-100 dark:bg-indigo-900 rounded flex text-5xl text-center mt-10 p-10 text-indigo-700 dark:text-indigo-300 font-semibold hover:bg-indigo-200 dark:hover:bg-indigo-800 transition"
      >
        View IA
      </a>
    ),
    github: null,
    demo: null,
  },
  
  {
    id: 5,
    title: 'USER FLOW FOR QUICKPICK',
    description: 'This is the user flow of the quickpick project.',
    media: (
      <a
        href="https://www.figma.com/board/WXMozjtkaQMo73pPnJlJh1/USER-FLOW-FOR-QUICK-PICK?t=TVdv80kPGKUbhk9U-0"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full h-48 bg-indigo-100 dark:bg-indigo-900 rounded flex text-5xl text-center mt-10 p-10  text-indigo-700 dark:text-indigo-300 font-semibold hover:bg-indigo-200 dark:hover:bg-indigo-800 transition"
      >
        View User Flow
      </a>
    ),
    github: null,
    demo: null,
  },
  {
    id: 6,
    title: 'GOOGLE FORM SKILLS',
    description: 'This is a google form i used to get user feedback on ecommerce website.',
    media: (
      <a
        href="https://forms.gle/cu4mRCPN2oxM6TWU9"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full h-48 bg-indigo-100 dark:bg-indigo-900 rounded flex text-5xl text-center mt-10 p-10  text-indigo-700 dark:text-indigo-300 font-semibold hover:bg-indigo-200 dark:hover:bg-indigo-800 transition"
      >
        View Google Form
      </a>
    ),
    github: null,
    demo: null,
  },
];


export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-indigo-700 dark:text-cyan-400 mt-10">
       My Projects
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ id, title, description, media, github, demo }) => (
          <div
            key={id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-indigo-500/50 transition-shadow duration-300"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              {media}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                {title}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
              <div className="flex space-x-4">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-cyan-400 hover:underline font-semibold"
                  >
                    GitHub
                  </a>
                )}
                {demo && (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-cyan-400 hover:underline font-semibold"
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
