import React, { Component } from "react";
import MenuItem from "../Menu-item";
import "../../sass/directory.scss";

class index extends Component {
  state = {
    sections: [
      {
        id: 0,
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        id: 1,
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        id: 2,
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        id: 3,
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large"
      },
      {
        id: 4,
        title: "womens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large"
      }
    ]
  };

  renderProducts = () => {
    return this.state.sections.map(({ id, title, imageUrl, size }) => {
      return <MenuItem id={id} title={title} image={imageUrl} size={size} />;
    });
  };

  render() {
    return <div className="directory-menu">{this.renderProducts()}</div>;
  }
}

export default index;
