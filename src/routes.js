import React                         from "react";
import { Router, Route, IndexRoute } from "react-router";
import createMemoryHistory           from "history/lib/createBrowserHistory";
import store                         from "app/store";
import { Provider }                  from "react-redux";

import App       from "app/components/App";
import UserPage  from "app/components/UserPage";
import UsersPage from "app/components/UsersPage";

const routes = (
  <Provider store={ store }>
    <Router history={ createMemoryHistory() }>
      <Route path="/" component={ App }>
        <IndexRoute component={ UsersPage } />
        <Route path="users/:login" component={ UserPage } />
      </Route>
    </Router>
  </Provider>
);

export default routes;
