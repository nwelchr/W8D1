import React from 'react';
import { Link } from 'react-router-dom';

const loggedInComponent = (currentUser, logout) => {
  return (
    <div>
      <h1>Hello, {currentUser.username}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

const loggedOutComponent = () => {
  return (
    <div>
      <Link to="/signup">Sign Up</Link>&nbsp;
      <Link to="/login">Log In</Link>
    </div>
  );
};

const Greeting = ({ currentUser, logout }) => {
	return currentUser ? loggedInComponent(currentUser, logout) : loggedOutComponent();
};

export default Greeting;
