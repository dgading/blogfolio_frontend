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
        <div>
          <h1>{this.state.title}</h1>
          <span>{this.state.postDate}</span>
          <div dangerouslySetInnerHTML={createPostContent (postContent)} />
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