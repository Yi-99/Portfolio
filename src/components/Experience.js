import React from 'react';
import { Icon } from '@iconify/react';

const Experience = () => {
  return (
    <div className='exp_container'>
      Experience
      <div className='exp_card_container'>
        <div class="card">
          <div class="img">
            <img src="https://uploads-ssl.webflow.com/6417e237f49583444318b9a0/641a2540e0e6a20fb58eb31f_ipohublogo-black.png" alt="ipoHub logo" width="80" height="auto"/>
          </div>
          <span className='title'>Front-End Developer</span>
          <p className='company'>Marriott School of Business: School of Accountancy</p>
          <p class="info">I’m Walter, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.</p>
          <div class="share">
            {/* <a href=""><Icon icon="carbon:logo-github" /></a> */}
            <a href="https://www.linkedin.com/company/ipohub-org/"><Icon icon="devicon-plain:linkedin" /></a>
            <a href=""><Icon icon="ri:twitter-fill" color="white" /></a>
          </div>
          <a href="https://www.ipohub.org" className="button">Website</a>
        </div>
      </div>
    </div>
  )
}

export default Experience