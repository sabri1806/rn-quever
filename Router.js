import React from "react";
import SearchMovieScreen from "./src/screens/search-movie/SearchMovieScreen";
import WatchLaterScreen from "./src/screens/watch-later/WatchLaterScreen";
import FavouriteScreen from "./src/screens/favourites/FavouriteScreen";
import { Image } from "react-native-elements";
import Login from "./src/screens/login/Login";
import ErrorScreen from "./src/screens/error/ErrorScreen";
import LoadingScreen from "./src/screens/loading/LoadingScreen";
import Home from "./src/screens/home/Home";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import FavouriteCreate from "./src/screens/favourites/components/favourite-create/FavouriteCreate";

const MainTabs = createBottomTabNavigator(
  {
    SearchMovie: {
      screen: SearchMovieScreen,
      navigationOptions: {
        tabBarLabel: "Search Movie"
      }
    },
    WatchLater: {
      screen: WatchLaterScreen,
      navigationOptions: {
        headerMode: "none"
      }
    },
    Favourites: {
      screen: FavouriteScreen,
      navigationOptions: {
        tabBarLabel: "Favourites"
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#0f0"
      },
      headerTintColor: "#00f",
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "SearchMovie") {
          return (
            <Image
              source={require("./assets/search.png")}
              style={{
                width: 40,
                height: 40,
                marginBottom: -10
              }}
            />
          );
        } else if (routeName === "WatchLater") {
          return (
            <Image
              source={require("./assets/watchLater.png")}
              style={{ width: 30, height: 30 }}
            />
          );
        } else {
          return (
            <Image
              source={require("./assets/favourites.png")}
              style={{ width: 30, height: 30 }}
            />
          );
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: "#fff",
      labelStyle: {
        fontSize: 14
      },
      activeBackgroundColor: "#e67e22",
      inactiveTintColor: "#263238"
    }
  }
);

const MainDrawer = createDrawerNavigator({
  Home: Home,
  Menu: MainTabs
});

const AppModalStack = createStackNavigator(
  {
    Loading: {
      screen: LoadingScreen
    },
    Home: {
      screen: Home
    },
    App: MainDrawer,
    Login: {
      screen: Login
    },
    FavouriteCreate: {
      screen: FavouriteCreate
    },
    Error: {
      screen: ErrorScreen
    }
  },
  {
    headerMode: "none",
    initialRouteName: "Login"
  }
);

export default createAppContainer(AppModalStack);
