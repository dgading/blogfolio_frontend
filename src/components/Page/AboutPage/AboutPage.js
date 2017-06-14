import React from 'react';
import PageId from '../../Shared/PageId/PageId';

export const AboutPage = ({match}) => (  
  <div className={"content-container content-container--" + match.path.substr(1)}>
    <PageId pathname={match.path.substr(1)} title={"About Me"} />
    <div className={"content-container__content content-container__content--" + match.path.substr(1)}>
      <p>
        Hi! If you weren't sure from the URL, I'm Daniel Gading a full stack web developer mainly working with Javascript, PHP, and Drupal -- along with their corresponding stacks.  
      </p>
      <p>
        Most of my recent work has been using Drupal, working mainly with the Drupal API to create custom tools and builds for clients at. In my free time I'm always playing with newest hot thing, which ranges from JS frameworks to VR in the Unity framework using C#.
      </p>
      <p>
        After many iterations of personal sites including Wordpress, Drupal, and BoltCMS, I decided on this one. It is completely built with React and has allowed me to play with all the new stuff out there while also putting something I'm proud of on the web. There are a few parts to this site which in include blog posts and the projects. Blog posts will normally be one shot ideas or cool tricks. While the Projects will be bigger builds with Github repos and usually have multiple blog posts showing off the different parts of the project. 
      </p>
      <p>
        You can check out more at this site's project, but it is currently React with an Express/Mongo backend all hosted on an Ubuntu 16.04 droplet at Digital Ocean.
      </p>
      <p>
        On the Contact page, I've listed some of the best ways to get in touch if you have any questions or would like to discuss any future projects. 
      </p>
    </div>
  </div>
);

export default AboutPage;