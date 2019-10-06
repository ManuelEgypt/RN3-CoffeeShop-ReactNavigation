import { createStackNavigator } from "react-navigation-stack";

import HomePage from "../Components/HomePage";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";
import Login from "../Components/Login";

const StackNav = createStackNavigator(
  {
    HomeScreen: HomePage,
    CoffeeListScreen: CoffeeList,
    CoffeeDetailScreen: CoffeeDetail,
    CoffeeCartScreen: CoffeeCart,
    LoginScreen: Login
  },

  {
    initialRouteName: "LoginScreen",
    defaultNavigationOptions: {
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "rgb(20, 90, 100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      cardStyle: {
        backgroundColor: "rgb(20, 90, 100)"
      }
    }
  }
);

export default StackNav;
