import React from 'react';
import './StatusIndicator.css';

const StatusIndicator = ({ isOnline }) => {
  return (
    <div className="status-container">
      <span className={isOnline ? 'dot green' : 'dot red'}></span>
      <span className="status-text">
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
};

export default StatusIndicator;
//Create a functional component StatusIndicator that accepts an isOnline prop (boolean). Use a ternary operator to render "Online" with a green dot or "Offline" with a red dot. Style the dots using CSS.
