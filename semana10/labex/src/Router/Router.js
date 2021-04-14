import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import AdminHomePage from "../Pages/AdminHomePage/AdminHomePage";
import CreateTripPage from "../Pages/CreateTripPage/CreateTripPage";
import ApplicationFormPage from "../Pages/ApplicationFormPage/ApplicationFormPage";
import ListTripsPage from "../Pages/LisTripsPage/LisTripsPage";
import TripDetailsPage from "../Pages/TripDetailsPage/TripDetailsPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />;
        </Route>

        <Route exact path="/login">
          <LoginPage />
        </Route>

        <Route exact path="/admin/trips/list">
          <AdminHomePage />
        </Route>

        <Route exact path="/admin/trips/create">
          <CreateTripPage />
        </Route>

        <Route exact path="/trips/application">
          <ApplicationFormPage />
        </Route>

        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>

        <Route exact path="/admin/trips/:id">
          <TripDetailsPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
