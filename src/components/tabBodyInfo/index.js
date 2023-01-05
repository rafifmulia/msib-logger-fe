// import styles from "./index.module.css";

function TabBodyInfo(props) {
  const { logtype, source, ver, act } = props.data;
  
  return(
    <div>
      <p>logtype: {logtype}</p>
      <p>source: {source}</p>
      <p>ver: {ver}</p>
      <p>act: {act}</p>
    </div>
  )
}

export default TabBodyInfo;
