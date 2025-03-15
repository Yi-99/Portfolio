import React, { useEffect } from 'react';
import { Icon } from '@iconify/react';
import PollenLogo from '../assets/pollen_sense_llc_logo.jpeg';
import RollinsLogo from '../assets/rollins_center_logo.jpeg';
import IPOHubLogo from '../assets/ipo_hub_logo.png';
import BYUtvLogo from '../assets/byutv_logo.png';

const experiences = [
	{
		logo: IPOHubLogo,
		title: 'Web Developer',
		company: 'Marriott School of Business: School of Accountancy',
		info: [
			`Managed four websites that have over 11K users and 850K impressions every month and have over 100+ professional business articles`,
			'Spearheaded the transfer of three professional business blogs to a different CMS, Webflow from Wordpress',
		],
		share: [
			{ text: 'devicon-plain:linkedin', link: 'https://www.linkedin.com/company/ipohub-org/' },
			{ text: 'ri:twitter-fill', link: 'https://twitter.com/ipohub_org?lang=en' }
		],
		buttons: [
			{ text: 'IPOHub', link: 'https://www.ipohub.org' },
			{ text: 'RevenueHub', link: 'https://www.revenuehub.org' },
			{ text: 'ESGReportingHub', link: 'https://www.esg-reportinghub.org' },
			{ text: 'FinancialReportingHub', link: 'https://www.financialreportinghub.org' },
		]
	},
	{
		logo: BYUtvLogo,
		title: 'Backend Developer',
		company: 'BYU Broadcasting',
		info: [
			`Led the implementation of a highly scalable microservice that supplies the BI with over 1TB of real-time user data every day that
			handles up to hundred times the usual number of user data during seasonal spikes via Fargate ECS fronted by an ELB, ElastiCache
			(Redis), and AWS Kinesis stream`,
			`Achieved 99% success rate in a spike test of user increase by 1000% resulting in over 2,000,000 HTTP requests sent to a microservice
			of Fargate ECS fronted by an ELB in the period of 9 minutes by leveraging Docker, Junit, and k6`,
			`Reduced load times by 10x by converting REST-based auth system to Event driven architecture on AWS Eventbridge and SQS`,
		],
		share: [
			{ text: 'devicon-plain:linkedin', link: 'https://www.linkedin.com/company/byu-broadcasting/mycompany/' }
		],
		buttons: [
			{ text: 'BYUtv', link: 'https://www.byutv.org' }
		]
	},
	{
		logo: PollenLogo,
		title: 'Fullstack Development Intern',
		company: 'Pollen Sense, LLC',
		info: [
			`Engineered the GEM seasonality UI with integration of Google Maps API, enabling the internal aerobiology team to dynamically
			predict seasonal start dates for over a hundred different pollen species.`,
			`Devised an end-to-end delete frames feature that removed raw frame images from the cloud and managed frame metadata in Microsoft
			SQL Server using Azure App Functions and .NET framework, showcasing proficiency in application development and Microsoft Azure.`,
			`Implemented a layered bar and line graph to visualize aggregated ppm3 levels and air volume across multiple time intervals, reinforcing
			expertise in data visualization and agile project execution.`,
		],
		share: [
			{ text: 'devicon-plain:linkedin', link: 'https://www.linkedin.com/company/pollen-sense-llc/posts/?feedView=all' },
		],
		buttons: [
			{ text: 'Pollen Sense', link: 'https://www.pollensense.com/' },
			{ text: 'Pollen Sense Portal', link: 'https://portal.pollensense.com/' },
		]
	},
	{
		logo: RollinsLogo,
		title: 'Fullstack Developer',
		company: 'BYU Rollins Center for Entrepreneurship and Technology',
		info: [
			`Developed a customer-facing website using modern web technologies, delivering services to thousands of BYU students and alumni
			and demonstrating hands-on experience in software and web application development.`,
			`Oversaw a monolithic microservice backend on AWS EC2, applying agile practices and strong problem-solving skills to maintain a
			critical internal web application.`
		],
		share: [
			{ text: 'devicon-plain:linkedin', link: 'https://www.linkedin.com/company/rollins-center-for-entrepreneurship-&-technology/posts/?feedView=all' },
		],
		buttons: [
			{ text: 'Rollins Center', link: 'https://rollins-web-portal.onrender.com/' },
		]
	}
]

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
			{ experiences && experiences.map((experience, i) => {
				return (
					<div className='exp_card_container' key={i}>
						<div className="card hidden">
							<div className="card_header">
								<div className="img">
									<img src={experience.logo} alt="ipoHub logo" width="80" height="auto"/>
								</div>
								<h1 className='title'>{experience.title}</h1>
								<p className='company'>{experience.company}</p>
							</div>
							<div className="info-container">
								{ experience.info && experience.info.map((i, index) => {
									return ( 
										<p className="info" key={index}>
											{i}
										</p> 
									)
								})}
							</div>
							<div className="share">
								{ experience.share && experience.share.map((share, index) => {
									return (
										<a href={share.link} key={index}>
											{ share.icon ? <img src={share.icon} alt={experience.company} width="30" height="auto"/> : <Icon icon={share.text} /> }
										</a>
									)
								})}
							</div>
							<div className='button_container'>
								{ experience.buttons && experience.buttons.map((button, index) => {
									return (
										<a href={button.link} className="button" key={index}>{button.text}</a>
									)
								})}
							</div>
						</div>
					</div>
				)})
			}
		</div>
  )
}

export default Experience
