import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
// import { Router, useRouterHistory } from "react-router";
// import routes from "./routes";
import configureStore from "./store/configureStore";
import "./bootswatch.less";
import "./styles.css";
//import appHistory from "./app_history";
//import { createHashHistory } from "history";

//const CreateHashHistory =require("history/lib/createHashHistory");
//const createAppHistory = useRouterHistory(createHashHistory);

/*const history = createAppHistory({
  queryKey: false
})*/

//<Router history={appHistory}/>
const store = configureStore({
  notifications: [],
});
//const history = CreateHashHistory({queryKey: false});

render((
  <Provider store={store}>
    <Router history={appHistory}>
      {routes}
    </Router>
  </Provider>
), document.getElementById("app"));
