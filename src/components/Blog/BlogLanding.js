import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import axios from 'axios';

import PageId from '../Shared/PageId/PageId';
import BlogTeaser from '../Shared/Blog/BlogTeaser';

import dataSources from '../../data/data-sources.json';

class BlogLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('dataSources.allPosts')
      .then(res => {
        const posts = res.data.data.map(obj => obj );
        console.log(posts)
        this.setState({ posts });
      });
  }


  render() {
    return(
      <div className={"content-container content-container--" + this.props.match.path.substr(1)}>
        <PageId pathname={this.props.match.path.substr(1)} title={"Blog"} />
        <div className={"content-container__content content-container__content--" + this.props.match.path.substr(1)}>
        { this.state.posts.map(post =>
          <BlogTeaser key={post.attributes.nid}
            title={post.attributes.title}
            slug={post.attributes.title.replace(/\s+/g, '-').toLowerCase()}
            date={post.attributes.field_date} 
            summary={post.attributes.body.summary} />
          )}
        </div>
      </div>
    );
  }
 }


export default BlogLanding;
