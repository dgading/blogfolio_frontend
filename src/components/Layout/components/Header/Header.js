import React from 'react';
import { Link } from 'react-router-dom';

import HeaderTitle from './components/HeaderTitle/HeaderTitle';

export const Header = () => (
  <div className="demo-back">
    <a className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" href="/" title="go back" role="button">
      <i className="material-icons" role="presentation">arrow_back</i>
    </a>
  </div>
);

export default Header;