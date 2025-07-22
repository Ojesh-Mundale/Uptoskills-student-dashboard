import React, { useState } from 'react';
import '../../styles.css';
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import ProjectSubmissionForm from './ProjectSubmissionForm';

function MyProjects() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    <div className="dashboard-container">
      {isSidebarVisible && <Sidebar isSidebarVisible={isSidebarVisible} />}
      <div className={`main-content${isSidebarVisible ? '' : ' full-width'}`}>
        <Header toggleSidebar={toggleSidebar} />
        <ProjectSubmissionForm />
      </div>
    </div>
  );
}

export default MyProjects;
