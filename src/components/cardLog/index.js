import { useState } from "react";
import moment from "moment";
import { nanoid } from "nanoid";
import Box from "../box";
import BoxHead from "../boxHead";
import BoxBody from "../boxBody";
import TabNavs from '../tabNavs';
import TabBody from '../tabBody';
import styles from "./index.module.css";

function CardLog(props) {
  const [ tabActive, setTabActive ] = useState('info');

  const { id, label, level, logtype, keys, act, ver, source, payload, errors, ctm } = props.data;

  return(
    <div className={styles.container}>
      <Box auto={true}>
        <BoxHead styleRow={true} styleBorderBot={true}>
          <div className={styles.row}>
            <p className={`text-start fw-600 text-size-13 ${styles.triple_flex}`}>#code:{id}</p>
            <div className={`text-end`}>
              {(level == 1) ? // if
              <span className={`fw-800 text-size-13 text-dark`}>Low</span>
              : (level == 2) ? // elif
              <span className={`fw-800 text-size-13 text-warning`}>Medium</span>
              : <span className={`fw-800 text-size-13 text-danger`}>High</span> // else
              }
              &nbsp;
              <span className={`fw-100 text-size-11`}>{moment.unix(ctm).format('YYYY-MM-DD HH:mm:ss')}</span>
            </div>
          </div>
        </BoxHead>
        <BoxBody styleColumn={true}>
          <div className={styles.body}>
            <div className={`${styles.row} ${styles.row__between}`}>
              <p className={`text-size-20 fw-600 ${styles.data__label__elipsis}`}>{label}</p>
              <TabNavs menus={[
                {menu: 'Info', val: 'info', active: (tabActive === 'info') ? true : false},
                {menu: 'Payload', val: 'payload', active: (tabActive === 'payload') ? true : false},
                {menu: 'Error', val: 'error', active: (tabActive === 'error') ? true : false},
              ]} setTabActive={setTabActive} />
            </div>
            {(tabActive === 'info') ? // if
              <TabBody dataInfo={{
                logtype,
                source,
                ver,
                act,
              }} />
            : (tabActive === 'payload') ? // elif
              <TabBody dataPayloads={payload} />
            : (tabActive === 'error') ? // elif
              <TabBody dataErrors={errors} />
            : '' // else
            }
            <div className={styles.keys}>
              {keys.map((val) => {
                return <span key={nanoid()}>{val}</span>
              })}
            </div>
          </div>
        </BoxBody>
      </Box>
    </div>
  )
}

export default CardLog;
