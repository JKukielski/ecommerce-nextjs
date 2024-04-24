import { handleGoogleLogin } from '@utils/actions';
import './login.css';
import { auth } from '@utils/auth';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = async () => {
  const session = await auth();

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h2 className="login-form-heading">Welcome back!</h2>
        <form action={handleGoogleLogin} className="login-google-form">
          <button>
            <FcGoogle className="login-google-icon" /> Sign in with Google
          </button>
        </form>
        <form action="" className="login-credentials-form">
          <input
            type="text"
            className=""
            placeholder="Username"
            name="username"
          />
          <input type="password" placeholder="Password" name="password" />

          <div className="login-form-btn-container">
            <button>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
