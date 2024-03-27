import { Roboto } from 'next/font/google';
import './globals.css';
import Navbar from '@components/navbar/Navbar';
import Footer from '@components/footer/Footer';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
