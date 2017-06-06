import React from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SiteNavigation from './components/SiteNavigation/SiteNavigation';

export class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  
  static get propTypes() {
    return {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    }
  }

  render(props) {
    const currentLocation = this.props.location.pathname;
    let locationClass = '';
    if (currentLocation === '/') {
      locationClass = 'home';
    } else {
      locationClass = currentLocation.substr(1);
    }
    return(
      <div className={"layout-container layout-container--" + locationClass}>
        <Header />
        <SiteNavigation />
        {this.props.children}
      </div>
    );
  }

}

export default withRouter(Layout);