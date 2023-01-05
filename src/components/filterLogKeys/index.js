import { nanoid } from 'nanoid';
import styles from './index.module.css';

function FilterLogKeys(props) {

  function hdlClick(logKey) {
    const newFilterKeys = [];
    let isNew = true;
    for (const key of props.activeFilterKeys) {
      if (key === logKey.log_key) {
        isNew = false;
        continue;
      }
      newFilterKeys.push(key);
    }
    if (isNew) newFilterKeys.push(logKey.log_key);
    props.setActiveFilterKeys(newFilterKeys);
    props.implementFilterLogKeys(newFilterKeys);
  }

  return(
    <div className={styles.container}>
      {(!props.data) ? '' :
        props.data.map((row) => {
          let classStyle = `${styles.badge}`;
          for (const key of props.activeFilterKeys) {
            if (key === row.log_key) classStyle += ` ${styles.badge__active}`;
          }
          return <span key={nanoid()} className={classStyle} onClick={() => hdlClick(row)}>{row.log_key}</span>
        })
      }
    </div>
  )
}

export default FilterLogKeys;
