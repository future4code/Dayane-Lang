import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeeds } from "../routes/cordinator";

export const login = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.getItem("token", res.data.token);
      clear();
      goToFeeds(history);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const signUp = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      localStorage.getItem("token", res.data.token);
      clear();
      goToFeeds(history);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

/*import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeeds } from "../routes/cordinator";

export const login = (body, history, setLoading) => {
  setLoading(true);
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      setLoading(false);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.user.username);
      goToFeeds(history);
    })
    .catch((err) => {
      setLoading(false);
      window.alert("Email ou senha incorretos!");
    });
};

export const signUp = (body, history, setLoading) => {
  setLoading(true);
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      setLoading(false);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.user.username);
      goToFeeds(history);
    })
    .catch((err) => {
      setLoading(false);
      window.alert("Ops! Acho que já existe um usuário com algum desses dados");
    });
};
*/
