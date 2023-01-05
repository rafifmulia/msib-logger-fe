import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import useIsMobile from "../hooks/useIsMobile";
import ContainerContent from "../components/containerContent";
import CardLog from "../components/cardLog";
import FilterLogKeys from "../components/filterLogKeys";
import Pagination from "../components/pagination";
import SearchBox from "../components/searchBox";

const api = process.env.REACT_APP_URL_API_LOGGER;

function ActivityMonitor() {
  const isMobile = useIsMobile();

  const [ logData, setLogData ] = useState([{
    id: 1,
    label: 'Test Auth',
    level: 1,
    logtype: 'system',
    keys: JSON.stringify(["401","unauthenticated"]),
    act: 'email',
    to: null,
    source: 'mobile',
    ver: '1.0.0',
    ctm: 1671631696,
    mtm: 1671631696,
    payload: JSON.stringify({"data":"$2y$"}),
    errors: JSON.stringify({"msg":"undefined variable a"}),
  }]);

  const [ logKeys, setLogKeys ] = useState([
    {
      log_key: "not found",
      count: 5
    },
    {
      log_key: "404",
      count: 5
    },
    {
      log_key: "unauthenticated",
      count: 1
    },
    {
      log_key: "401",
      count: 1
    }
  ]);

  const [ pagiData, setPagiData ] = useState({
    pagination: [ "1", "2", "3", "4", "5", "6", "7" ],
    recordsTotal: 13,
  })
  const [ limitPage, setLimitPage ] = useState(10);

  const [ activeFilterKeys, setActiveFilterKeys ] = useState([]);
  const [ activePage, setActivePage ] = useState(1);
  const [ activeSearch, setActiveSearch ] = useState('');

  async function initData() {
    await reqLogKeys();
    await reqLogData(`${api}logs?limit=${limitPage}&page=${activePage}`);
  }
  async function reqLogData(url) {
    const { data } = await axios.get(url);
    if (data) {
      setLogData(data.data.list);
      setPagiData({
        pagination: data.data.pagination,
        recordsTotal: data.data.recordsTotal,
      });
    }
  }
  async function reqLogKeys() {
    const { data } = await axios.get(`${api}/log_keys/sum`);
    if (data) {
      setLogKeys(data.data);
    }
  }
  useEffect(() => {initData()}, []);

  function implementFilterLogKeys(keys = []) {
    let url = `${api}logs?limit=${limitPage}&page=${activePage}&q=${encodeURIComponent(activeSearch)}`;
    for (const key of keys) {
      url += '&keys[]='+key;
    }
    reqLogData(url);
  }
  function implementFilterPage(page) {
    let url = `${api}logs?limit=${limitPage}&page=${page}&q=${encodeURIComponent(activeSearch)}`;
    for (const key of activeFilterKeys) {
      url += '&keys[]='+key;
    }
    reqLogData(url);
  }
  function implementSearch(q) {
    let url = `${api}logs?limit=${limitPage}&page=${activePage}&q=${encodeURIComponent(q)}`;
    for (const key of activeFilterKeys) {
      url += '&keys[]='+key;
    }
    reqLogData(url);
  }

  return(
    <ContainerContent>
      <SearchBox setActiveSearch={setActiveSearch} implementSearch={implementSearch} />
      <FilterLogKeys data={logKeys} activeFilterKeys={activeFilterKeys} setActiveFilterKeys={setActiveFilterKeys} implementFilterLogKeys={implementFilterLogKeys} />
      {logData.map((row) => {
        row.keys = (typeof row.keys === 'string') ? JSON.parse(row.keys) : row.keys;
        row.payload = (typeof row.payload === 'string') ? JSON.parse(row.payload) : row.payload;
        row.errors = (typeof row.errors === 'string') ? JSON.parse(row.errors) : row.errors;
        row.to = (typeof row.to === 'string') ? JSON.parse(row.to) : row.to;
        return <CardLog key={nanoid()} data={row} />
      })}
      <Pagination pagiData={pagiData} activePage={activePage} setActivePage={setActivePage} isMobile={isMobile} implementFilterPage={implementFilterPage} />
    </ContainerContent>
  )
}

export default ActivityMonitor;
