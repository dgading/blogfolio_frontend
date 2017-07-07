import React from 'react';
import { Link } from 'react-router-dom';

// function createPostContent(dangerousContent) {
//   if(dangerousContent) {
//     return {__html: dangerousContent};
//   }   
// }

export const ProjectTeaser = (props) => (
  <div className="project-teaser">
    <h2 className="project-teaser__title">
      <Link to={"/projects/" + props.slug} className="project-teaser__link">{props.title}</Link>
    </h2>
    <span className="project-teaser__date">{props.date}</span>
    <div className="project-teaser__summary">{props.summary}</div>
  </div>
);

export default ProjectTeaser;