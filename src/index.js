import React from "react";
import  ReactDOM from "react-dom";
import { Provider } from "react-redux";
import  {BrowserRouter} from "react-router-dom";
import routes from "./routes";
import configureStore from "./store/configureStore";
import "./bootswatch.less";
import "./styles.css";
import App from './App.js';
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

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
, document.getElementById("root"));
