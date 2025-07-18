import React from 'react';
import './styles.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import WelcomeSection from './components/WelcomeSection';
import StatsGrid from './components/StatsGrid';
import NoticeBoard from './components/NoticeBoard';
import ChartSection from './components/ChartSection';
import AssignmentsSection from './components/AssignmentsSection';
import RightSidebar from './components/RightSidebar';
import BottomProfileMessages from './components/BottomProfileMessages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MilestonePage from './components/MilestonePage';

function DashboardLayout() {
  return (
    <>
      <Header />
      <WelcomeSection />
      <StatsGrid />
      <div className="content-row">
        <NoticeBoard />
        <ChartSection />
      </div>
      <AssignmentsSection />
      <BottomProfileMessages />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="dashboard-container">
        <Sidebar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<DashboardLayout />} />
            <Route path="/milestones" element={<MilestonePage />} />
          </Routes>
        </div>

        <RightSidebar />
      </div>
    </Router>
  );
}

export default App;
