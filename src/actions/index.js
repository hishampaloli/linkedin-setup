import { auth, provider } from "../Firebase/Firebase";
import { SET_USER } from "./actionType";

export const setUser = (paylaod) => ({
  type: SET_USER,
  user: paylaod,
});

export function signInAPI() {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((paylaod) => {
        console.log(paylaod.user);
        dispatch(setUser(paylaod.user));
      })
      .catch((error) => alert(error.message));
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth.signOut().then(() => {
      dispatch(setUser(null)).catch((error) => {
        console.log(error.message);
      });
    });
  };
}

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}
