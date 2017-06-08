import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';

class Header extends React.Component {
 
  static get propTypes() {
    return {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    }
  }
  render() {
    const currentLocation = this.props.location.pathname;
    let locationClass = '';
    if (currentLocation === '/') {
      locationClass = 'home';
    } else if (currentLocation.indexOf("\/blog\/") >= 0) {
      locationClass = "blog-post";
    } else {
      locationClass = currentLocation.substr(1);
    }
    return(
      <header className={"site-header site-header--" + locationClass}>
        <h1 className={"site-header__title site-header__title--" + locationClass}>Daniel Gading</h1>
        <span className={"site-header__tag site-header__tag--" + locationClass}>A full stack developer</span>
      </header>
    );
  }
}

export default withRouter(Header);