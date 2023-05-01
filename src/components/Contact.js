import React from 'react'
import {Icon} from '@iconify/react'

const Contact = () => {
  return (
    <div className='contact_container'>
      <h1 className='header'></h1>
      <p>Email: ylim.8299@gmail.com</p>
      <div className='contact_info'>
        <a className="contact_link" href="https://www.linkedin.com/in/yirang-lim/">
          <strong>LinkedIn</strong>
        </a>
        <a className="contact_link" href="https://www.github.com/Yi-99">
          <strong>Github</strong>
        </a>
      </div>
    </div>
  )
}

export default Contact