import React from 'react';

const ProductDisplay = ({ product }) => {
  if (!product) {
    return <p>No Product</p>;
  } else if (!product.inStock) {
    return <p>Sold Out</p>;
  } else {
    return (
      <div style={styles.card}>
        <h2>{product.name}</h2>
        <p>Price: ₹{product.price}</p>
        <p style={{ color: 'green' }}>In Stock</p>
      </div>
    );
  }
};

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f8ff',
    width: '250px',
    margin: '10px auto',
    boxShadow: '2px 2px 8px rgba(0,0,0,0.1)'
  }
};

export default ProductDisplay;
//Write a functional component ProductDisplay that accepts a product prop (object with name, price, inStock). Use if-else statements to render a product card if inStock is true, a "Sold Out" message if false, or a "No Product" message if product is null.