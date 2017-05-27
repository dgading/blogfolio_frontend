import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const Layout = (props) => (
  <div className="app-container">
    <Header />
    <div className="app-content">
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;