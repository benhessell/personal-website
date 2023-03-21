import React from 'react';

import Nav from '../Nav/Nav.js'
import Main from '../Main/Main.js'
import Footer from '../Footer/Footer.js'
import WelcomeLogo from '../../components/WelcomeLogo.js'

export default function App() {
  return (
    <div className="window_page">
      <WelcomeLogo />

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
