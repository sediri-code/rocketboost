import React, { useState } from 'react';

const BuyForm = () => {
  const [category, setCategory] = useState('');
  const [service, setService] = useState('');
  const [link, setLink] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Category:
        <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
      </label>
      <label>
        Service:
        <input type="text" value={service} onChange={(e) => setService(e.target.value)} />
      </label>
      <label>
        Link:
        <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      </label>
      <label>
        Quantity:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <button type="submit">Buy Now</button>
    </form>
  );

}