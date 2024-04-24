'use server';

import User from '@models/User';
import { signIn, signOut } from './auth';
import { connectToDb } from './database';
import bcrypt from 'bcryptjs';

export const handleGoogleLogin = async (e) => {
  'use server';
  await signIn('google');
};

export const handleGoogleLogout = async (e) => {
  'use server';
  await signOut('google');
};

export const register = async (prevState, formData) => {
  const { full_name, email, username, password } = Object.fromEntries(formData);

  try {
    connectToDb();
    const user = await User.findOne({ username });

    if (user) {
      return { error: 'Username already exists.' };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name: full_name,
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();
    console.log('New user saved to DB');
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong.' };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn('credentials', { username, password });
  } catch (error) {
    console.log(error);
    return { error: 'Something went wrong.' };
  }
};
