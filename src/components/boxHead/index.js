import styles from './index.module.css';

function BoxHead(props) {

  let boxHeadStyle = `${styles.box__head}`;
  if (props.styleRow) boxHeadStyle += ` ${styles.box__head__row}`;
  if (props.styleColumn) boxHeadStyle += ` ${styles.box__head__column}`;
  if (props.styleBorderBot) boxHeadStyle += ` ${styles.box__head__border__bot}`;

  return(
    <div className={boxHeadStyle}>
      {props.children}
    </div>
  )
}

export default BoxHead;
