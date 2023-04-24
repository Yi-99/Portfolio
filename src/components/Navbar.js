import styles from './styles.scss';
import logo from '../assets/y-logo.png';

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className={styles.logo_containter}>
        <a className="logo_linK" href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a className="menu_item item1 animate__animated animate__zoomIn animate__tada" href="/about">About</a>
          </li>  
          <li>
            <a className="menu_item item2 animate__animated animate__zoomIn" href="/skills">Skills</a>
          </li>
          <li>
            <a className="menu_item item3 animate__animated animate__zoomIn " href="/skills">Experiences</a>
          </li>
          <li>
            <a className="menu_item animate__animated animate__zoomIn animate__delay-1s" href="/skills">Projects</a>
          </li>
          <li>
            <a className="menu_item item4 animate__animated animate__zoomIn " href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar