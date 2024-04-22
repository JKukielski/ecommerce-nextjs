export const handleGoogleLogin = async (e) => {
  'use server';
  await signIn('google');
};

export const handleGoogleLogout = async (e) => {
  'use server';
  await signOut();
};
