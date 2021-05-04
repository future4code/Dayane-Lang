import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { goToFeeds } from "../routes/cordinator";

const useUnprotectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToFeeds(history);
    }
  }, [history]);
};

export default useUnprotectedPage;
