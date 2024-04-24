'use client';
import { register } from '@utils/actions';
import { useFormState } from 'react-dom';
import './registerForm.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push('/login');
  }, [state?.success, router]);

  return (
    <form action={formAction} className="register-credentials-form">
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
      {state?.error}
      <Link href="/login">Already have an account? Sign in</Link>
    </form>
  );
};

export default RegisterForm;
