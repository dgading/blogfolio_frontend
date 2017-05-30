import React from 'react';

export const IndexPage = () => (
  <div className="index-container">
    <div className="grid-test grid-title">
      <h1>Daniel Gading</h1>
      <span>A full stack developer</span>
    </div>
    <nav className="site-navigation">
      <div className="sn site-navigation__about">
        <a href="/about">About</a>
      </div>
      <div className="sn site-navigation__blog">
        <a href="/blog">Blog</a>
      </div>
      <div className="sn site-navigation__projects">
        <a href="/projects">Projects</a>
      </div>
      <div className="sn site-navigation__contact">
        <a href="/contact">Contact</a>
      </div>
    </nav>
    <div className="hp-post post1">
      <h2>Blog post 1</h2>
      <p>Despite not being particularly famous for it, one important part of the Swiss Style is its remarkable use of photography.</p>
    </div>
    <div className="hp-post post2">
      <h2>Longer Blog Post Title</h2>
      <p>Different font-sizes not only generate visual impact, but also provide readers with a hint about the hierarchy of the presented data.</p>
    </div>
    <div className="hp-post post3">
      <h2>Longer Blog Post Title 2</h2>
      <p>Different font-sizes not only generate visual impact, but also provide readers with a hint about the hierarchy of the presented data.</p>
    </div>
  </div>
);

export default IndexPage;