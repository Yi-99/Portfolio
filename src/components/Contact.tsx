import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to say hello, I'd love to hear from you.
        </p>
        
        <button className="px-8 py-3 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-300 rounded-sm mb-12 hover:cursor-pointer">
          Contact Me
        </button>
        
        <div className="flex justify-center space-x-8 text-sm text-gray-600 mb-12">
          <a href="https://www.linkedin.com/in/yirang-lim/" className="hover:text-gray-900 transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/yi-99" className="hover:text-gray-900 transition-colors">
            GitHub
          </a>
        </div>

        <div className="flex justify-center space-x-8 text-sm text-gray-600">
          <p className="text-gray-400">
            ylim.8299@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
