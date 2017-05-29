import React from 'react';

export const IndexPage = () => (
  <div className="demo-blog__posts mdl-grid">
    <div className="mdl-card amazing mdl-cell mdl-cell--12-col">
      <div className="mdl-card__title mdl-color-text--grey-50">
        <h3 className="quote">New Site Coming Soon!</h3>
      </div>
      <div className="mdl-card__supporting-text mdl-color-text--grey-600">
        This is the future home of danielgading.com. I'm currently working on a new 
        MERN blog. To get the ball rolling, I took a weekend to put up this MVP. The
        new site will contain a new design, blogs, projects, and more. Check back soon
        for more updates. I've also added a small page about me and a couple of ways to
        to get in touch.       
      </div>
    </div>

    <div className="mdl-card coffee-pic mdl-cell mdl-cell--8-col">
      <div className="mdl-card__media mdl-color-text--grey-50">
        <h3><a href="/about">A little about me</a></h3>
      </div>
      <div className="mdl-card__supporting-text meta mdl-color-text--grey-600">
        <div className="minilogo"></div>
        <div>
          <strong>The Newist</strong>
          <span>2 days ago</span>
        </div>
      </div>
    </div>

    <div className="mdl-card something-else mdl-cell mdl-cell--8-col mdl-cell--4-col-desktop">
      <div className="mdl-card__media mdl-color--white mdl-color-text--grey-600">
        <img src="images/logo.png" />
        +1,337
      </div>
      <div className="mdl-card__supporting-text meta meta--fill mdl-color-text--grey-600">
        <div>
          <strong>The Newist</strong>
        </div>
        <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect" for="menubtn">
          <li className="mdl-menu__item">About</li>
          <li className="mdl-menu__item">Message</li>
          <li className="mdl-menu__item">Favorite</li>
          <li className="mdl-menu__item">Search</li>
        </ul>
        <button id="menubtn" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
          <i className="material-icons" role="presentation">more_vert</i>
          <span className="visuallyhidden">show menu</span>
        </button>
      </div>
    </div>
  </div>
);

export default IndexPage;