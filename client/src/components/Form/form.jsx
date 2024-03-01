import './form.scss'
import Button from '../../components/Button/button.jsx'
import { loginUser } from "../../redux/userSlice.js";
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
    
        dispatch(loginUser(userCredential)).then((result) => {
          if (result.payload) {
            setUsername("");
            setPassword("");
            navigate("/");
          }
        });
      };

    return <>
        <div className="form">
            <i class="fa fa-user-circle"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div class="input-wrapper">
                    <label for="username">Username</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    
                </div>
                <div class="input-wrapper">
                    <label for="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div class="input-remember">
                    <input type="checkbox" id="remember-me" />
                    <label for="remember-me">Remember me</label>
                </div>
                <Button text="Sign In" />

            </form>
        </div>
    </>
}