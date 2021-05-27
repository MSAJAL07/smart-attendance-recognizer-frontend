import React from "react";
import { Route, Redirect } from "react-router-dom";
import {isAuthenticated} from "./Auth";

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const to = {
        pathname: "/sign-in",
        state: {
          from: props.location
        }
      };
      if (isAuthenticated()) return <Component {...props} />;
      else return <Redirect to={to} />;
    }}
  />
);

export default ProtectedRoute;
