import axios from "axios";
import { actionType } from "../config/constant";
import { getPosts } from "../redux/postSlicer";

export const post = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_HEROKU_URL}/post`)
    dispatch(getPosts(res.data));
  } catch (error) {
    console.log(error);
  }
};


/* export const getPost = (dispatch) => {
 axios
  .get(`${process.env.REACT_APP_HEROKU_URL}/post`)
  .then((res) => {
   dispatch({ type: actionType.GET_POSTS, payload: res.data });
  })
  .catch((err) => {
   dispatch({ type: actionType.POST_ERROR, payload: err });
  });
};
 */