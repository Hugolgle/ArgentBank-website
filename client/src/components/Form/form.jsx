import './form.scss'
import Button from '../../components/Button/button.jsx'
import { loginUser, profileUser } from "../../redux/userSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

export default function Form() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let userCredential = {
      email: username,
      password,
    };

    dispatch(loginUser(userCredential))
    dispatch(profileUser())

    setUsername("");
    setPassword("");

    navigate("/");
  };

  return <>
    <div className="form">
      <i className="fa fa-user-circle"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>

        <div className="input-wrapper">
          <label for="username">Username</label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="input-wrapper">
          <label for="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>

        <Button text="Sign In" />

      </form>
    </div>
  </>
}