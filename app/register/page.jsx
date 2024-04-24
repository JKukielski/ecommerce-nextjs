import { handleGoogleLogin } from '@utils/actions';
import './register.css';
import { FcGoogle } from 'react-icons/fc';

const RegisterPage = () => {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h2 className="register-form-heading">Sign up to Shopper!</h2>
        <form action={handleGoogleLogin} className="register-google-form">
          <button>
            <FcGoogle className="register-google-icon" /> Sign in with Google
          </button>
        </form>
        <form action="" className="register-credentials-form">
          <input type="text" className="" placeholder="Full Name" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />

          <div className="register-form-btn-container">
            <button>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
