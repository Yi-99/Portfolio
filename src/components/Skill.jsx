import React from 'react';

const Skill = (skill) => {
  return (
    <div className='skill'>
      <div className='outer'>
        <div className='inner'>
          <div id="number" ref={skill.ref}></div>
          <svg className="circle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
            <defs>
              <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#89CFF0" />
              <stop offset="100%" stopColor="#673ab7" />
              </linearGradient>
            </defs>
            <circle className={skill.name} cx="80" cy="80" r="70" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Skill;