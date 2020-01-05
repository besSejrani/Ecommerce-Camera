import { all, call, takeLatest, put } from "redux-saga/effects";
import * as userType from "../user/user.types";
import { clearCart } from "./cart.actions";

/**
|--------------------------------------------------
| WORKER SAGA
|--------------------------------------------------
*/

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

/**
|--------------------------------------------------
| WATCH SAGA
|--------------------------------------------------
*/

export function* onSignOutSuccess() {
  yield takeLatest(userType.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
