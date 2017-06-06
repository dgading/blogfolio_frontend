import React from 'react';
import blogData from '../../../data/blog-posts.json';
import BlogTeaser from '../../Shared/Blog/BlogTeaser';

export const IndexPage = ({match, props}) => (
  <div className="content-container content-container--home">
    <div className="content-container__content--home">
      {blogData.slice(0, 3).map((data) =>
        <BlogTeaser key={data.id.toString()}
                    title={data.title}
                    slug={data.slug}
                    date={data.date} 
                    summary={data.summary} />
      )}
    </div>
  </div>
);

export default IndexPage;