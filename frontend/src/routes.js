import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Register";
import PreferencesPage from "./pages/auth/Preferences";
import HomePage from "./pages/dashboard/Home";
import ProfilePage from "./pages/dashboard/Profile";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/preferences" component={PreferencesPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
