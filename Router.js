import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import SearchMovieScreen from "./src/screens/search-movie/SearchMovieScreen";
import WatchLaterScreen from "./src/screens/watch-later/WatchLaterScreen";
import FavouriteScreen from "./src/screens/favourites/FavouriteScreen";
import { Image } from "react-native-elements";
import Login from "./src/screens/login/Login";
import ErrorScreen from "./src/screens/error/ErrorScreen";
import LoadingScreen from "./src/screens/loading/LoadingScreen";

const RouterContainer = () => {
  const navigator = createStackNavigator(
    {
      Loading: {
        screen: LoadingScreen
      },
      Login: {
        screen: Login,
        navigationOptions: {}
      },
      Error: {
        screen: ErrorScreen
      }
    },
    {
      headerMode: "none"
    }
  );

  return createAppContainer(navigator);
};

export default RouterContainer;
