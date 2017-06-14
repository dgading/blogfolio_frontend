import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import PageId from '../Shared/PageId/PageId';
import BlogTeaser from '../Shared/Blog/BlogTeaser';

import blogData from '../../data/blog-posts.json';

const postList = blogData.map((data) =>
        <BlogTeaser key={data.id.toString()}
                    title={data.title}
                    slug={data.slug}
                    date={data.date} 
                    summary={data.summary} />
      );

export const BlogLanding = ({match}) => (
  <div className={"content-container content-container--" + match.path.substr(1)}>
    <PageId pathname={match.path.substr(1)} title={"Blog"} />
    <CSSTransitionGroup component="div" className={"content-container__content content-container__content--" + match.path.substr(1)}
        transitionName="blog-landing"
        transitionAppear={true}
        transitionAppearTimeout={1500}
        transitionEnter={true}
        transitionEnterTimeout={0}
        transitionLeave={false}>
          {postList}
      </CSSTransitionGroup>
  </div>
);

export default BlogLanding;