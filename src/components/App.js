import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Layout from './Layout/Layout';
import IndexPage from './Page/IndexPage/IndexPage';
import AboutPage from './Page/AboutPage/AboutPage';
import BlogLanding from './Blog/BlogLanding';
import BlogSingle from './Blog/BlogSingle';
import ProjectLanding from './Project/ProjectLanding';
import ContactPage from './Page/ContactPage/ContactPage';
import { NotFoundPage } from './Page/NotFoundPage/NotFoundPage';

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Layout>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogLanding} />
          <Route exact path="/blog/:title" component={BlogSingle} />
          <Route exact path="/projects" component={ProjectLanding} />
          <Route exact path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    );
  }
}

export default App;