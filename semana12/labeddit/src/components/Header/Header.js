import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { StyledToolbar } from "./styled";
import Button from "@material-ui/core/Button";
import { goToFeedsPage, goToLogin } from "../../routes/cordinator";
import { useHistory } from "react-router-dom";

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
        <Button onClick={() => goToFeedsPage(history)} color="inherit">
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
