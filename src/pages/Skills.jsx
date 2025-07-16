import React from 'react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 70 },
      { name: 'JavaScript', level: 70 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'HTML & CSS', level: 95 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express', level: 70 },
      { name: 'MongoDB', level: 70 },
      { name: 'REST APIs', level: 80 },
    ],
  },
  {
    category: 'Design and Research Tools',
    skills: [
      { name: 'Figma', level: 85 },
      { name: 'Google Forms', level: 90 },
      { name: 'ChatGPT', level: 90 },
      { name: 'In-Person Interview', level: 80 },
    ],
  },
  {
    category: 'Office Tools',
    skills: [
      { name: 'Word', level: 95 },
      { name: 'Excel', level: 85 },
      { name: 'Powerpoint', level: 80 },
      { name: 'Access', level: 85 },
    ],
  },
];

function SkillBar({ skill }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-600 dark:text-gray-400 font-semibold">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <div
          className="bg-indigo-600 dark:bg-cyan-400 h-3 rounded-full transition-width duration-500"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10 text-indigo-700 dark:text-cyan-400 mt-10">My Skills</h1>
      <div className="grid gap-10 md:grid-cols-3">
        {skillCategories.map(({ category, skills }) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">{category}</h2>
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
