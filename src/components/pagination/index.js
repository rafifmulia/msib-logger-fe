import { nanoid } from 'nanoid';
import styles from './index.module.css';

function Pagination(props) {
  const { pagination } = props.pagiData;
  const activePage = props.activePage;

  function hdlClick(pageVal) {
    props.setActivePage(pageVal);
    props.implementFilterPage(pageVal);
  }

  const formatPagi = [];
  let max = 5, sideLeft = 2, sideRight = 2;
  if (!props.isMobile) {
    max = 10; sideLeft = 5; sideRight = 5;
  }
  let i = 1;

  /**
   * khusus sliceStart dimulai dari 0
   * sedangkan sliceEnd dimulai dari 1
   */
  let sliceStart = activePage-sideLeft-1; // kurang 2 dari pageVal saat ini
  if (sliceStart < 0) sliceStart = 0; // case jika pageVal saat ini dibagian awal
  let sliceEnd = activePage+sideRight; // lebih 2 dari pageVal saat ini
  if (sliceEnd < max) sliceEnd = max; // case jika pageVal saat ini dibagian awal
  if (sliceEnd > pagination.length) { // case jika pageVal saat ini dibagian akhir
    sliceStart -= -(pagination.length - sliceEnd); // sliceStart dikurangi sesuai dengan kelebihan dari sliceEndnya
    sliceStart = ((max % 2) === 0) ? sliceStart+1 : sliceStart;
    sliceEnd = pagination.length;
  }
  let tmp = pagination.slice(sliceStart, sliceEnd);
  for (const val of tmp) {
    if (i > max) continue;
    formatPagi.push(val);
    i++;
  }
  max = undefined; i = undefined; sliceStart = undefined; sliceEnd = undefined;

  return(
    <div className={styles.container}>
      {(activePage > pagination[1]) ? <span className={styles.badge} onClick={() => hdlClick(pagination[0])}>{"<<"}</span> : ''}
      {(activePage > pagination[0]) ? <span className={styles.badge} onClick={() => hdlClick(activePage-1)}>{"<"}</span> : ''}
      {formatPagi.map((pageVal) => {
        let classStyle = `${styles.badge}`;
        if (activePage === pageVal) classStyle += ` ${styles.badge__active}`;
        return <span key={nanoid()} className={classStyle} onClick={() => hdlClick(pageVal)}>{pageVal}</span>
      })}
      {(activePage < pagination[pagination.length - 1]) ? <span className={styles.badge} onClick={() => hdlClick(activePage+1)}>{">"}</span> : ''}
      {(activePage < pagination[pagination.length - 2]) ? <span className={styles.badge} onClick={() => hdlClick(pagination[pagination.length - 1])}>{">>"}</span> : ''}
    </div>
  )
}

export default Pagination;
