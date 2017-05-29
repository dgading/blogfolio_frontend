import React from 'react';
import { Route, Switch } from 'react-router-dom'; 
import Layout from './Layout/Layout'
import BasicPage from './BasicPage/BasicPage';
import { NotFoundPage } from './NotFoundPage/NotFoundPage';


const pageNotFound = () => <NotFoundPage  />;


export const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={BasicPage} />
      <Route exact path="/about" component={BasicPage} />
      <Route exact path="/contact" component={BasicPage} />
      <Route render={pageNotFound} />
    </Switch>
  </Layout>
);

export default App;