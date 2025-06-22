import React from 'react';
import StatusIndicator from './StatusIndicator';
import UserRole from './UserRole';
import NotificationBanner from './NotificationBanner';
import ProductDisplay from './ProductDisplay';
import ToggleContent from './ToggleContent';
import TaskList from './TaskList';
const availableProduct = { name: 'Smartphone', price: 14999, inStock: true };
  const soldOutProduct = { name: 'Laptop', price: 49999, inStock: false };
  const noProduct = null;
  const tasks = [
    { id: 1, title: 'Write documentation', completed: true },
    { id: 2, title: 'Fix bug #123', completed: false },
    { id: 3, title: 'Deploy to production', completed: true }
  ];
const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>User Status</h2>
      <StatusIndicator isOnline={true} />
      <StatusIndicator isOnline={false} />
       <UserRole role="admin" />
      <UserRole role="user" />
      <UserRole role="guest" />
       <NotificationBanner show={true} message="This is an important notification!" />
      <NotificationBanner show={false} message="You won't see this banner." />
      <h1>Product Catalog</h1>

      <h3>Available:</h3>
      <ProductDisplay product={availableProduct} />

      <h3>Sold Out:</h3>
      <ProductDisplay product={soldOutProduct} />

      <h3>Missing Product:</h3>
      <ProductDisplay product={noProduct} />
      <ToggleContent />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
//