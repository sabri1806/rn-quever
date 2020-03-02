import React from "react";
import store from "./src/redux/stores/app.store";
import { Provider } from "react-redux";
import * as firebase from "firebase";
import { firebaseConfig } from "./firebaseconfig";
import RouterContainer from "./RouterContainer";

firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterContainer />
      </Provider>
    );
  }
}

export default App;
