import { useState } from "react";
import Topbar from "../components/topbar";
import Sidebar from "../components/sidebar";
import Overlay from "../components/overlay";
import useIsMobile from "../hooks/useIsMobile";

function Layout({ children }) {
  const [ overlay, setOverlay ] = useState(false);
  const [ toggleSidebar, setToggleSidebar ] = useState(false);
  const [ title, setTitle ] = useState('Activity Monitor');
  const isMobile = useIsMobile();

  let sidebar = '';
  if (isMobile) {
    if (toggleSidebar) sidebar = <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} overlay={overlay} setOverlay={setOverlay} isMobile={isMobile} setTitle={setTitle} />;
  } else {
    sidebar = <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} overlay={overlay} setOverlay={setOverlay} isMobile={isMobile} setTitle={setTitle} />;
  }

  return (
    <>
      {(overlay) ? <Overlay /> : ''}
      <Topbar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} overlay={overlay} setOverlay={setOverlay} title={title} />
      {sidebar}
      {children}
    </>
  )
}

export default Layout;
