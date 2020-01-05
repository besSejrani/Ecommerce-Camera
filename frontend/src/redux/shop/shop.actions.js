import * as shopType from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => {
  return {
    type: shopType.FETCH_COLLECTIONS_START
  };
};

export const fetchCollectionsSuccess = collectionsMap => ({
  type: shopType.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => {
  return {
    action: shopType.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
  };
};

export const fetchCollectionsStartAsync = () => async dispatch => {
  const collectionRef = firestore.collection("collections");
  dispatch(fetchCollectionStart());

  collectionRef
    .get()
    .then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    })
    .catch(error => dispatch(fetchCollectionsFailure(error.message)));
};
