import React from 'react';

import './Login.css';

const Login = ({ setIsAuth, setOpenLogin }) => {
  const validateLogin = (email, password) => {
    const emailMatch = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if  ( emailMatch.test(email) && password !== '' ) {
      return true;
    };
    return false;
  };

  const handleLogin = (event) => {
      event.preventDefault();
      let email = event.target.elements.email.value;
      let password = event.target.elements.password.value;
      const validateUser =  validateLogin(email, password);
      setIsAuth(validateUser);
      setOpenLogin(false);
  };

  return ( 
    <div className="Login">
        <img src="movies.png" className="Login__img" alt="login" />
        <form onSubmit={handleLogin} className="form">
            <div className="Login__container">
              <label htmlFor="email"> Email </label>
              <input type="text" id="email" name="email" />
            </div>
            <div className="Login__container">
              <label htmlFor="password"> Password </label>
              <input type="text" id="password" name="password" />
            </div>
            <button type="submit" className="Login__button">
              Login
            </button>
        </form>
    </div>
  );
};

export default Login;
