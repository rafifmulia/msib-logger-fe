import { Routes, Route } from "react-router-dom";
import Layout from './layout';
import ActivityMonitor from './pages/activityMonitor';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ActivityMonitor />} />
        <Route path="/activity_monitor" element={<ActivityMonitor />} />
      </Routes>
    </Layout>
  )
}

export default App;
