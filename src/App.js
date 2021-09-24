import React, { useState } from 'react';
import LoginPage from './LoginPage/LoginPage';
import MainPage from './MainPage/MainPage';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector((state) => state.userData.token);

  if (token) {
    return (
      <div>
        <MainPage />
      </div>
    );
  } else {
    return <LoginPage />;
  }
}

export default App;
