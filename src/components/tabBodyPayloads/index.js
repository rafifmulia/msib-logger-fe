import { prettyPrintJson } from 'pretty-print-json';
import parse from 'html-react-parser';
// import styles from "./index.module.css";

function TabBodyPayloads(props) {
  let prettyJson = prettyPrintJson.toHtml(props.data, {
    indent: 2,
  });
  // prettyJson = prettyJson.replaceAll('<', '&lt;');
  // prettyJson = prettyJson.replaceAll('>', '&gt;');
  return(
    <div>
      <pre>
        <code>{parse(prettyJson)}</code>
      </pre>
    </div>
  )
}

export default TabBodyPayloads;
