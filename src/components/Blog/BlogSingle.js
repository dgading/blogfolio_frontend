import React from 'react';
import dataSources from '../../data/data-sources.json';
import BlogNotFound from './components/BlogNotFound';
import axios from 'axios';

class BlogSingle extends React.Component {
  constructor(props, {match}) {
    super(props);
    this.state = {}
  }

  componentDidMount(props) {
  const title = this.props.match.params.title.replace(/-/g, '%20').toLowerCase()
  axios.get('dataSources.singlePost' + title)
    .then(res => {
      
      const data = res.data.data[0];
        this.setState({ 
          valid: true,
          title: data.attributes.title,
          content: data.attributes.body.value,
          date: data.attributes.field_date
        });
      });
    }

  render() {
    const postContent = this.state.content;
    function createPostContent(dangerousContent) {
      return {__html: dangerousContent};
    }
    if(true === true) {
      return(
        <div className="blog-post-container">
          <div className="blog-post-header">
            <h1 className="blog-post-header__title">
              { this.state.title }
            </h1>
            <span className="blog-post-header__date">
              { this.state.date }
            </span>
          </div>
          <div>
            <div className="blog-post-container__content"
               dangerouslySetInnerHTML={createPostContent (postContent)} />
          </div>
          <div className="content-header content-header--blog-post">
            <span className="content-header__title content-header__title--blog-post">
              Blog
            </span>
          </div>
        </div>
      );
    } else {
      return(
        <BlogNotFound />
      );
    }
  }
}

export default BlogSingle;
