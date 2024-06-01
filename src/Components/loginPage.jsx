import React, { useState } from 'react';
import axios from 'axios';
import ProfileCards from './profileCards';
import { useNavigate } from 'react-router-dom';

import '../login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:7000/login',
        {
          username,
          password,
        });

      if (response.data === 'success') {

        console.log('Login successful!');
        navigate('/ProfileCards');


        setUsername('');
        setPassword('');
      } else {

        setLoginError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setLoginError('INVALID USERNAME AND PASSWORD!!!'); // User-friendly error message
    }
  };

  return (
    <div>
      <>
        <div className="container-fluid" style={{ overflow: 'hidden', paddingTop: 63 }}>
          <div className="row main-content bg-success text-center">
            <div className="col-md-4 text-center company__info">
              <span className="company__logo">
                <h2>
                  <span className="fa fa-android" />
                </h2>
              </span>
              <h4 className="company_title">COMPANYX</h4>
            </div>
            <div className="col-md-8 col-xs-12 col-sm-12 login_form ">
              <div className="container-fluid">
                <div className="row">
                  <h2>Log In</h2>
                </div>
                <div className="row">
                  <form className="form-group" method='POST' onSubmit={handleLogin}>
                    <div className="row">
                      <input
                        type="text"
                        id="username"
                        name="username"

                        onChange={(e) => setUsername(e.target.value)}
                        required

                        className="form__input"
                        placeholder="Username"
                      />
                    </div>
                    <div className="row">

                      <input
                        type="password"
                        id="password"
                        name="password"

                        onChange={(e) => setPassword(e.target.value)}
                        required

                        className="form__input"
                        placeholder="Password"
                      />
                    </div>

                    <div className="row">
                      <button type="submit" className="btn" >LOGIN</button>
                      {loginError && <p className="error-message">{loginError}</p>}
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>

      </>


    </div>
  );
}

export default LoginPage;




