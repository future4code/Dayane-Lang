import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RecipeDetailPage from "../pages/RecipeDetailPage/RecipeDetailPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route>
          <SignUpPage exact path="/cadastro" />
        </Route>
        <Route>
          <RecipesListPage exact path="/" />
        </Route>
        <Route>
          <AddRecipesPage exact path="/adicionar-receita" />
        </Route>
        <Route>
          <RecipeDetailPage exact path="/detalhe/:id" />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
