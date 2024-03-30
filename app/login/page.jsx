import './login.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <form action="">
        <button>Login with Google</button>
      </form>
      <form action="">
        <label htmlFor="">
          Username
          <input type="text" />
        </label>
        <label htmlFor="">
          Password
          <input type="password" />
        </label>
      </form>
    </div>
  );
};

export default LoginPage;
