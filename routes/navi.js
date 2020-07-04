import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Loading from "../screens/loading";
import Login from "../screens/login";
import Register from "../screens/register";
import Home from "../screens/home";

const appScreens = {
  Home: {
    screen: Home,
  },
};

const AppStack = createStackNavigator(appScreens);

const authScreens = {
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
};

const AuthStack = createStackNavigator(authScreens);

const AppNav = createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);

export default AppNav;
