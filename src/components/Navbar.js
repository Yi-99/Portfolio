import styles from './styles.scss';
import logo from '../assets/y-logo.png';
import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className={styles.logo_containter}>
        <a className="logo_link" href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
      </div>
      <div className="navbar_toggle">
        <Icon className="navbar_icon" icon="uil:bars" color="white" />  
      </div>
      <div className="menu">
        <ul className='menu_list'>
          <li>
            <a className="menu_item item1 animate__animated animate__zoomIn" href="#about">About</a>
          </li>  
          <li>
            <a className="menu_item item2 animate__animated animate__zoomIn" href="#skills">Skills</a>
          </li>
          <li>
            <a className="menu_item item3 animate__animated animate__zoomIn " href="#experience">Experiences</a>
          </li>
          <li>
            <a className="menu_item animate__animated animate__zoomIn animate__delay-1s" href="#projects">Projects</a>
          </li>
          <li>
            <a className="menu_item item4 animate__animated animate__zoomIn " href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="dropdown_menu">
        <ul className='drop_menu_list'>
          <li>

          </li>
          <li>
            
          </li>
          <li>
            
          </li>
          <li>
            
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar