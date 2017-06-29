import React from 'react';
import { Link } from 'react-router-dom';

function createPostContent(dangerousContent) {
  return {__html: dangerousContent};
}

export const BlogTeaser = (props) => (
  <div className="blog-teaser">
    <h2 className="blog-teaser__title">
      <Link to={"/blog/" + props.slug} className="blog-teaser__link">{props.title}</Link>
    </h2>
    <span className="blog-teaser__date">{props.date}</span>
    <div className="blog-teaser__summary"
        dangerouslySetInnerHTML={createPostContent (props.summary)}
    />
  </div>
);

export default BlogTeaser;