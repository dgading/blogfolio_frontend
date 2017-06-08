import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'; 

export const ProjectLanding = ({match}) => (
  <div className={"content-container content-container--" + match.path.substr(1)}>
    <div className={"content-header content-header--" + match.path.substr(1)}>
      <h1 className={"content-header__title content-header__title--" + match.path.substr(1)}>Projects</h1>
    </div>
    <div className={"content-container__content content-container__content--" + match.path.substr(1)}>
      
      <CSSTransitionGroup component="div" className="announcement-container"
          transitionName="announcement"
          transitionAppear={true}
          transitionAppearTimeout={10000}
          transitionEnter={true}
          transitionEnterTimeout={0}
          transitionLeave={false}>
          <span className="content-container__announcement" key={match.path.substr(1)}>Coming Soon!</span>
          <span className="content-container__announcement--apology">Don't judge me</span>
        </CSSTransitionGroup>
    </div>
  </div>
);

export default ProjectLanding;