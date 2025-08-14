import React from 'react';

const SelectedWorks: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      year: '2024',
      description: 'A modern, scalable e-commerce solution built with React and Node.js',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      image: '/placeholder-project-1.jpg'
    },
    {
      title: 'Design System',
      year: '2024',
      description: 'Comprehensive component library and design tokens for product teams',
      technologies: ['TypeScript', 'Storybook', 'Figma'],
      image: '/placeholder-project-2.jpg'
    }
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
              <div className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Project Image</span>
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
              <div className="flex flex-wrap gap-2">
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
