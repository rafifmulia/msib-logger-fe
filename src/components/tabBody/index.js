import TabBodyInfo from '../tabBodyInfo';
import TabBodyPayloads from '../tabBodyPayloads';
import styles from "./index.module.css";

function TabBody(props) {
  return(
    <div className={styles.tabbody}>
      {(props.dataInfo) ? <TabBodyInfo data={props.dataInfo} /> : ''}
      {(props.dataPayloads) ? <TabBodyPayloads data={props.dataPayloads} /> : ''}
      {(props.dataErrors) ? <TabBodyPayloads data={props.dataErrors} /> : ''}
    </div>
  )
}

export default TabBody;
