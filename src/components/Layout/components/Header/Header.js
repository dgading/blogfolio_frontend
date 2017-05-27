import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header className="app-header">
    <h1 className="app-header__title">Daniel Gading</h1>
    <span className="app-header__sub-title">A full stack Javascript Developer*</span>
    <span className="app-header__sub-title--small">Also knows some Drupal and Rails</span>
  </header>
);

export default Header;