import './register.css';

const RegisterPage = () => {
  return (
    <div className="register-container">
      <form action="">
        <label htmlFor="">
          Email
          <input type="email" />
        </label>
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

export default RegisterPage;
