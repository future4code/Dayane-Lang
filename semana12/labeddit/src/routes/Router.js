import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreatePost from "../pages/CreatePost/CreatePost";
import LoginPage from "../pages/LoginPage/LoginPage";
import DetailsPostPage from "../pages/DetailsPostPage/DetailsPostPage";
import FeedsPage from "../pages/FeedsPage/FeedsPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Header from "../components/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route>
          <LoginPage exact path="/" />
        </Route>
        <Route>
          <SignUpPage exact path="/signup" />
        </Route>
        <Route>
          <CreatePost exact path="/createpost" />
        </Route>
        <Route>
          <FeedsPage exact path="/feedpost" />
        </Route>
        <Route>
          <DetailsPostPage exact path="/posts/:id" />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;


