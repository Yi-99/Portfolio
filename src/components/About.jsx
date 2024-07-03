import React, { useEffect } from 'react';
import './styles.scss';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show', 'glow');
        } else {
          entry.target.classList.remove('show', 'glow');
        }
      });
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    const glowText = document.querySelector('.name');
    hiddenElements.forEach((element) => observer.observe(element));
    observer.observe(glowText);
    return () => {
      hiddenElements.forEach((element) => observer.unobserve(element));
      observer.unobserve(glowText);
    };
  }, []);

  return (
    <div className='about_container'>
      <div className='about_intro hidden'> 
        <h1 className='about_header'>
          Hi! I am <span className="name">Yirang.</span>
        </h1>
      </div>
      <p className="about_me hidden">
        I am a software developer who is passionate about building applications that are aesthically pleasing, comprehensive in utility, and effective in providing resolutions to problems. I am currently a senior at Brigham Young University, majoring in Computer Science. I will be graduation on December 2024. I am currently looking for full-time software developer positions.
      </p>
    </div>
  )
}

export default About