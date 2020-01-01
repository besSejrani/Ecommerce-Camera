import React, { Component } from "react";
import shopData from "./shopData";
import PreviewCollection from "../PreviewCollection";

export class Shop extends Component {
  state = {
    collections: shopData
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collectionProps }) => {
          return <PreviewCollection key={id} {...collectionProps} />;
        })}
      </div>
    );
  }
}

export default Shop;
