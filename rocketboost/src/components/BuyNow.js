import React from 'react';

function BuyNow() {
  return (
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
  );
}

export default BuyNow;
