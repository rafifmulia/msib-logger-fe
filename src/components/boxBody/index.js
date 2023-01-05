import styles from './index.module.css';

function BoxBody(props) {

  let boxBodyStyle = `${styles.box__body}`;
  if (props.styleRow) boxBodyStyle += ` ${styles.box__body__row}`;
  if (props.styleColumn) boxBodyStyle += ` ${styles.box__body__column}`;

  return(
    <div className={boxBodyStyle}>
      {props.children}
    </div>
  )
}

export default BoxBody;
