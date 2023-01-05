import styles from './index.module.css';

function Topbar(props) {

  function hdlClick() {
    props.setToggleSidebar(!props.toggleSidebar);
    props.setOverlay(!props.overlay);
  }

  return (
    <div className={styles.container}>
      <div className={styles.bars} onClick={hdlClick}>
        <i className={`fas fa-bars`}></i>
      </div>
      <div className={styles.title}>
        <h1>{ props.title ?? 'Logger' }</h1>
      </div>
    </div>
  )
}

export default Topbar;
