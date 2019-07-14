import React from "react";
import "../../sass/menu-item.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, history, path }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(path)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
