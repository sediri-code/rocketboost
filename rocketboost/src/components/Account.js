import React from 'react';

const Account = () => {
  return (
    <div>
      <h2>My Account</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign In</button>
      </form>
      <form>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Account;