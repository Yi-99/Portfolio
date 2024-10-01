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
        <div className="card hidden">
          <div className="card_header">
            <div className="img">
              <img src="https://uploads-ssl.webflow.com/6417e237f49583444318b9a0/641a2540e0e6a20fb58eb31f_ipohublogo-black.png" alt="ipoHub logo" width="80" height="auto"/>
            </div>
            <h1 className='title'>Front-End Developer</h1>
            <p className='company'>Marriott School of Business: School of Accountancy</p>
          </div>
          <p className="info">
            Managed three websites that have over 11K users and 850K impressions every month and have over 100+ professional business articles
          </p>
          <p className="info">
            Spearheaded the transfer of three professional business blogs to a different CMS, Webflow from Wordpress
          </p>
          <p className='info'>
            Counseled and accommodated the needs and wants of clients on the design and layout of the new blog website and coordinated with the team frequently to post, adjust, and remove articles and posts.
          </p>
          <div className="share">
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

      <div className='exp_card_container'>
        <div className="card hidden">
          <div className="card_header">
            <div>
              <img src="https://www.byutv.org/images/byutv-logo.svg" alt="BYUtv logo" width="80" height="auto"/>
            </div>
            <h1 className='title'>Back-End Developer</h1>
            <p className='company'>BYU Broadcasting</p>
          </div>
          <p className="info">
            Led the implementation of a highly scalable microservice that supplies the BI with over 1TB of real-time user data
            every day that handles up to hundred times the usual number of user data during seasonal spikes via Fargate ECS
            fronted by an ALB, Redis, and AWS Kinesis stream
          </p>
          <p className="info">
            Reduced load times by 10x by converting REST-based auth system to Event driven architecture on AWS
            Eventbridge and SQS
          </p>
          <p className='info'>
            Streamlined the ingestion process of an event driven architecture-based microservice using AWS CDK v3 to
            hydrate AWS DynamoDB tables with over 1 million events a day by leveraging AWS SQS and Lambda
          </p>
          <div className="share">
            {/* <a href=""><Icon icon="carbon:logo-github" /></a> */}
            <a href="https://www.linkedin.com/company/byu-broadcasting/mycompany/"><Icon icon="devicon-plain:linkedin" /></a>
          </div>
          <div className='button_container'>
            <a href="https://www.byutv.org" className="button">BYUtv</a>
          </div>
        </div>
      </div>

      <div className='exp_card_container'>
        <div className="card hidden">
          <div className="card_header">
            <div>
              <img src="https://media.licdn.com/dms/image/v2/D560BAQHNmAX6WGLvuQ/company-logo_200_200/company-logo_200_200/0/1719258180878/pollen_sense_llc_logo?e=1735776000&v=beta&t=81unfFThPWjWjJ1jvcThpCRNagaKpPih7VSxEtTPM5Q" alt="PollenSense logo" width="80" height="auto"/>
            </div>
            <h1 className='title'>Full-Stack Development Intern</h1>
            <p className='company'>Pollen Sense LLC</p>
          </div>
          <p className="info">
            Led the implementation of a highly scalable microservice that supplies the BI with over 1TB of real-time user data
            every day that handles up to hundred times the usual number of user data during seasonal spikes via Fargate ECS
            fronted by an ALB, Redis, and AWS Kinesis stream
          </p>
          <p className="info">
            Reduced load times by 10x by converting REST-based auth system to Event driven architecture on AWS
            Eventbridge and SQS
          </p>
          <p className='info'>
            Streamlined the ingestion process of an event driven architecture-based microservice using AWS CDK v3 to
            hydrate AWS DynamoDB tables with over 1 million events a day by leveraging AWS SQS and Lambda
          </p>
          <div className="share">
            <a href="https://github.com/PollenSense"><Icon icon="carbon:logo-github" /></a>
            <a href="https://www.linkedin.com/company/pollen-sense-llc/posts/?feedView=all"><Icon icon="devicon-plain:linkedin" /></a>
          </div>
          <div className='button_container'>
            <a href="https://www.pollensense.com/" className="button">Pollen Sense</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
