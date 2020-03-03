import React from "react";
import SearchMovieScreen from "./src/screens/search-movie/SearchMovieScreen";
import WatchLaterScreen from "./src/screens/watch-later/WatchLaterScreen";
import FavouriteScreen from "./src/screens/favourites/FavouriteScreen";
import { Image, Button } from "react-native-elements";
import Login from "./src/screens/login/Login";
import ErrorScreen from "./src/screens/error/ErrorScreen";
import LoadingScreen from "./src/screens/loading/LoadingScreen";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./src/screens/home/Home";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

const MainTabs = createBottomTabNavigator({
  Feed: {
    screen: WatchLaterScreen,
    navigationOptions: {
      tabBarLabel: "Watch Later"
    }
  },
  Search: {
    screen: FavouriteScreen,
    navigationOptions: {
      tabBarLabel: "Favourites"
    }
  }
});

const MainDrawer = createDrawerNavigator({
  Home: Home,
  MainTabs: MainTabs
});

const AppModalStack = createStackNavigator({
  App: MainDrawer,
  Loading: {
    screen: LoadingScreen
  }
});

export default createAppContainer(AppModalStack);
