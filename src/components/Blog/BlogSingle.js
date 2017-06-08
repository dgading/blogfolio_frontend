import React from 'react';
import blogData from '../../data/blog-posts.json';
import BlogNotFound from './components/BlogNotFound';

class BlogSingle extends React.Component {
  constructor(props, {match}) {
    super(props);
    this.state = {valid: true}
  }
  
  filterPosts(props) {
    for (var i=0; i < blogData.length; i++) {
      if(blogData[i].slug === this.props.match.params.title) {
        return blogData[i];
      }
    }
  }

  componentDidMount(props) {
    let postDetails = this.filterPosts();
    if(postDetails) {
      this.setState({
        valid: true,
        title: postDetails.title,
        postDate: postDetails.date,
        content: postDetails.content
      });
    } else {
      this.setState({valid: false});
    }
  }

  render() {
    const postContent = this.state.content;
    function createPostContent(dangerousContent) {
      return {__html: dangerousContent};
    }
    if(this.state.valid === true) {
      return(
        <div className="content-container content-container--blog-post">
          <div className="content-header content-header--blog-post">
            <h1 className="content-header__title content-header__title--blog-post">
              {this.state.title}
            </h1>
            <span className="content-header__date--blog-post">{this.state.postDate}</span>
          </div>
          <div>
          <div className="content-container__content content-container__content--blog-post"
               dangerouslySetInnerHTML={createPostContent (postContent)} />
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