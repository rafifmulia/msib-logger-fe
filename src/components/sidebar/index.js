import { NavLink } from 'react-router-dom';
import styles from './index.module.css';

function Sidebar(props) {
  const isMobile = props.isMobile;

  function hdlToggleSidebar() {
    props.setToggleSidebar(!props.toggleSidebar);
    props.setOverlay(!props.overlay);
  }

  function hdlClick(ev) {
    props.setTitle(ev.target.innerText);
    if (isMobile) {
      props.setToggleSidebar(!props.toggleSidebar);
      props.setOverlay(!props.overlay);
    }
  }

  return(
    <div className={`${styles.container} ${(isMobile) ? styles.container__mobile : styles.container__desktop}`}>
      <div className={styles.brand}>
        <i className={`fas fa-arrow-circle-left ${styles.arrow_left}`} onClick={hdlToggleSidebar}></i>
        <h1 className={styles.title}>Logger</h1>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            {/* https://stackoverflow.com/questions/43146460/reactjs-unknown-prop-activeclassname-on-a-tag-remove-this-prop-from-the-e */}
            <NavLink to="/" className={(navData) => (navData.isActive ? styles.link__active : '')} onClick={hdlClick}>Activity Monitor</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar;
