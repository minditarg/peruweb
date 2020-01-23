import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Redux/Store";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { selectSubreddit, fetchPosts } from "./Redux/Acciones/Fetch";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

//store.dispatch(selectSubreddit("reactjs"));
//store.dispatch(fetchPosts("reactjs")).then(() => console.log(store.getState()));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
