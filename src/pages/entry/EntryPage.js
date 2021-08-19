import React from "react";
import LoginForm from "../../components/login/LoginForm";
import PasswordReset from "../../components/password-reset/PasswordReset";
import { Route, Switch } from "react-router-dom";
import "./Entry.style.css";
const EntryPage = () => {
  return (
    <div className="entry-page bg-info">
      <div role="alert" className="fade alert alert-light show">
        <Switch>
          <Route path="/login" exact>
            <LoginForm />
          </Route>
          <Route path="/reset" exact>
            <PasswordReset />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default EntryPage;
