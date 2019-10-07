import React from "react"
import { createBottomTabNavigator } from "react-navigation-tabs";

import AuthTab from "./AuthTab";
import CoffeeTab from "./CoffeeTab";
import OrdersTab from "./OrdersTab";

const BottomTab = createBottomTabNavigator({
    AuthTab:AuthTab,
    CoffeeTab:CoffeeTab,
    OrdersTab:OrdersTab,
},
{
tabBarOptions: {
    activeBackgroundColor: '#b8cdd0',
    inactiveBackgroundColor : 'white',
    style: {
      backgroundColor: 'rgb(20,90,100)',
    },
  }
}
)

export default BottomTab


