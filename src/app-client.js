import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './styles.css';
import { App } from './components/App';

const AppClient = () => (
  <Router>
    <App />
  </Router>
);

window.onload = () => {
  render (
    <AppClient />,
    document.getElementById('root')
  );
}