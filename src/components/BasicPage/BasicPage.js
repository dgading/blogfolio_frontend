import React from 'react';

import Header from '../Layout/components/Header/Header';
import Footer from '../Layout/components/Footer/Footer';

import { IndexPage } from '../IndexPage/IndexPage';
import { AboutPage } from '../AboutPage/AboutPage';

export default class BasicPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pageContent = '';
    let currentPath = this.props.match.path;
    if(this.props.match.path === '/') {
      pageContent = <IndexPage />
    } else {
      pageContent = <AboutPage />
    }

    return(
      <main className="mdl-layout__content">
        {currentPath !== '/' && 
          <Header />
        }
          {pageContent}
        <Footer />
      </main>
    );
  }
}