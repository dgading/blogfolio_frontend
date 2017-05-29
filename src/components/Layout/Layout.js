import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const Layout = (props) => (
  <div className="demo-blog demo-blog--blogpost mdl-layout mdl-js-layout has-drawer is-upgraded">
    {props.children}
    <div className="mdl-layout__obfuscator"></div>
  </div>
);

export default Layout;