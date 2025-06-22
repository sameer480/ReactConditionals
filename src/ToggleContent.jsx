import React, { useState } from 'react';

const ToggleContent = () => {
  const [showContent, setShowContent] = useState(false);

  const toggle = () => {
    setShowContent(prev => !prev);
  };

  return (
    <div style={styles.container}>
      <button onClick={toggle} style={styles.button}>
        {showContent ? 'Hide' : 'Show'} Content
      </button>

      {showContent
        ? <div style={styles.content}>🎉 This is the sample content!</div>
        : null}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '10px'
  },
  content: {
    padding: '15px',
    backgroundColor: '#e0f7fa',
    border: '1px solid #00acc1',
    borderRadius: '6px',
    display: 'inline-block'
  }
};

export default ToggleContent;
