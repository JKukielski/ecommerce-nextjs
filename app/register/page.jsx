'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Register = () => {
  const [error, setError] = useState('');
  const router = useRouter();
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if (!isValidEmail(email)) {
      setError('Invalid email');
      return;
    }

    if (!password || password.length < 8) {
      setError('Invalid password');
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response === 400) {
        setError('Email  already in use.');
      }
      if (response.status === 200) {
        setError('');
        router.push('/login');
      }
    } catch (error) {
      setError('Try again.');
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name
            <input type="text" id="name" name="name" className="text-black" />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              className="text-black"
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              className="text-black"
            />
          </label>
          <button type="submit">Register</button>
        </form>
        <p>
          Already a user? <Link href="/login">Log in!</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
