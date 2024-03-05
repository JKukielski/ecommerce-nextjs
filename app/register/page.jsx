'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState({});
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.name.length < 2) {
      setError((prevErrors) => ({
        ...prevErrors,
        name: 'Name must be at least 2 characters long',
      }));
      return;
    }

    if (!isValidEmail(user.email)) {
      setError((prevErrors) => ({ ...prevErrors, email: 'Invalid email' }));
      return;
    }

    if (user.password.length < 8) {
      setError((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 8 characters long',
      }));
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('/api/register', user);

      if (response.status === 400) {
        setError((prevErrors) => ({ ...prevErrors, email: 'Invalid email' }));
      }

      if (response.status === 200) {
        setError({});
        router.push('/login');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.name.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div>
      <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              className="text-black"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </label>
          {error.name && <p>{error.name}</p>}
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              className="text-black"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </label>
          {error.email && <p>{error.email}</p>}
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              className="text-black"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </label>
          {error.password && <p>{error.password}</p>}
          <button type="submit">
            {buttonDisabled ? 'Loading...' : 'Sign up'}
          </button>
        </form>
        <p>
          Already a user? <Link href="/login">Log in!</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
