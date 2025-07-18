import React from 'react';

function BottomProfileMessages() {
  return (
    <div className="bottom-profile-messages">
      {/* Profile Progress */}
      <div className="profile-progress">
        <h4>Profile Completion</h4>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '80%' }}></div>
        </div>
        <span className="progress-text">80%</span>

        <h4>Profile Strength</h4>
        <div className="progress-bar">
          <div className="progress-fill strength" style={{ width: '45%' }}></div>
        </div>
        <span className="progress-text">45%</span>
      </div>

      {/* Messages */}
      <div className="messages-widget">
        <div className="widget-header">
          <h4>Messages</h4>
          <button className="expand-btn">→</button>
        </div>
        <div className="message-list">
          <div className="message-item">
            <img src="https://pixabay.com/get/gde97a83c07df6bb52e12c070262f82e07d75595c0b536be4acee71fe910fe9c3e2dc612dc87562f3b078b115946391292b5ddd490e6281dfe0cdc9f3898a1ba4_640.jpg" alt="Jane Cooper" className="message-avatar" />
            <div className="message-content">
              <div className="message-name">Jane Cooper</div>
              <div className="message-preview">Hey, how's your project going?</div>
            </div>
          </div>
          <div className="message-item">
            <img src="https://pixabay.com/get/g3351fd63efdce554d354e26a3916069bfcac759b949cb99ab7bdc08f35432e11e58c14efa1ff0cbc3be8174f3d260905ea54b962794b55b7809cde93dbddd0d0_640.jpg" alt="Kristin Watson" className="message-avatar" />
            <div className="message-content">
              <div className="message-name" >Kristin Watson</div>
              <div className="message-preview">Can you help me with...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomProfileMessages;
