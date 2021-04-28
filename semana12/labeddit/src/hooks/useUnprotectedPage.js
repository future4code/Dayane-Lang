import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToFeedsPage } from "../routes/coordinator";

const useUnprotectedPage = () => {
  const history = useHistory();
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToFeedsPage(history);
    }
  }, [history]);
};

export default useUnprotectedPage;
