import { takeLatest, call, put, all } from "redux-saga/effects";
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";

import * as shopType from "./shop.types";
import * as actions from "./shop.actions";

/**
|--------------------------------------------------
| WORKER SAGA :
|--------------------------------------------------
*/

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");

    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);

    yield put(actions.fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(actions.fetchCollectionsFailure, error.message);
  }
}

/**
 |--------------------------------------------------
 | WATCH SAGA : 
 |--------------------------------------------------
 */

export function* onFetchCollection() {
  yield takeLatest(shopType.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(onFetchCollection)]);
}
