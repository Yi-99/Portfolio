import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import aiTripAdvisorVideo from '../assets/ai-trip-advisor-mod.mp4';
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
        <div className="project_card hidden card1">
          <h1 className='title'>AI Video Generator</h1>
          <p className='time_loc'>May 2024 ~ Present</p>
          <p className="info">
            A monolithic web application created on top of Next.JS for the frontend and FastAPI for the backend that generates 1-2 minute AI-generated product advertisement videos using various gen AI APIs
          </p>
          <div className="share">
            <a className="project_link" href="https://github.com/brightlightkim/ai-video-gen">
              <Icon icon="ion:logo-github" color="white" />
            </a>
          </div>
        </div>

        <div className="project_card hidden card2">
          <h1 className='title'>AI Trip Advisor</h1>
          <p className='time_loc'>Apr 2024</p>
          <p className="info">
            A monolithic web application created on top of React for the frontend and Node.JS for the backend that generates a week-long trip itinerary based on user preferences and constraints
          </p>
          <video className="video" controls controlsList="nodownload">
            <source src={aiTripAdvisorVideo} type="video/mp4" />
          </video> 
          <div className="share">
            <a className="project_link" href="https://github.com/brightlightkim/google_ai_hackathon">
              <Icon icon="ion:logo-github" color="white" />
            </a>
          </div>
        </div>


        <div className="project_card hidden card3">
          <h1 className='title'>Family Map App</h1>
          <p className='time_loc'>Brigham Young University: Jan ~ Apr 2023</p>
          <p className="info">
            An android application that utilizes Google Maps API to display family history information and events on an interactable map
          </p>
          <div className="share">
            <a className="project_link" href="https://www.github.com/Yi-99/Family-Map-App">
              <Icon icon="ion:logo-github" color="white" />
            </a>
          </div>
        </div>

        <div className="project_card hidden card3">
          <h1 className='title'>E-Commerce Website</h1>
          <p className='time_loc'>Apr 2023 ~ Present</p>
          <p className="info">

          </p>
          <div className="share">
            <a className="project_link" href="https://www.github.com/Yi-99/Ecommerce">
              <Icon icon="ion:logo-github" color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects