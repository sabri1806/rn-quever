import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import Example from "./src/screens/Example";
import SearchMovieScreen from "./src/screens/search-movie/SearchMovieScreen";
import WatchLaterScreen from "./src/screens/watch-later/WatchLaterScreen";
import FavouriteScreen from "./src/screens/favourites/FavouriteScreen";
import { Image } from "react-native-elements";

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
        tabBarLabel: "Watch Later"
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
              style={{ width: 40, height: 40 }}
            />
          );
        } else if (routeName === "WatchLater") {
          return (
            <Image
              source={require("./assets/watchLater.png")}
              style={{ width: 40, height: 40 }}
            />
          );
        } else {
          return (
            <Image
              source={require("./assets/favourites.png")}
              style={{ width: 40, height: 40 }}
            />
          );
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: "#000",
      activeBackgroundColor: "#fff",
      inactiveTintColor: "#263238"
    }
  }
);

/*const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);*/

/*const App = createSwitchNavigator({
  Loading: {
    screen: Example
  }
  Auth: {
    screen: AuthStack
  }
  App: {
    screen: MainTabs
  }
});*/

export default createAppContainer(MainTabs);
