import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="account-section">
          <h2>My Account</h2>
          <ul>
            <li>Sign In</li>
            <li>Sign Up</li>
          </ul>
        </div>
        <div className="buy-now-section">
          <h2>Buy Now</h2>
          <form>
            <label>Category:</label>
            <input type="text" name="category" /><br />

            <label>Service:</label>
            <input type="text" name="service" /><br />

            <label>Link:</label>
            <input type="text" name="link" /><br />

            <label>Quantity:</label>
            <input type="number" name="quantity" /><br />

            <label>Amount:</label>
            <input type="number" name="amount" /><br />

            <label>Description:</label>
            <textarea name="description" /><br />

            <button type="submit">Buy</button>
          </form>
        </div>
        <div className="faq-section">
          <h2>FAQ</h2>
        </div>
        <div className="contact-us-section">
          <h2>Contact Us</h2>
        </div>
        <div className="how-to-use-section">
          <h2>How to Use</h2>
        </div>
        <div className="about-us-section">
          <h2>About Us</h2>
        </div>
      </div>
      <div className="main-content">
        <h1>Welcome to My Website</h1>
        <p>This is the main content area of my website.</p>
      </div>
    </div>
  );
}

export default App;
