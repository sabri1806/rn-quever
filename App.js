import React from "react";
import Router from "./Router";
import store from "./src/redux/stores/app.store";
import { Provider } from "react-redux";
import * as firebase from "firebase";
import { firebaseConfig } from "./firebaseconfig";

firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
