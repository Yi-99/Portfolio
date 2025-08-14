import React from 'react';

const Expertise: React.FC = () => {
  const skills = {
    frontend: ['React', 'Angular', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', '.NET CORE', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Microsoft SQL Server'],
    tools: ['Git', 'Docker', 'AWS', 'Github Actions'],
    languages: ['TypeScript', 'Python', 'C#', 'JavaScript', 'SQL']
  };

  return (
    <section className="py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-16">
          Expertise
        </h2>
        <div className="grid md:grid-cols-4 gap-12 hover:cursor-default">
          <div className="text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-4 border-b border-gray-300 pb-2">
              Frontend
            </h3>
            <div className="space-y-3">
              {skills.frontend.map((skill) => (
                <div key={skill} className="text-gray-700">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-4 border-b border-gray-300 pb-2">
              Backend
            </h3>
            <div className="space-y-3">
              {skills.backend.map((skill) => (
                <div key={skill} className="text-gray-700">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-4 border-b border-gray-300 pb-2">
              Tools
            </h3>
            <div className="space-y-3">
              {skills.tools.map((skill) => (
                <div key={skill} className="text-gray-700">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-medium text-gray-900 mb-4 border-b border-gray-300 pb-2">
              Languages
            </h3>
            <div className="space-y-3">
              {skills.languages.map((skill) => (
                <div key={skill} className="text-gray-700">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
