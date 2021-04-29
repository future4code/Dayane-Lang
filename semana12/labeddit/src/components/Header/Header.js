import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { StyledToolbar } from "./styled";
import Button from "@material-ui/core/Button";
import { goToFeeds, goToLogin } from "../../routes/cordinator";
import { useHistory } from "react-router-dom";
import rightButtonText from "@material-ui/core/Button";
import setRightButtonText from "@material-ui/core/Button";
import rightButtonAction from "@material-ui/core/Button";

const Header = ({ rightButtonText, setRightButtonText }) => {
  const token = localStorage.getItem("token");
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLogin(history);
    } else {
      goToLogin(history);
    }
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button onClick={() => goToFeeds(history)} color="inherit">
          LabEddit
        </Button>
        <Button onClick={() => goToLogin(history)} color="inherit">
          Login
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
