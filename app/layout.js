import Navbar from './components/Navbar';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Custom meta tags, favicon, etc. */}
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <div>
          {/* Navbar */}
          <Navbar />
          
          <main className="flex-1">{children}</main>
          
          <footer className="text-center">
            <Footer/>
          </footer>
        </div>
      </body>
    </html>
  );
}
