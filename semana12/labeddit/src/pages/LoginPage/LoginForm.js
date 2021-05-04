/*

import React, { useState } from "react";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { InputsContainer, LoginFormContainer } from "./styled";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import useForm from "../../hooks/useForm";
//import { login } from "../../services/user";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { goToFeeds } from "../../routes/coordinator";
import CircularProgress from "@material-ui/core/CircularProgress";
import { goToLogin } from "../../routes/cordinator";

export default function LoginForm() {
  useUnprotectedPage();

  const formDefault = { email: "", password: "" };

  const history = useHistory();
  const [form, setForm] = useState(formDefault);
  const isLoading = true;

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${BASE_URL}/login`, form);
      window.localStorage.setItem("token", response.data.token);
      goToLogin(history);
    } catch (error) {
      window.alert("Usuário e/ou Senha inválido(s)");
    }
  };

  return (
    <LoginFormContainer>
      <form onSubmit={onSubmitForm}>
        <InputsContainer>
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
          />
          <TextField
            name={"password"}
            value={form.password}
            onChange={onChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"password"}
          />
        </InputsContainer>
        <Button
          type={"submit"}
          fullWidth
          variant={"contained"}
          color={"primary"}
        >
          {isLoading ? (
            <CircularProgress color={"inherit"} size={15} />
          ) : (
            <>Fazer Login</>
          )}
        </Button>
      </form>
    </LoginFormContainer>
  );
}

*/
