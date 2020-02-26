import { handleActions } from "redux-actions";
import AppActions from "../actions/app.actions";

const initialState = {
  user: null,
  signOut: null
};

export default handleActions(
  {
    [AppActions.setUserSuccess]: (state, { payload }) =>
      handleSetUser(state, payload),
    [AppActions.setSignOutSuccess]: (state, { payload }) =>
      handleSetSignOut(state, payload),
    [AppActions.setSignInWithGoogleSuccess]: (state, { payload }) =>
      handleSetSignInWithGoogle(state, payload)
  },
  initialState
);

const handleSetUser = (state, payload) => {
  return { ...state, user: payload };
};

const handleSetSignOut = (state, payload) => {
  return { ...state, signOut: payload };
};

const handleSetSignInWithGoogle = (state, payload) => {
  return { ...state, signInWithGoogle: payload };
};
