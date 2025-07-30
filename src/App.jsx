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

function Dashboard({ isDarkMode, toggleDarkMode }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div className={`dashboard-container${isDarkMode ? ' dark' : ''}`}>
      {isSidebarVisible && <Sidebar isSidebarVisible={isSidebarVisible} isDarkMode={isDarkMode} />}
      <div className={`main-content${isSidebarVisible ? '' : ' full-width'}`}>
        <Header toggleSidebar={toggleSidebar} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/edit-profile" element={<EditProfilePage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/my-project" element={<MyProjects isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/SkillBadges" element={<SkillBages isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/notifications" element={<NotificationsPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
