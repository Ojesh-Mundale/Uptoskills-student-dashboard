import React, { useState } from 'react';
import './SkillBadgeForm.css';

import Header from '../dashboard/Header';
import Sidebar from '../dashboard/Sidebar';
import RightSidebar from '../dashboard/RightSidebar';

const SkillBadgeForm = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [formData, setFormData] = useState({
    student_id: '',
    badge_name: '',
    badge_description: '',
    verified: false,
  });

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);

    // TODO: Replace with actual API POST request if needed
  };

  return (
    <div className="dashboard-container">
      {isSidebarVisible && <Sidebar isSidebarVisible={isSidebarVisible} />}
      <div className={`main-content${isSidebarVisible ? '' : ' full-width'}`}>
        <Header toggleSidebar={toggleSidebar} />

        <div className="badge-form-container">
          <h2>Add New Skill Badge</h2>
          <form className="badge-form" onSubmit={handleSubmit}>
            <label>
              Student ID:
              <input
                type="number"
                placeholder="Student ID"
                name="student_id"
                value={formData.student_id}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Badge Name:
              <input
                type="text"
                placeholder="Badge Name"
                name="badge_name"
                value={formData.badge_name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Badge Description:
              <textarea
                name="badge_description"
                placeholder="Badge Description"
                value={formData.badge_description}
                onChange={handleChange}
                required
              ></textarea>
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                name="verified"
                checked={formData.verified}
                onChange={handleChange}
              />
              Verified
            </label>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <RightSidebar />
    </div>
  );
};

export default SkillBadgeForm;
