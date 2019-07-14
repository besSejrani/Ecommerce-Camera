import React from "react";
import "../../sass/previewCollection.scss";
import CollectionItem from "../collectionItem";

const previewCollection = ({ title, items }) => {
  return (
    <div className="preview-collection">
      <h1 className="title">Title</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...itemProps }) => {
            return <CollectionItem key={id} {...itemProps} />;
          })}
      </div>
    </div>
  );
};

export default previewCollection;
