import React, { Component } from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/Store";
class Load extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
export default Load;
