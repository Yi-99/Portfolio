import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-16">
          About
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              With over 2 years of experience in software engineering, I specialize in creating beautiful, functional software solutions that solve real-world problems.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My passion lies in the intersection of design and technology, where clean code meets intuitive user experiences. I believe in the power of simplicity and attention to detail.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, constantly challenging my theoretical knowledge and practical skills by participating in hackathons, or daydreaming about the complexity of the universe and my place within it.
            </p>
          </div>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-lg">Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
