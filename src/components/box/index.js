import styles from './index.module.css';

function Box(props) {

  let boxStyle = `${styles.box}`;
  if (props.auto) boxStyle += ` ${styles.box__auto}`;

  return(
    <div className={boxStyle}>
      <div className={styles.box__inner}>
        {props.children}
      </div>
    </div>
  )
}

export default Box;
