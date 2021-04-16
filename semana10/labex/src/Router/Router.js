
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from '../Pages/Public/HomePage/HomePage'
import LoginPage from '../Pages/Private/LoginPage/LoginPage'
import ApplicationFormPage from '../Pages/Public/ApplicationFormPage/ApplicationFormPage'
import ListTripsPage from '../Pages/Public/LisTripsPage/LisTripsPage'
import ListTrips from '../Pages/Private/ListTrips/listTrips'
import TripDetailsPage from '../Pages/Private/TripDetailsPage/TripDetailsPage'
import CreateTripPage from '../Pages/Private/CreateTripPage/CreateTripPage'
import SingUpPage from '../Pages/Private/SignUp/SingUp'
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

function Router() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path="/home">
               <HomePage />
            </Route>
            <Route exact path="/login">
               <LoginPage />
            </Route>
            <Route exact path="/inscricao/:id/apply">
               <ApplicationFormPage />
            </Route>
            <Route exact path="/viagens">
               <ListTripsPage />
            </Route>
            <Route exact path="/viagens_adm/:id">
               <ListTrips />
            </Route>
            <Route exact path="/cadastrar_login">
               <SingUpPage />
            </Route>
            <Route exact path="/detalhes_da_viagem/:id">
               <TripDetailsPage />
            </Route>
            <Route exact path="/criar_viagens">
               <CreateTripPage />
            </Route>
            <Route>
               <HomePage />
            </Route>
            <Route>
              <ErrorPage />
            </Route>
        </Switch>
    </BrowserRouter>
  )
}

export default Router;