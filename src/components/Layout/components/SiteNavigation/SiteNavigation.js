import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router';

import svgIcons from '../../../../data/icons.json';
class SiteNavigation extends React.Component {
 
  static get propTypes() {
    return {
      match: PropTypes.object.isRequired,
      location: PropTypes.object.isRequired,
      history: PropTypes.object.isRequired
    }
  }
  

  render() {
    const links = [
      {title: 'Home', path: '/', icon: svgIcons.home},
      {title: 'About', path: '/about', icon: svgIcons.about},
      {title: 'Blog', path: '/blog', icon: svgIcons.blog},
      {title: 'Projects', path: '/projects', icon: svgIcons.projects},
      {title: 'Contact', path: '/contact', icon: svgIcons.contact},
      ];
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
      <nav className={"site-navigation site-navigation--" + locationClass}>
        {links.map(function(link, i) {
          let icon = link.icon;
          return (
            <div 
              key={i} 
              className={"site-navigation__item site-navigation__item--" + (link.title).toLowerCase() + 
                        " site-navigation__item--" + locationClass + "-location" + " site-navigation__" + (link.title).toLowerCase() + "--" + locationClass + "-location"}>
              <NavLink 
                to={(link.path).toLowerCase()} 
                className={"site-navigation__link site-navigation__link--" + (link.title).toLowerCase() + " site-navigation__link--" + locationClass + "-location"}>
                <span className={"navigation-icon navigation-icon--" + (link.title).toLowerCase() + " navigation-icon--" + locationClass + "-location"} 
                      dangerouslySetInnerHTML={{__html: icon}} />
                <span className={"navigation-link__inner navigation-link__inner--" + (link.title).toLowerCase() + " navigation-link__inner--" + locationClass + "-location"}>
                  {link.title}
                </span>
              </NavLink>
            </div>
          );
        })}
      </nav>
    );
  }
}

export default withRouter(SiteNavigation);