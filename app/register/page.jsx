import { handleGoogleLogin, register } from '@utils/actions';
import './register.css';
import { FcGoogle } from 'react-icons/fc';

const RegisterPage = () => {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <h2 className="register-form-heading">Sign up to Shopper!</h2>
        <form action="" className="register-google-form">
          <button>
            <FcGoogle className="register-google-icon" /> Sign in with Google
          </button>
        </form>
        <form action={register} className="register-credentials-form">
          <input
            type="text"
            className=""
            placeholder="Full Name"
            name="full_name"
          />
          <input type="email" placeholder="Email" name="email" />
          <input type="text" placeholder="Username" name="username" />
          <input type="password" placeholder="Password" name="password" />

          <div className="register-form-btn-container">
            <button>Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
