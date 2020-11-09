import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { RouteWithLayout } from "./components";

import { Minimal as MinimalLayout } from "./layouts";

import {
  Products as ProductsView,
  NotFound as NotFoundView,
  ProductDetails as ProductDetailsView,
} from "./views";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout
        component={ProductsView}
        exact
        layout={MinimalLayout}
        path="/"
      />
      <RouteWithLayout
        component={ProductDetailsView}
        exact
        layout={MinimalLayout}
        path="/details/:id"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
