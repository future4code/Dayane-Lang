import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeeds } from "../routes/cordinator";

export const login = (
  body,
  clear,
  history,
  setRightButtonText,
  setIsLoading
) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      setIsLoading(false);
      goToFeeds(history);
      setRightButtonText("Logout");
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};

export const signUp = (
  body,
  clear,
  history,
  setRightButtonText,
  setIsLoading
) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      setIsLoading(false);
      goToFeeds(history);
      setRightButtonText("Logout");
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};
