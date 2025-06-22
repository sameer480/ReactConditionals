import React from 'react';

const UserRole = ({ role }) => {
  return (
    <div>
      {
        role === 'admin' ? (
          <h2>Admin Panel</h2>
        ) : role === 'user' ? (
          <h2>User Dashboard</h2>
        ) : (
          <h2>Guest Access</h2>
        )
      }
    </div>
  );
};

export default UserRole;
//Write a functional component UserRole that accepts a role prop (string: "admin", "user", or "guest"). Use nested ternary operators to render "Admin Panel", "User Dashboard", or "Guest Access" based on the role.