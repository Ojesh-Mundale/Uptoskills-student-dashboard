import React, { useState } from 'react';

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

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Add New Skill Badge</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              Student ID:
              <input
                type="number"
                placeholder="Student ID"
                name="student_id"
                value={formData.student_id}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </label>

            <label className="block">
              Badge Name:
              <input
                type="text"
                placeholder="Badge Name"
                name="badge_name"
                value={formData.badge_name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </label>

            <label className="block">
              Badge Description:
              <textarea
                name="badge_description"
                placeholder="Badge Description"
                value={formData.badge_description}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              ></textarea>
            </label>

            <label className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                name="verified"
                checked={formData.verified}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span>Verified</span>
            </label>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <RightSidebar />
    </div>
  );
};

export default SkillBadgeForm;
