import React from 'react';

import Nav from '../Nav/Nav.js'
import Main from '../Main/Main.js'
import Footer from '../Footer/Footer.js'

export default function App() {
  return (
    <div className="window_page">

      <header className="window_head">
        <Nav />
      </header>

      <main className="window_main">
        <Main />
      </main>

      <footer className="window_footer">
        <Footer />
      </footer>

    </div>
  );
}
