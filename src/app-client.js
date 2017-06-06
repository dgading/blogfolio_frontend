import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './styles.css';
import { App } from './components/App';

export class AppClient extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Router>
        <App />
      </Router>
    );
  }
}

export default AppClient;

window.onload = () => {
  render (
    <AppClient />,
    document.getElementById('root')
  );
}