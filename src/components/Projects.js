import React from 'react';
import { Icon } from '@iconify/react';

const Projects = () => {
  return (
    <div>Projects
      <div className='project_container'>
        <div className='project_card_container'>
          <div class="project_card">
            <span className='title'>Family Map App</span>
            <p className='time_loc'>Brigham Young University: Jan ~ Apr 2023</p>
            <p class="info">
            </p>
          </div>
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