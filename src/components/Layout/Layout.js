import React from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';
import { CSSTransitionGroup } from 'react-transition-group'; 

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
    let locationKey = 0;
    if (currentLocation === '/') {
      locationClass = 'home';
      locationKey = 1;
    } else if (currentLocation.indexOf("\/blog\/") >= 0) {
      locationClass = "blog-post";
      locationKey = 1;
    } else {
      locationClass = currentLocation.substr(1);
      locationKey = 1;
    }
    return(
      <div className={"layout-container layout-container--" + locationClass}>
        <Header />
        <CSSTransitionGroup component="div" className="navigation-container"
          transitionName="sitenav"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={true}
          transitionEnterTimeout={0}
          transitionLeave={false}>
          <SiteNavigation key={locationKey}/>
        </CSSTransitionGroup>
        {this.props.children}
      </div>
    );
  }

}

export default withRouter(Layout);