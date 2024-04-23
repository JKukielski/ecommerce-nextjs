import { handleGoogleLogin } from '@utils/actions';
import './login.css';
import { auth } from '@utils/auth';

const LoginPage = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div className="login-container">
      <form action={handleGoogleLogin}>
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
