import { auth, provider } from "../Firebase/Firebase";

export function signInAPI() {
    return (dispatch) => {
        auth.signInWithPopup(provider).then((paylaod) => {
            console.log(paylaod);
        }).catch((error) => alert(error.message))
    }
}