import React from 'react';
import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';

const projects = [
  {
    image: project1,
    title: 'Retail Analytics Platform',
    description: 'A full-stack retail analytics platform applying association rule mining and K-Means clustering to segment 1,000+ customer transactions — from data processing to UI design and deployment.',
    tags: ['Python', 'Streamlit', 'Machine Learning'],
    liveUrl: 'https://retailanalyticsapp-rmodmea6vv5kbaseanbiva.streamlit.app/',
    codeUrl: 'https://github.com/Tamilarasu04/RetailAnalyticsApp',
  },
  {
    image: project2,
    title: 'GestureAI — Hand Gesture Recognition',
    description: 'Real-time hand gesture recognition with multilingual translation and text-to-speech, using browser-side MediaPipe hand tracking and a Flask + scikit-learn backend across 13 languages.',
    tags: ['React', 'Flask', 'MediaPipe', 'scikit-learn'],
    liveUrl: 'https://gesture-recognition-app-seven.vercel.app',
    codeUrl: 'https://github.com/Tamilarasu04/gesture-recognition-app',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#f4f4f4] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans"
    >
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div data-aos="fade-up" className="max-w-2xl mb-16">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-8 shadow-sm bg-white">
            Selected work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Projects I've built
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            A selection of full-stack applications showcasing clean UI, scalable architecture, and optimized performance.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`bg-white rounded-[1.5rem] overflow-hidden border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] hover:scale-[1.02] transition-all duration-500 group ${
                index === projects.length - 1 && projects.length % 2 !== 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="w-full aspect-video overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black mb-3 tracking-tight text-gray-900">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed font-medium text-gray-500 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-bold px-3 py-1 rounded-full bg-[#f4f4f4] text-gray-600 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#ff2a2a] hover:text-black transition-colors duration-300"
                    >
                      Live Demo &rarr;
                    </a>
                  )}
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-gray-500 hover:text-black transition-colors duration-300"
                  >
                    Source Code &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
