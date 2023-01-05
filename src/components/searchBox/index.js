import styles from './index.module.css';

function SearchBox(props) {

  let timeoutChange = null;
  function hdlChange(ev) {
    clearTimeout(timeoutChange);
    timeoutChange = setTimeout(() => {
      props.setActiveSearch(ev.target.value);
      props.implementSearch(ev.target.value);
    }, 1500);
  }

  return(
    <div className={styles.container}>
      <input type="search" className={styles.input__search} placeholder={"Pencarian..."} onChange={hdlChange} />
    </div>
  )
}

export default SearchBox;
