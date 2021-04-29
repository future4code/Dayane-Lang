import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToFeeds } from "../routes/cordinator";

const useUnprotectedPage = () => {
  const history = useHistory();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToFeeds(history);
    }
  }, [history]);
};

export default useUnprotectedPage;
