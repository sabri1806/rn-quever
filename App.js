import * as React from "react";
import store from "./src/redux/stores/app.store";
import { Provider } from "react-redux";
import * as firebase from "firebase";
import { firebaseConfig } from "./firebaseconfig";
import RouterContainer from "./RouterContainer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/home/Home";
import AppBar from "./src/components/app-bar/AppBar";
import WatchLaterScreen from "./src/screens/watch-later/WatchLaterScreen";
import FavouriteScreen from "./src/screens/favourites/FavouriteScreen";
import SearchMovieScreen from "./src/screens/search-movie/SearchMovieScreen";
import Router from "./Router";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider store={store} isOpen={false} openMenuOffset={3}>
      <Router />
    </Provider>
  );
}
