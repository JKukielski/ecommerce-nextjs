import Link from 'next/link';

const Login = () => {
  return (
    <div>
      {' '}
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">
            Email
            <input type="email" id="email" />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" id="password" />
          </label>
          <button type="submit">Login</button>
        </form>
        <p>
          Not signed up yet? <Link href="/register">Create an account!</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
