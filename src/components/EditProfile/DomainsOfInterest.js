import React from 'react';

const DOMAIN_OPTIONS = [
  'Web Development',
  'Full Stack Development',
  'AI',
  'ML',
  'Data Science',
  'Cloud Computing',
  'Cybersecurity',
  'Blockchain',
  'App Development',
];

const DomainsOfInterest = ({ selectedDomains, onChange }) => {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    onChange(value, checked);
  };

  const handleOthersChange = (e) => {
    onChange('others', e.target.value);
  };

  return (
    <div className="domains-container">
      <h3>Domains of Interest</h3>
      <div className="domains-list">
        {DOMAIN_OPTIONS.map((domain) => (
          <div key={domain} className="form-group checkbox-group">
            <input
              type="checkbox"
              id={`domain_${domain}`}
              value={domain}
              checked={selectedDomains.includes(domain)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={`domain_${domain}`}>{domain}</label>
          </div>
        ))}
      </div>
      <div className="form-group">
        <label htmlFor="others">Others</label>
        <input
          type="text"
          id="others"
          name="others"
          value={selectedDomains.others || ''}
          onChange={handleOthersChange}
          placeholder="Please specify other domains"
        />
      </div>
    </div>
  );
};

export default DomainsOfInterest;
