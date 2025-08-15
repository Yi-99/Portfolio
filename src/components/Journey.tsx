import React from 'react';

const Journey: React.FC = () => {
  const timelineItems = [
    {
      year: 'May 2025 - Present',
      type: 'experience',
      tags: ['Experience', 'Current'],
      title: 'Jr. Full Stack Engineer',
      location: 'TDP Bakery • Chandler, AZ',
      description: 'Full-stack development for core platform features and re-envisioning software solutions built on old technologies into an effective and efficient scalable modern solutions.',
      technologies: ['React', 'Javascript', 'Tailwindcss', 'FastAPI', '.NET CORE', 'C#', 'Microsoft SQL Server',]
    },
    {
      year: 'Jan 2025',
      type: 'project',
      tags: ['Project'],
      title: 'TED the Therapeutic Bear',
      location: 'Draper, UT',
      description: 'Developed a backend service that will fetch a voiceover of a celebrity and save it to a storage bucket that will be used to play it on the teddy bear.',
      technologies: ['React', 'Typescript', 'Supabase', 'PostgreSQL']
    },
    {
      year: 'Dec 2024 - May 2025',
      type: 'experience',
      tags: ['Experience'],
      title: 'Frontend Engineer',
      location: 'Rollens Center for Technology and Entrepreneurship • Provo, UT',
      description: 'Developed a modern, responsive web application for the Rollens Center for Technology and Entrepreneurship, providing a seamless and intuitive user experience for visitors and students.',
      technologies: ['React', 'Javascript', 'Tailwindcss', 'Render', 'Figma'],
    },
    {
      year: 'Dec 2024',
      type: 'project',
      tags: ['Project'],
      title: 'Redo 2.0',
      location: 'Lehi, UT',
      description: 'Complete redesign and development of a modern e-commerce platform with focus on performance and user experience.',
      technologies: ['React', 'Javascript', 'Tailwindcss', 'Render', 'Supabase', 'PostgreSQL']
    },
    {
      year: 'Nov 2024',
      type: 'project',
      tags: ['Project'],
      title: 'Skill Gap Analyzer',
      location: 'Provo, UT',
      description: 'Developed a tool that analyzes the skill gap between a position or a job description and a candidate\'s resume and generates a comprehensive career path and descriptive milestones to bridge the gap.',
      technologies: ['React', 'Javascript', 'Tailwindcss', 'Render', 'Supabase', 'PostgreSQL']
    },
    {
      year: 'Sept 2024 - May 2025',
      type: 'experience',
      tags: ['Experience'],
      title: 'Full Stack Engineer Intern',
      location: 'Pollen Sense LLC • Provo, UT',
      description: 'Developed full-stack solutions for customer-facing and internal software, modernizing a web application to deliver real-time, reliable pollen data visualization and analysis through advanced meteorological sensor technology.',
      technologies: ['Angular', 'Typescript', 'Bootstrap', 'SASS', '.NET CORE', 'C#', 'Microsoft SQL Server', 'Firebase'],
      links: [
        {link: 'https://www.pollensense.com/', text: 'Pollen Sense', image: '/pollensense.png'}
      ]
    },
    {
      year: 'June 2024 - Aug 2024',
      type: 'project',
      tags: ['Project'],
      title: 'Glod AI',
      location: 'Provo, UT',
      description: 'Developed a tool that analyzes the skill gap between a position or a job description and a candidate\'s resume and generates a comprehensive career path and descriptive milestones to bridge the gap.',
      technologies: ['Python', 'FastAPI', 'OpenAI', 'AWS', 'Supabase', 'PostgreSQL', 'Docker', 'Next.js', 'Tailwindcss'],
    },
    {
      year: 'June 2023 - Sept 2024',
      type: 'experience',
      tags: ['Experience'],
      title: 'Backend Engineer',
      location: 'BYU Broadcasting • Provo, UT',
      description: 'Developed a scalable microservice leveraging AWS, enabling thousands of gigabytes of data on user interactions to be stored and analyzed by the Business Intelligence team.',
      technologies: ['Node.js', 'AWS', 'Docker', 'Redis', 'k6', 'Jest', 'Bitbucket'],
      links: [
        {link: 'https://www.byutv.org/', text: 'BYU TV', image: '/byutv.jpg'}, 
        {link: 'https://www.byuradio.org/', text: 'BYU Radio', image: '/byuradio.jpg'}
      ]
    },
    {
      year: 'Nov 2022 - Apr 2025',
      type: 'experience',
      tags: ['Experience'],
      title: 'Web Developer',
      location: 'School of Accountancy - Marriott School of Business • Provo, UT',
      description: 'Managed four websites that have over 11K users and 850K impressions every month and have over 100+ professional business articles',
      technologies: ['Webflow', 'Wordpress', 'Javascript', 'HTML', 'CSS'],
      links: [
        {link: 'https://www.financialreportinghub.org/', text: 'Financial Reporting Hub', image: '/financialreportinghub.jpeg'}, 
        {link: 'https://www.revenuehub.org/', text: 'Revenue Hub', image: '/revenuehub.webp'},
        {link: 'https://www.esgreportinghub.org/', text: 'ESG Reporting Hub', image: '/esgreportinghub.jpg'},
        {link: 'https://www.ipohub.org/', text: 'IPO Hub', image: '/ipohub.jpeg'}
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-24">
          Journey
        </h2>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[0.35rem] top-0 bottom-0 w-0.5 bg-gray-300"></div>
          
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-3 h-3 bg-gray-900 rounded-full mt-3 relative z-10"></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-lg font-medium text-gray-900">{item.year}</span>
                    <div className="flex space-x-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 text-sm rounded-full ${
                            tag === 'Experience' ? 'bg-gray-900 text-white' 
                              : tag === 'Project' ? 'bg-gray-200 text-gray-700'
                              : 'bg-white text-black border border-black'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {item.location}
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-row gap-4">
                    {item.links?.map((link, linkIndex) => (
                      <div className="flex flex-col gap-2">
                        <a href={link.link} className="text-gray-700" target="_blank" rel="noopener noreferrer" key={linkIndex}>
                          <img src={link.image} alt={link.text} className="w-75 h-32 rounded-lg" />
                        </a>
                        <span className="text-gray-500 text-xs">
                          {link.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
