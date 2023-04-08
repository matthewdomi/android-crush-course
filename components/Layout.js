import Head from 'next/head';
import Link from 'next/link';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>My Next.js App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <IonHeader>
        <IonToolbar color={'primary'}>
          <IonTitle>Domi App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="flex flex-col justify-between h-screen">
        <header className="bg-gray-800 text-white py-4">
          <nav className="max-w-screen-lg mx-auto px-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">
              My Next.js App
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link className="hover:text-gray-300" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="max-w-screen-lg mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy; {new Date().getFullYear()} My Next.js App</p>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
