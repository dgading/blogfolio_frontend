import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Layout from './Layout/Layout'
import { IndexPage } from './IndexPage/IndexPage';
import { AboutPage } from './About/About';
import { NotFoundPage } from './NotFoundPage/NotFoundPage';


const pageNotFound = () => <NotFoundPage  />;


export const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route render={pageNotFound} />
    </Switch>
  </Layout>
);

export default App;