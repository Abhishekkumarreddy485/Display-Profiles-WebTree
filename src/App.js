import React, { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
      })
      .catch((error) => console.error('Error fetching user:', error));
  }, []);

  if (!user) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-120 flex">
        <img
          className="w-32 h-32 border-2 border-gray-300"
          src={user.picture.large}
          alt="Profile"
        />
        <div className="ml-6">
          <h2 className="text-xl font-bold">{user.name.first} {user.name.last}</h2>
          <p className="text-gray-700">Gender: {user.gender}</p>
          <p className="text-gray-700">Phone Number: {user.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
