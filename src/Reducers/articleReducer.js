import { SET_LOADING_STATU, GET_ARTICLES } from "../actions/actionType";

export const initState = {
  articles: [],
  loading: false,
};

const articleReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case SET_LOADING_STATU:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
};

export default articleReducer;
