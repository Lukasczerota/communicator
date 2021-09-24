import React from 'react';
import { useState } from 'react';
import { API_URL } from '../api';
import styles from './LoginPage.module.scss';
import loginImage from './img.png';
import Tilt from 'react-tilt';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserData } from '../store/userDataReducer';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState('');
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const dispatch = useDispatch();

  const login = function () {
    setLoading(true);
    axios
      .post(
        API_URL + 'login',
        {
          user: username,
          password: password,
        },
        config
      )
      .then((response) => {
        const { status, data } = response.data;
        setLoading(false);
        if (status !== 'success') {
          setError('Login failed, try again!');
        } else {
          dispatch(setUserData(data));
        }
      });
  };
  function keyDownHandler(e) {
    if (e.key === 'Enter') {
      login();
    }
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            <Tilt
              className={styles.tilt}
              options={{ max: 65, perspective: 2000, scale: 1.2 }}
            >
              <img className={styles.img} src={loginImage} alt="" />
            </Tilt>
          </div>
          <div className={styles.memberLogin}>
            <h3>Member login</h3>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="text"
                placeholder="email"
                name="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span className={styles.floatingIcon}>
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>
            <div className={styles.inputContainer}>
              <input
                className={styles.input}
                type="password"
                placeholder="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={keyDownHandler}
              />
              <span className={styles.floatingIcon}>
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>
            <button
              className={styles.button}
              onClick={() => {
                login();
                setError('');
              }}
            >
              Login
            </button>
            <div className={styles.errorContainer}>
              {error && <h5 className={styles.error}>{error}</h5>}
            </div>
            {loading && (
              <div className={styles.spinnerContainer}>
                <div className={styles.ldsSpinner}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
