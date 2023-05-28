import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';

const Experience = () => {

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
    
    const expCards = document.querySelectorAll('.card');
    expCards.forEach((element) => observer.observe(element));
  
    return () => {
      expCards.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className='exp_container'>
      <h1 className='header'>Experience</h1>
      <div className='exp_card_container'>
        <div class="card hidden">
          <div class="card_header">
            <div class="img">
              <img src="https://uploads-ssl.webflow.com/6417e237f49583444318b9a0/641a2540e0e6a20fb58eb31f_ipohublogo-black.png" alt="ipoHub logo" width="80" height="auto"/>
            </div>
            <h1 className='title'>Front-End Developer</h1>
            <p className='company'>Marriott School of Business: School of Accountancy</p>
          </div>
          <p className="info">
            Designed and built a new website using PHP, CSS on the WordPress platform through utilizing and customizing on top of the salient theme
          </p>
          <p className="info">
            Counseled and accommodated the needs and the wants of clients on the design and layout of the new blog website and coordinated with the team frequently to post, adjust, and remove articles and posts.
            Managed two websites that have over 100+ professional business articles and have over 11K users and 850K impressions every month
          </p>
          <p className='info'>
            Spearheaded the transfer of three professional business websites to a different CMS, Webflow, without any prior knowledge of Webflow (in-progress)
          </p>
          <div class="share">
            {/* <a href=""><Icon icon="carbon:logo-github" /></a> */}
            <a href="https://www.linkedin.com/company/ipohub-org/"><Icon icon="devicon-plain:linkedin" /></a>
            <a href="https://twitter.com/ipohub_org?lang=en"><Icon icon="ri:twitter-fill" color="white" /></a>
          </div>
          <div className='button_container'>
            <a href="https://www.ipohub.org" className="button">IPOHub</a>
            <a href="https://www.revenuehub.org" className="button">RevenueHub</a>
            <a href="https://www.esg-reportinghub.org" className="button">ESGReportingHub</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience