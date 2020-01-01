import React, { Component } from "react";
import MenuItem from "../Menu-item";
import "./directory.scss";

class index extends Component {
  state = {
    section: [
      {
        id: 0,
        path: "/hats",
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        id: 1,
        path: "/jackets",
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        id: 2,
        path: "/sneakers",
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        id: 3,
        path: "/womens",
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large"
      },
      {
        id: 4,
        path: "/mens",
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large"
      }
    ]
  };

  renderProducts = () => {
    return this.state.section.map(({ id, ...section }) => {
      return <MenuItem id={id} {...section} />;
    });
  };

  render() {
    return <div className="directory-menu">{this.renderProducts()}</div>;
  }
}

export default index;
