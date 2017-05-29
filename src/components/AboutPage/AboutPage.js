import React from 'react';

export const AboutPage = (props) => (  
  <div className="demo-blog__posts mdl-grid">
    <div className="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col">
      <div className="mdl-card__media mdl-color-text--grey-50">
        <h3>A little about me</h3>
      </div>
      <div className="mdl-color-text--grey-700 mdl-card__supporting-text">
        <p>
          I've been doing web development for about 4 years now. I have worked 
          with many languages, but mainly use Javascript and PHP now. I started 
          out as mainly working on the frontend but as the web has gotten more 
          complex, I've found myself working equally as much in servers or 
          databases as I am in implementing UX or styles. My interests have 
          recently drawn me into the worlds of React and VR. This site is one 
          of most complete React projects I have worked on. It should prove to be
          a good playground for adding all those cool bells and whistles I can't
          into any of my current work. 
        </p>
        
      </div>
    </div>
  </div>
);

export default AboutPage;