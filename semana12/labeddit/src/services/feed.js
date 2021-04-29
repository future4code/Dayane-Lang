import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createPost = (body, update) => {
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      window.alert("Post criado com sucesso!");
      update();
    })
    .catch((err) => {
      window.alert("Ih deu erro!");
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
      window.alert("Comentário criado com sucesso!");
      update();
    })
    .catch((err) => {
      window.alert("Ih deu erro!");
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
      update();
    })
    .catch((err) => {
      window.alert("Votação não concluída. Vote novamente please!");
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
      update();
    })
    .catch((err) => {
      window.alert("Votação não concluída. Vote novamente please!");
      console.log(err);
    });
};
