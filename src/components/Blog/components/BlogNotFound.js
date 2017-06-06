import React from 'react';
import { Link } from 'react-router-dom';

export class BlogNotFound extends React.Component {
  // componentWillMount() {
  //   const { staticContext } = this.props;
  //   if(staticContext) {
  //     staticContext.is404 = true;
  //   }
  // }

  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found!</h2>
      <p>
        <Link to="/blog">Go back</Link>
      </p>
    </div>
    );
  }
}

export default BlogNotFound;