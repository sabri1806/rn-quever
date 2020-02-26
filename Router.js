import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import Example from "./src/screens/Example";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import SearchMovieScreen from "./src/screens/SearchMovieScreen";
import WatchLaterScreen from "./src/screens/WatchLaterScreen";
import FavouriteScreen from "./src/screens/FavouriteScreen";

const MainTabs = createBottomTabNavigator({
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
});

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
