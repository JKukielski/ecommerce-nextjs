import Link from 'next/link';

const Register = () => {
  return (
    <div>
      <div>
        <h1>Register</h1>
        <form>
          <label htmlFor="name">
            Name
            <input type="text" id="name" />
          </label>
          <label htmlFor="email">
            Email
            <input type="email" id="email" />
          </label>
          <label htmlFor="password">
            Password
            <input type="password" id="password" />
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
