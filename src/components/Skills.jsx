import React from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'Firebase'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div data-aos="fade-up" className="max-w-2xl mb-16">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            What I work with
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            A toolkit built around modern, production-ready web technologies across the full stack.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="rounded-[1.5rem] p-8 bg-[#f4f4f4] border border-gray-200 hover:bg-[#ff2a2a] hover:border-red-400 hover:shadow-[0_20px_50px_rgba(255,42,42,0.4)] transition-all duration-500 group"
            >
              <h3 className="text-xl font-black mb-6 tracking-tight text-gray-900 group-hover:text-white transition-colors duration-500">
                {category.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm font-semibold text-gray-500 group-hover:text-red-50 transition-colors duration-500"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
