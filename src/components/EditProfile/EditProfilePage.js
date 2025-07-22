import React, { useState } from 'react';
import Sidebar from '../dashboard/Sidebar';
import Header from '../dashboard/Header';
import StudentProfileForm from './StudentProfileForm';
import DomainsOfInterest from './DomainsOfInterest';

const EditProfilePage = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [domainsOfInterest, setDomainsOfInterest] = useState([]);
  const [othersDomain, setOthersDomain] = useState('');

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  const handleDomainChange = (domain, value) => {
    if(domain === 'others') {
      setOthersDomain(value);
    } else {
      setDomainsOfInterest((prev) => {
        if (value) {
          if (!prev.includes(domain)) {
            return [...prev, domain];
          }
        } else {
          return prev.filter((d) => d !== domain);
        }
        return prev;
      });
    }
  };

  const handleFormSubmit = (formData) => {
    // Combine formData and domainsOfInterest for submission
    const fullData = {
      ...formData,
      domainsOfInterest,
      othersDomain,
    };
    console.log('Submitting full profile data:', fullData);
    // TODO: Add API call or other submission logic here
  };

  return (
    <div className="dashboard-container" style={{ display: 'flex', height: '100vh' }}>
      {isSidebarVisible && <Sidebar isSidebarVisible={isSidebarVisible} />}
      <div className={`main-content${isSidebarVisible ? '' : ' full-width'}`} style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Header toggleSidebar={toggleSidebar} />
        <div className="edit-profile-content" style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', gap: '40px' }}>
          <StudentProfileForm onSubmit={handleFormSubmit} />
          <DomainsOfInterest selectedDomains={domainsOfInterest} onChange={handleDomainChange} othersValue={othersDomain} />
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
