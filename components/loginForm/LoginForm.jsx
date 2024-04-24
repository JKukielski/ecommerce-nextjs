'use client';
import { login } from '@utils/actions';
import React from 'react';
import './loginForm.css';

const LoginForm = () => {
  return (
    <form action={login} className="login-credentials-form">
      <input type="text" className="" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />

      <div className="login-form-btn-container">
        <button>Sign in</button>
      </div>
    </form>
  );
};

export default LoginForm;
