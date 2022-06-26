import { auth, provider } from "../Firebase/Firebase";
import { SET_USER } from "./actionType";

export const setUser = (paylaod) => ({
    type: SET_USER,
    user: paylaod,
})

export function signInAPI() {
    return (dispatch) => {
        auth.signInWithPopup(provider).then((paylaod) => {
            dispatch(setUser(paylaod.user))
        }).catch((error) => alert(error.message))
    }
}