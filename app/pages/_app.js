// _app.js
import React from 'react';
import Link from 'next/link';

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/list">List</Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
