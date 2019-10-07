import React from "react"
import { createStackNavigator } from "react-navigation-stack";
import CoffeeCart from "../Components/CoffeeCart";
import OrderHistory from "../Components/OrderHistory";
import {Icon} from "native-base";

const CoffeeTab = createStackNavigator(
    {
    CoffeeCartScreen: CoffeeCart,
    OrderHistoryScreen: OrderHistory,
    },
    {
    navigationOptions: {
        tabBarIcon: () => <Icon name="cart" />
    }
    }
)

export default CoffeeTab;
