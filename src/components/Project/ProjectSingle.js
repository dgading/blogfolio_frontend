import React from 'react';
import dataSources from '../../data/data-sources.json';
import axios from 'axios';
import BlogTeaser from '../Shared/Blog/BlogTeaser';

class ProjectSingle extends React.Component {
  constructor(props, {match}) {
    super(props);
    this.state = {singleProject: {}, posts: []}
  }

  componentDidMount(props) {
  const title = this.props.match.params.title.replace(/-/g, '%20').toLowerCase();  
  axios.get(dataSources.singleProject + title)
    .then(res => {
      const data = res.data.data[0];
        this.setState({ 
          valid: true,
          title: data.attributes.title,
          content: data.attributes.body.value,
          date: data.attributes.field_date,
          posts: []
        });
        return axios.get(dataSources.projectPosts + data.id);
      }).then((response) => {
        const posts = response.data.data.map(obj => obj );
        this.setState({ posts: posts });
      });
      
    }

  render() {
    const projectContent = this.state.content;
    
    function createProjectContent(dangerousContent) {
      return {__html: dangerousContent};
    }
    if(true === true) {
      return(
        <div className="single-project-container">
          <div className="single-project-header">
            <h1 className="single-project-header__title">
              { this.state.title }
            </h1>
            <span className="single-project-header__date">
              { this.state.date }
            </span>
          </div>
          <div>
            <div className="single-project-container__content"
               dangerouslySetInnerHTML={createProjectContent (projectContent)} />
          </div>
          <div className="content-header content-header--single-project">
            <span className="content-header__title content-header__title--single-project">
              Projects
            </span>
          </div>
          { this.state.posts.map(post =>
              <BlogTeaser key={post.attributes.nid}
              title={post.attributes.title}
              slug={post.attributes.title.replace(/\s+/g, '-').toLowerCase()}
              date={post.attributes.field_date} 
              summary={post.attributes.body.summary} />
            )}
        </div>
      );
    } 
  }
}

export default ProjectSingle;
