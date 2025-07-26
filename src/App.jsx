import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import Sidebar from './components/dashboard/Sidebar';
import Header from './components/dashboard/Header';
import WelcomeSection from './components/dashboard/WelcomeSection';
import StatsGrid from './components/dashboard/StatsGrid';
import NoticeBoard from './components/dashboard/NoticeBoard';
import ChartSection from './components/dashboard/ChartSection';
import AssignmentsSection from './components/dashboard/AssignmentsSection';
import RightSidebar from './components/dashboard/RightSidebar';
import BottomProfileMessages from './components/dashboard/BottomProfileMessages';
import EditProfilePage from './components/EditProfile/EditProfilePage';
import MyProjects from './components/myProjects/MyProjects';
import SkillBages from './components/SkillBadges/SkillBadgeForm';
import NotificationsPage from './components/NotificationsPage/NotificationsPage';

import { useState } from 'react';

function Dashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div className="dashboard-container">
      {isSidebarVisible && <Sidebar isSidebarVisible={isSidebarVisible} />}
      <div className={`main-content${isSidebarVisible ? '' : ' full-width'}`}>
        <Header toggleSidebar={toggleSidebar} />
        <WelcomeSection />
        <StatsGrid />
        <div className="content-row">
          <NoticeBoard />
          <ChartSection />
        </div>
        <AssignmentsSection />
        <BottomProfileMessages />
      </div>
      <RightSidebar />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/edit-profile" element={<EditProfilePage />} />
        <Route path="/my-project" element={<MyProjects />} />
        <Route path="/SkillBadges" element={<SkillBages />} />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
