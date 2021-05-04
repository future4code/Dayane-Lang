import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { login } from "../../services/user";
import {
  FormControl,
  FormLabel,
  TextField,
  Input,
  InputBase,
  InputAdornment,
  Button,
  Typography,
} from "@material-ui/core";

import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

import {
  ScreenContainer,
  SignUpButtonContainer,
  FormContainer,
  LoginFormContainer,
} from "./styled";
import Logo from "../../assets/logo.png";
import {goToSignUp} from "../../routes/cordinator";

function LoginPage() {
  const { form, onChange, reset } = useForm({ email: "", password: "" });
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleSubmission = (e) => {
    e.preventDefault();
    login(form, history, setLoading);
    reset();
  };

  return (
    <ScreenContainer>
      <LoginFormContainer borderWidth="1px" borderRadius="lg">
        <Logo src={Logo} />
        <Typography textAlign="center" p="0.2em">
          Login
        </Typography>
        <FormContainer onSubmit={handleSubmission}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <InputBase>
              <InputAdornment
                pointerEvents="none"
                children={<EmailIcon color="gray.300" />}
              />
              <Input
                required
                placeholder="Digite seu email"
                type="email"
                onChange={onChange}
                value={form.email}
                name="email"
              />
            </InputBase>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <InputBase>
              <InputAdornment
                pointerEvents="none"
                children={<LockIcon color="gray.300" />}
              />
              <Input
                required
                placeholder="Digite sua senha"
                type="password"
                value={form.password}
                onChange={onChange}
                name="password"
              />
            </InputBase>
          </FormControl>
          <Button
            isLoading={loading}
            colorScheme="violet"
            variant="solid"
            type="submit"
          >
            Login
          </Button>
        </FormContainer>
        <SignUpButtonContainer>
          <TextField>Não possui cadastro?</TextField>
          <Button onClick={() => goToSignUp(history)}>Cadastre-se!</Button>
        </SignUpButtonContainer>
      </LoginFormContainer>
    </ScreenContainer>
  );
}

export default LoginPage;

/*


export default LoginPage;

import React from "react";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/feed";
import {
  FormControl,
  TextField,
  Input,
  Button,
  Typography,
} from "@material-ui/core";

import {
  Avatar,
  FormContainer,
  LoginContainer,
  StyledBox,
  UserThings,
} from "./styled";

function CreatePost(props) {
  const { form, onChange, reset } = useForm({ text: "", title: "" });
  const username = localStorage.getItem("username");

  const handleSubmission = (e) => {
    e.preventDefault();
    createPost(form, props.update);
    reset();
  };

  return (
    <StyledBox borderWidth="1px" borderRadius="lg">
      <LoginContainer>
        <UserThings>
          <Avatar
            src={`https://avatars.dicebear.com/api/avataaars/${username}.svg`}
          />
          <Typography size="xs" pl="0.4em">
            u/{username}
          </Typography>
        </UserThings>
        <Typography size="lg" textAlign="center" pb="0.2em">
          Crie seu post
        </Typography>
        <FormContainer onSubmit={handleSubmission}>
          <FormControl id="title">
            <Input
              required
              placeholder="Insira um título para o seu post"
              onChange={onChange}
              value={form.title}
              name="title"
            />
          </FormControl>
          <FormControl id="text">
            <TextField
              borderRadius="lg"
              size="sm"
              required
              placeholder="Insira o texto do seu post"
              onChange={onChange}
              value={form.text}
              name="text"
            />
          </FormControl>
          <Button colorScheme="#f1aad7" variant="solid" type="submit">
            POSTAR
          </Button>
        </FormContainer>
      </LoginContainer>
    </StyledBox>
  );
}

export default CreatePost;


*/

/*
import React from "react";
import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { useHistory } from "react-router-dom";
import { ScreenContainer, LogoImage, SignUpButtonContainer } from "./styled";
import logo from "../../assets/logo.png";
import Button from "@material-ui/core/Button";
import { Input, InputBase } from "@material-ui/core";
import LoginForm from "./LoginForm";
import { goToSignUp } from "../../routes/cordinator";
import { login } from "../../services/user";

function LoginPage() {
  const { form, onChange, reset } = useForm({ email: "", password: "" });
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const handleSubmission = (e) => {
    e.preventDefault();
    login(form, history, setLoading);
    reset();
  };

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <LoginForm onSubmit={handleSubmission} />
      <SignUpButtonContainer>
        <Input
          required
          placeholder="Digite seu email"
          type="email"
          onChange={onChange}
          value={form.email}
          name="email"
        />
        <Button
          onClick={() => goToSignUp(history)}
          type={"submit"}
          fullWidth
          variant={"text"}
          color={"primary"}
          isLoading={loading}
        >
          Não possui conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
}
*/
