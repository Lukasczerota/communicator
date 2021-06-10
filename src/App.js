import React, { useState } from 'react';
import LoginPage from './LoginPage/LoginPage';
import MainPage from './MainPage/MainPage';
import './App.css';

function App() {
  const [userData, setUserData] = useState('');

  if (userData) {
    return (
      <div>
        <MainPage
          token={userData.authToken}
          userId={userData.userId}
          name={userData.me.name}
        />
      </div>
    );
  } else {
    return <LoginPage onSuccess={setUserData} />;
  }
}

export default App;
