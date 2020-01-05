import * as userType from "./user.types";

/**
|--------------------------------------------------
| SIGN UP
|--------------------------------------------------
*/

export const signUpStart = userCredentials => {
  return {
    type: userType.SIGN_UP_START,
    payload: userCredentials
  };
};
export const signUpSuccess = ({ user, additionalData }) => {
  return {
    type: userType.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
  };
};

export const signUpFailure = error => {
  return {
    type: userType.SIGN_UP_FAILURE,
    payload: error
  };
};

/**
|--------------------------------------------------
| GOOGLE SIGN IN
|--------------------------------------------------
*/
export const googleSignInStart = () => {
  return {
    type: userType.GOOGLE_SIGNIN_IN_START
  };
};

/**
|--------------------------------------------------
| EMAIL SIGN IN
|--------------------------------------------------
*/

export const emailSignInStart = emailPassword => {
  return {
    type: userType.EMAIL_SIGNIN_IN_START,
    payload: emailPassword
  };
};

/**
|--------------------------------------------------
| COMMON SUCCES & FAILURE FOR GOOGLE & EMAIL
|--------------------------------------------------
*/

export const signInSuccess = user => {
  return {
    type: userType.SIGN_IN_SUCCESS,
    payload: user
  };
};

export const signInFailure = error => {
  return {
    type: userType.SIGN_IN_FAILURE,
    payload: error
  };
};

/**
|--------------------------------------------------
| SIGN OUT
|--------------------------------------------------
*/

export const signOutStart = () => {
  return {
    type: userType.SIGN_OUT_START
  };
};

export const signOutSuccess = () => {
  return {
    type: userType.SIGN_OUT_SUCCESS
  };
};

export const signOutFailure = error => {
  return {
    type: userType.SIGN_OUT_SUCCESS,
    payload: error
  };
};

/**
|--------------------------------------------------
| CHECK USER SESSION
|--------------------------------------------------
*/

export const checkUserSession = () => {
  return {
    type: userType.CHECK_USER_SESSION
  };
};
