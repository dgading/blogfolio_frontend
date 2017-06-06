import React from 'react';
import blogData from '../../data/blog-posts.json';
import BlogTeaser from '../Shared/Blog/BlogTeaser';

export const BlogLanding = ({match}) => (
  <div className={"content-container content-container--" + match.path.substr(1)}>
    <div className={"content-container__header content-container__header--" + match.path.substr(1)}>
      <h1 className={"content-container__title content-container__title--" + match.path.substr(1)}>Blog</h1>
    </div>
    <div className={"content-container__content content-container__content--" + match.path.substr(1)}>
      {blogData.map((data) =>
        <BlogTeaser key={data.id.toString()}
                    title={data.title}
                    slug={data.slug}
                    date={data.date} 
                    summary={data.summary} />
      )}
    </div>
  </div>
);

export default BlogLanding;