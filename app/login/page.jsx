'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';

const Login = () => {
  const [error, setError] = useState('');
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.status === 'authenticated') {
      router.replace('/dashboard');
    }
  }, [session, router]);

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError((prevErrors) => ({ ...prevErrors, email: 'Invalid email' }));
      return;
    }

    if (password.length < 8) {
      setError((prevErrors) => ({
        ...prevErrors,
        password: 'Password must be at least 8 characters long',
      }));
      return;
    }

    const response = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (response?.error) {
      setError('Invalid email or password');
      if (response?.url) router.replace('/dashboard');
    } else {
      setError('');
    }
  };

  return (
    <div>
      {' '}
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            Email
            <input type="email" id="email" />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" id="password" />
          </label>
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
        <p>
          Not signed up yet? <Link href="/register">Create an account!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
