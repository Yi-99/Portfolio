import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import './styles.scss';

const Projects = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__bounceIn');
        } else {
          entry.target.classList.remove('animate__animated', 'animate__bounceIn');
        }
      });
    });
    
    const expCards = document.querySelectorAll('.project_card');
    expCards.forEach((element) => observer.observe(element));
  
    return () => {
      expCards.forEach((element) => observer.unobserve(element));
    };
  }, []);


  return (
    <div className='project_container'>
      <h1 className='header'>Projects</h1>
      <div className='project_card_container'>
        <div class="project_card hidden card1">
          <span className='title'>Family Map App</span>
          <p className='time_loc'>Brigham Young University: Jan ~ Apr 2023</p>
          <p class="info">
          </p>
          <div class="share">
            <a className="project_link" href="https://www.github.com/Yi-99/Family-Map-App">
              <Icon icon="ion:logo-github" color="white" />
            </a>
          </div>
        </div>

        <div class="project_card hidden card2">
          <span className='title'>E-Commerce Website</span>
          <p className='time_loc'>Apr 2023 ~ Present</p>
          <p class="info">

          </p>
          <div class="share">
            <a className="project_link" href="https://www.github.com/Yi-99/Ecommerce">
              <Icon icon="ion:logo-github" color="white" />
            </a>
          </div>
        </div>
        <div class="project_card hidden card3">
          <span className='title'>Portfolio Website</span>
          <p className='time_loc'>Jan 2023 ~ Feb 2023</p>
          <p class="info">
            
          </p>
          <div class="share">
            <a className="project_link" href="https://www.github.com/Yi-99/Resume">
              <Icon icon="ion:logo-github" color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects