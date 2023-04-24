import React, { useEffect } from 'react'
import { Icon } from '@iconify/react';
import './styles.scss';

const Skills = () => {
  // const icons = [ 'icon1', 'icon2', 'icon3', 'icon4', 'icon5' ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__zoomIn');
        } else {
          entry.target.classList.remove('animate__animated', 'animate__zoomIn');
        }
      });
    });
    
    const skillIcons = document.querySelectorAll('.skill');
    skillIcons.forEach((element) => observer.observe(element));
  
    return () => {
      
      skillIcons.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className='skills_container'>
      <div className='skills_list_container'>
        <div className='skills_list'>
          <h2 className='list_header'>Languages</h2>
          {/* Maybe I should use a map function to render the list items or use flexbox to align the icons */}
          <ul className="list lang">
            {/* Old School Method */}
            <li className="skill hidden"><Icon className="skill_icon" icon="logos:html-5" /></li>
            <li className="skill hidden"><Icon className="skill_icon" icon="logos:css-3" /></li>
            <li className="skill hidden"><Icon className="skill_icon" icon="logos:javascript" /></li>
            <li className='skill hidden'><Icon className="skill_icon" icon="logos:c-plusplus" /></li>
            <li className='skill hidden'><Icon className="skill_icon" icon="devicon:java-wordmark" /></li>
          </ul>
        </div>
        <div className='skills_list'>
          <h2 className='list_header'>Frameworks</h2>
          <ul className='list framework'>
            <li className='skill hidden animate__animated animate__zoomIn'><Icon className="skill_icon" icon="devicon:bootstrap-wordmark" /></li>
            <li className='skill hidden animate__animated animate__zoomIn'><Icon className="skill_icon" icon="logos:react" /></li>
            <li className='skill hidden animate__animated animate__zoomIn'><Icon className="skill_icon" icon="vscode-icons:file-type-node" /></li>
            <li className='skill hidden animate__animated animate__zoomIn'><Icon className="skill_icon" icon="logos:express" /></li>
          </ul>
        </div>
        <div className='skills_list'>
          <h2 className='list_header'>Database</h2>
          <ul className='list database'>
            <li className='skill hidden animate__animated animate__zoomIn'><Icon className="skill_icon" icon="skill-icons:mongodb" /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills