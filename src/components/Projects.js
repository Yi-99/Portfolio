import React from 'react';
import { Icon } from '@iconify/react';

const Projects = () => {
  return (
    <div className='project_container'>
      <div className='project_card_container'>
        <div class="project_card">
          <span className='title'>Family Map App</span>
          <p className='time_loc'>Brigham Young University: Jan ~ Apr 2023</p>
          <p class="info">
          </p>
          <div class="share">
            <a href="project_link">
              <Icon icon="ion:logo-github" color="white" />
            </a>
          </div>
        </div>

        <div class="project_card">
          <span className='title'>E-Commerce Website</span>
          <p className='time_loc'>Apr 2023 ~ Present</p>
          <p class="info">

          </p>
          <div class="share">
            <a href="project_link">
              <Icon icon="ion:logo-github" color="white" />
            </a>
          </div>
        </div>
        <div class="project_card">
          <span className='title'>Spelling Corrector</span>
          <p className='time_loc'>Jan 2023 ~ Feb 2023</p>
          <p class="info">
            
          </p>
          <div class="share">
            <a href="project_link">
              <Icon icon="ion:logo-github" color="white" />
            </a>
          </div>
        </div>
        <div class="project_card">
          <span className='title'>Evil Hangman</span>
          <p className='time_loc'>Feb 2023 ~ Mar 2023</p>
          <p class="info">
            
          </p>
          <div class="share">
            <a href="project_link">
              <Icon icon="ion:logo-github" color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects