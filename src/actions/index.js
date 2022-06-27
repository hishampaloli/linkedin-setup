import { auth, provider, storage } from "../Firebase/Firebase";
import db from "../Firebase/Firebase";
import { SET_USER , SET_LOADING_STATU, GET_ARTICLES} from "./actionType";

export const setUser = (paylaod) => ({
  type: SET_USER,
  user: paylaod,
});

export const setLoading = (status) => ({
  type: SET_LOADING_STATU,
  status: status,
})

export const getArticles = (paylaod) => ({
  type: GET_ARTICLES,
  paylaod: paylaod,
})
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

export function postArticleAPI(paylaod) {
  return (dispatch) => {
    dispatch(setLoading(true))

    if (paylaod.image != '') {
      const upload = storage
      .ref(`images/${paylaod.image.name}`)
      .put(paylaod.image);
      upload.on(
        'state_changed',
         (snapshot) => {
        const progress = (snapshot.bytesTransferred /snapshot.totalBytes) * 100;

        console.log(`progress: ${progress}%`);
        if(snapshot.state === 'RUNNING') {
          console.log(`progress:${progress}%`);
        }
      },
      (error) => console.log(error.code),
      async () => {
        const downloadURL = await upload.snapshot.ref.getDownloadURL();
        db.collection('articles').add({
          actor: {
            description: paylaod.user.email,
            title: paylaod.user.displayName,
            date: paylaod.timestamp,
            image: paylaod.user.photoURL
          },
          video: paylaod.video,
          sharedImg:downloadURL,
          comments:0,
          description: paylaod.description,
        })
        dispatch(setLoading(false))
      }
      );
    
     
    } else if (paylaod.video)  {
      db.collection('articles').add({
        actor: {
          description: paylaod.user.email,
          title: paylaod.user.displayName,
          date: paylaod.timestamp,
          image: paylaod.user.photoURL
        },
        video: paylaod.video,
        sharedImg:'',
        comments:0,
        description: paylaod.description,
      })
      dispatch(setLoading(false))
    }
  };
}

export function getArticlesAPI() {
  return (dispatch) => {
    let payload;

    db.collection('articles').orderBy('actor.date', 'desc')
    .onSnapshot((snapshot) => {
      payload = snapshot.docs.map((doc) => doc.data());
      dispatch(getArticles(payload))
      console.log(payload);
    })
  }
}