import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './components/Footer/Footer';

export const Layout = (props) => (
  <div className="app-container">
    <header className="app-header">
      <Link to="/">Home</Link>
    </header>
    <div className="app-content">
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;