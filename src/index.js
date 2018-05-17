import React, {Component} from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

render(
  <Provider store={store}>
    <App store={store} />
  </Provider>, document.getElementById("root")
);