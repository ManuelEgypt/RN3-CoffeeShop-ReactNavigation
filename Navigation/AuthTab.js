import React from "react"
import { createStackNavigator } from "react-navigation-stack";
import Login from "../Components/Login";
import Profile from "../Components/Profile";
import CoffeeList from "../Components/CoffeeList";
import {Icon} from "native-base";

const AuthTab = createStackNavigator(
    {
      LoginScreen: Login,
      ProfileScreen: Profile,
      CoffeeListScreen: CoffeeList
    },
    {
        navigationOptions: {
            tabBarIcon: () => <Icon name="cart" />
        }
        }
)

export default AuthTab;

