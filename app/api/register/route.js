import User from '@models/User';
import connect from '@utils/database';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  const { name, email, password } = await req.json();

  await connect();

  const exisitingUser = await User.findOne({ email });

  if (exisitingUser) {
    return new NextResponse('The provided email is already signed up.', {
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse('User successfully registered.', {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
