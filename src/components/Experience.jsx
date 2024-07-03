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
            Enhanced the load time of the continue watching list of users by <strong>10x</strong> by improving the system design of the User Authentication service by migrating it from a <strong>REST-based architecture to an Event-Driven Architecture</strong>, utilizing <strong>AWS Eventbridge and SQS</strong>
          </p>
          <p className="info">
            Implemented an event stream processor and handler to manage and monitor the ingestion of events from AWS Eventbridge and SQS using <strong>AWS CDK v2 and v3 in Javascript and Typescript</strong>to hydrate Event-driven microservices <strong>AWS DynamoDB tables via AWS SQS and Amazon Lambda</strong>
          </p>
          <p className='info'>
            Implemented API endpoints by integrating AWS API Gateway and AWS Lambda to streamline API calls between microservices and created numerous <strong>Unit, Integration, and E2E tests utilizing Jest library to ensure successful CI/CD</strong>
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
    </div>
  )
}

export default Experience