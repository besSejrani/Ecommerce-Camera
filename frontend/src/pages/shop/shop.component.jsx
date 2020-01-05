import React, { Component } from "react";
import { Route } from "react-router-dom";

import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

import { connect } from "react-redux";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";

class ShopPage extends Component {
  componentDidMount = () => {
    const { fetchCollectionStart } = this.props;

    fetchCollectionStart();
  };

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        ></Route>
      </div>
    );
  }
}

export default connect(null, { fetchCollectionStart })(ShopPage);
