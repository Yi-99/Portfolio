import React from 'react';

const SelectedWorks: React.FC = () => {
  const projects = [
    {
      title: 'Hugging Hands',
      year: '2025',
      description: 'Repository for non-lab-made, natural, and dynamic videos containing American Sign Language',
      technologies: ['TypeScript', 'Supabase', 'AWS', 'React', 'Tailwindcss', 'Google Photos API'],
      image: '/hugging-hands.webp',
      link: 'https://hack-usu-2025.onrender.com/'
    },
    {
      title: 'Glod AI',
      year: '2024',
      description: 'Developed a tool that analyzes the skill gap between a position or a job description and a candidate\'s resume and generates a comprehensive career path and descriptive milestones to bridge the gap.',
      technologies: ['Typescript', 'Next.js', 'Tailwindcss', 'Supabase', 'Python', 'FastAPI', 'OpenAI API', 'AWS', 'Docker'],
      image: '/glod-ai.png',
      link: 'https://www.youtube.com/watch?v=uao6JdYdJZE'
    },
    // {
    //   title: 'Logos',
    //   year: '2025',
    //   description: '',
    //   technologies: ['React', 'Typescript', 'Tailwindcss', 'Supabase', 'PostgreSQL'],
    //   image: '/logos.png',
    //   link: 'https://logos.com'
    // }
  ];

  return (
    <section id="work" className="py-48 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-16">
          Passion Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg border border-gray-300" />
                </a>
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-medium text-gray-900">
                  {project.title}
                </h3>
                <span className="text-gray-500">{project.year}</span>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-x-2 gap-y-3">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
