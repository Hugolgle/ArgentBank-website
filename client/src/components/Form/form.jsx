import './form.scss'
import Button from '../../components/Button/button.jsx'
import { loginUser, profileUser } from "../../redux/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

export default function Form() {

  const message = useSelector((state) => state.user.error);
  const token = useSelector((state) => state.user.token);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    if (token) {
      dispatch(profileUser(token))
    }

  }, [token])

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userCredential = {
      email: username,
      password: password,
    };

    if (!username || !password) {
      alert('Veuillez remplir tous les champs');
      return;
    };

    try {
      await dispatch(loginUser(userCredential))


      setUsername("");
      setPassword("");
      navigate("/")

    } catch (error) {
      alert("erreur");
    }



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
        {message ? message : ""}
        <Button text="Sign In" />

      </form>
    </div>
  </>
}