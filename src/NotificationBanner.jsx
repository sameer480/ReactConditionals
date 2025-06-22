import React from 'react';

const NotificationBanner = ({ show, message }) => {
  return (
    <>
      {show && (
        <div className="banner">
          {message}
        </div>
      )}
    </>
  );
};

export default NotificationBanner;
//Create a functional component NotificationBanner that accepts a show prop (boolean) and a message prop. Use the && operator to render a styled banner with the message only if show is true.