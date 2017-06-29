import React from 'react';
import dataSources from '../../../data/data-sources.json';
import BlogTeaser from '../../Shared/Blog/BlogTeaser';
import axios from 'axios';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(dataSources.allPosts)
      .then(res => {
        const posts = res.data.data.map(obj => obj );
        this.setState({ posts });
      });
  }

  render() {
    
    return(
      <div className="content-container content-container--home">
        <div className="content-container__content--home">
          {this.state.posts.slice(0, 3).map((data) =>
            <BlogTeaser key={data.attributes.uuid.toString()}
                    title={data.attributes.title}
                    slug={data.attributes.title.replace(/\s+/g, '-').toLowerCase()}
                    date={data.date}
                    summary={data.attributes.body.summary}
                    uuid={data.attributes.uuid}
                    />
            )}
        </div>
      </div>
    );
  }

}

export default IndexPage;
        

 