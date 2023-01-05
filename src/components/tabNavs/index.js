import { nanoid } from "nanoid";
import styles from "./index.module.css";

function TabNavs(props) {

  function hdlActiveTab(tabData) {
    props.setTabActive(tabData.val);
  }

  return(
    <div className={styles.tabnavs}>
      {props.menus.map(row => {
        let classStyle = '';
        if (row.active) classStyle += `${styles.tabnavs__active}`;
        return <span key={nanoid()} className={classStyle} onClick={() => {hdlActiveTab(row)}}>{row.menu}</span>
      })}
    </div>
  )
}

export default TabNavs;
