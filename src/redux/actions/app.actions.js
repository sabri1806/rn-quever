import { createActions } from "redux-actions";

const {
  setUserSuccess,
  setSignOutSuccess,
  setSignInWithGoogleSuccess
} = createActions({
  SET_USER_SUCCESS: user => user,
  SET_SIGN_OUT_SUCCESS: signOutFunc => signOutFunc,
  SET_SIGN_IN_WITH_GOOGLE_SUCCESS: signInWithGoogle => signInWithGoogle
});

const setUser = user => dispatch => {
  try {
    dispatch(setUserSuccess(user));
  } catch (error) {
    console.log(error);
  }
};

const setSignInWithGoogle = signInWithGoogle => dispatch => {
  try {
    dispatch(setSignInWithGoogleSuccess(signInWithGoogle));
  } catch (error) {
    console.log(error);
  }
};

const setSignOut = signOutFunc => dispatch => {
  try {
    dispatch(setSignOutSuccess(signOutFunc));
  } catch (error) {
    console.log(error);
  }
};

export default {
  setUser,
  setUserSuccess,
  setSignOut,
  setSignOutSuccess,
  setSignInWithGoogle,
  setSignInWithGoogleSuccess
};
