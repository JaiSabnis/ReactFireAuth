import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Login from "../screens/login";
import Home from "../screens/home";
import LoginTest from "../screens/loginTest";

import React from "react";

const screens = {
  LoginTest: {
    screen: LoginTest,
  },
  Home: {
    screen: Home,
  },
};

const LoginSwitchNavigator = (isAuth = false) => {
  createSwitchNavigator(screens, {
    initialRouteName: isAuth ? "Home" : "LoginTest",
  });
  return SwitchNavigator;
};

const LoginNav = createAppContainer(LoginSwitchNavigator);
export default LoginNav;
