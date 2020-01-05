import { takeLatest, put, call, all } from "redux-saga/effects";
import * as userType from "./user.types";
import * as actions from "./user.actions";
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from "../../firebase/firebase.utils";

/**
|--------------------------------------------------
| REFACTORED CODE
|--------------------------------------------------
*/

export function* getSnpashotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
    const userSnapshot = yield userRef.get();
    yield put(
      actions.signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data()
      })
    );
  } catch (error) {
    put(actions.signInFailure(error));
  }
}

/**
|--------------------------------------------------
| WORKER SAGA :
|--------------------------------------------------
*/

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnpashotFromUserAuth(user);
  } catch (error) {
    yield put(actions.signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnpashotFromUserAuth(user);
  } catch (error) {
    put(actions.signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnpashotFromUserAuth(userAuth);
  } catch (error) {
    yield put(actions.signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(actions.signOutSuccess());
  } catch (error) {
    yield put(actions.signOutFailure());
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(actions.signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(actions.signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnpashotFromUserAuth(user, additionalData);
}

/**
|--------------------------------------------------
| WATCH SAGA :
|--------------------------------------------------
*/
export function* onGoogleSignInStart() {
  yield takeLatest(userType.GOOGLE_SIGNIN_IN_START, signInWithGoogle);
}

export function* onEmailSigninInStart() {
  yield takeLatest(userType.EMAIL_SIGNIN_IN_START, signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest(userType.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(userType.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(userType.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(userType.SIGN_UP_SUCCESS, signInAfterSignUp);
}

/**
|--------------------------------------------------
| USER SAGA :
|--------------------------------------------------
*/
export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSigninInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess)
  ]);
}
