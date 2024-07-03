import React, { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react';
import './styles.scss';

const Skills = () => {
  // const icons = [ 'icon1', 'icon2', 'icon3', 'icon4', 'icon5' ];
  const htmlRef = useRef(null);
  const cssRef = useRef(null);
  const jsRef = useRef(null);
  const cppRef = useRef(null);
  const javaRef = useRef(null);
  const pythonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__zoomIn');
        }
      });
    });
  
    const skillIcons = document.querySelectorAll('.list_item');
    skillIcons.forEach((element) => observer.observe(element));
  
    const interval = setTimeout(() => {
      let counter = 0;
      const intervalId = setInterval(() => {
        if (counter === 90) {
          clearInterval(intervalId);
        } else if (counter > 74) {
          counter += 1;
          cppRef.current.innerHTML = counter + '%';
          htmlRef.current.innerHTML = counter + '%';
        } else if (counter > 49) {
          counter += 1;
          htmlRef.current.innerHTML = counter + '%';
          cppRef.current.innerHTML = counter + '%';
          javaRef.current.innerHTML = counter + '%';
          cssRef.current.innerHTML = counter + '%';
        } else if (counter > 24) {
          counter += 1;
          jsRef.current.innerHTML = counter + '%';
        } else {
          counter += 1;
          pythonRef.current.innerHTML = counter + '%';
          jsRef.current.innerHTML = counter + '%';
          htmlRef.current.innerHTML = counter + '%';
          cppRef.current.innerHTML = counter + '%';
          javaRef.current.innerHTML = counter + '%';
          cssRef.current.innerHTML = counter + '%';
        }
      }, 20);
  
      return () => {
        clearInterval(intervalId);
      };
    }, 1500); // Delay of 2 seconds before the count starts
  
    return () => {
      clearTimeout(interval);
      skillIcons.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className='skills_container'>
      <div className='skills_list_container'>
        <h1 className='skills_header'>Skills</h1>
        <div className='skills_list'>
          {/* Maybe I should use a map function to render the list items or use flexbox to align the icons */}
          {/* using flex display is more convenient as the spacing between icons can be automatically adjusted */}
            
          <ul className="list">
            <li className='list_item'>
              <Icon className="skill_icon" icon="logos:html-5" />
              <div className='skill'>
                <div className='outer'>
                  <div className='inner'>
                    <div id="number" ref={htmlRef}></div>
                    
                    <svg className="circle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                      <defs>
                          <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#89CFF0" />
                            <stop offset="100%" stopColor="#673ab7" />
                          </linearGradient>
                      </defs>
                      <circle className="HTML" cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </li>
            <li className='list_item'>
              <Icon className="skill_icon" icon="logos:css-3" />
              <div className='skill'>
                <div className='outer'>
                  <div className='inner'>
                    <div id="number" ref={cssRef}></div>
                    <svg className="circle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                      <circle className="CSS" cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </li>
            <li className='list_item'>
              <Icon className="skill_icon" icon="logos:javascript" />
              <div className='skill'>
                <div className='outer'>
                  <div className='inner'>
                    <div id="number" ref={jsRef}></div>
                    <svg className="circle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                      <circle className="JS" cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </li>
            <li className='list_item'>
              <Icon className="skill_icon" icon="logos:c-plusplus" />
              <div className='skill'>
                <div className='outer'>
                  <div className='inner'>
                    <div id="number" ref={cppRef}></div>
                    <svg className="circle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                      <circle className="CPP" cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </li>
            <li className='list_item'>
              <Icon className="skill_icon" icon="devicon:java-wordmark" />
              <div className='skill'>
                <div className='outer'>
                  <div className='inner'>
                    <div id="number" ref={javaRef}></div>
                    <svg className="circle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                      <circle className="JAVA" cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div> 
            </li>
            <li className='list_item'>
              <Icon className="skill_icon" icon="devicon:python" />
              <div className='skill'>
                <div className='outer'>
                  <div className='inner'>
                    <div id="number" ref={pythonRef}></div>
                    <svg className="circle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                      <circle className="PYTHON" cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
              </div> 
            </li>
          </ul>
        </div>

        {/*Frameworks*/}
        <h1 className='skills_header'>Frameworks</h1>
        <div className='skills_list'>            
          <ul className="list">
            <li className='list_item'>
              <Icon className="skill_icon" icon="vscode-icons:file-type-node" />
            </li>
            <li className='list_item'>
              <Icon className="skill_icon" icon="logos:react" />
            </li>
            <li className='list_item'>
              <Icon className="skill_icon" icon="logos:express" />
            </li>
            <li className='list_item'>
              <Icon className="skill_icon" icon="cib:next-js" />
            </li>
            <li className='list_item'>
              <Icon className="skill_icon" icon="devicon:fastapi" />
            </li>
          </ul>
        </div>

        {/*Tech Stacks*/}
        <h1 className='skills_header'>Cloud Tech Stacks</h1>
        <div className='skills_list'>            
          <ul className="list">
            <li className='list_item'>
              <Icon className="skill_icon" icon="logos:aws" />
            </li>
            <li className='list_item'>
              <Icon className="skill_icon" icon="devicon:googlecloud" />
            </li>
          </ul>
        </div>

        {/*Database*/}
        <h1 className='skills_header'>Database</h1>
        <div className='skills_list'>            
          <ul className="list">
            <li className='list_item'>
              <Icon className="skill_icon" icon="devicon:mongodb-wordmark" />
            </li>
            <li className='list_item'>
              <Icon className="skill_icon" icon="logos:postgresql" />
            </li>
            <li className='list_item'>
              <Icon className="skill_icon" icon="devicon:dynamodb" />
            </li>
            <li className='list_item'>
              <Icon className='skill_icon' icon="logos:mysql" />
            </li>
            <li className='list_item'>
              <Icon className="skill_icon" icon="skill-icons:supabase-light" />
            </li>
            <li className="list_item">
              <Icon className="skill_icon" icon="logos:redis" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills