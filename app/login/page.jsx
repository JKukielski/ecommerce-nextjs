import { handleGoogleLogin, login } from '@utils/actions';
import './login.css';
import { auth } from '@utils/auth';
import { FcGoogle } from 'react-icons/fc';
import LoginForm from '@components/loginForm/LoginForm';

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
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
