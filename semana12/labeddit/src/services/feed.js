import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createPost = (body, clear) => {
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert(res.data.message);
      clear();
    })
    .catch((err) => {
      alert(err.response.message);
    });
};

export const createComment = (body, postId, update) => {
  axios
    .post(`${BASE_URL}/posts/${postId}/comment`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert(res.data.message);
      update();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const votePost = (body, postId, update) => {
  axios
    .put(`${BASE_URL}/posts/${postId}/vote`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert(res.data.message);
      update();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const voteComment = (body, postId, commentId, update) => {
  axios
    .put(`${BASE_URL}/posts/${postId}/comment/${commentId}/vote`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert(res.data.message);
      update();
    })
    .catch((err) => {
      console.log(err);
    });
};
