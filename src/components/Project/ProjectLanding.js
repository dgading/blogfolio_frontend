import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'; 
import axios from 'axios';
import PageId from '../Shared/PageId/PageId';
import ProjectTeaser from './ProjectTeaser';

import dataSources from '../../data/data-sources.json';

class ProjectLanding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios.get(dataSources.allProjects)
      .then(res => {
        const projects = res.data.data.map(obj => obj );
        this.setState({ projects });
      });
  }

  render() {
    return(
        <div className={"content-container content-container--" + this.props.match.path.substr(1)}>
          <PageId pathname={this.props.match.path.substr(1)} title={"Projects"} />
          <div className={"content-container__content content-container__content--" + this.props.match.path.substr(1)}>
            { this.state.projects.map(project =>
              <ProjectTeaser key={project.attributes.nid}
              title={project.attributes.title}
              slug={project.attributes.title.replace(/\s+/g, '-').toLowerCase()}
              date={project.attributes.field_date} 
              summary={project.attributes.body.summary} />
            )}
          </div>
        </div>
    );
  }
}

export default ProjectLanding;