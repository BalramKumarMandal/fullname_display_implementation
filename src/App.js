import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page
    // Trim spaces and ensure correct formatting
    const formattedFullName = `${firstName.trim()} ${lastName.trim()}`;
    setFullName(formattedFullName);
  };

  return (
    <div className="app">
      <h1>Full Name Display:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {fullName && <div>Full Name: {fullName}</div>}
    </div>
  );
}

export default App;
