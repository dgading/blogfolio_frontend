import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const Layout = (props) => (
  <div className="layout-container">
    {props.children}
  </div>
);

export default Layout;