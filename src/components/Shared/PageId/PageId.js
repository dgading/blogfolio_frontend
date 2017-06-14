import React from 'react';

export const PageId = (props) => (
  <div className={"content-header content-header--" + props.pathname}>
    <h1 className={"content-header__title content-header__title--" + props.pathname}>{props.title}</h1>
  </div>
);

export default PageId;