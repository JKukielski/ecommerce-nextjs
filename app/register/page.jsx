import './register.css';
import { FcGoogle } from 'react-icons/fc';
import RegisterForm from '@components/registerForm/RegisterForm';

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
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
