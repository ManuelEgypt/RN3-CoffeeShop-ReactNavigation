import React from "react"
import { createStackNavigator } from "react-navigation-stack";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import {Icon} from "native-base";

const CoffeeTab = createStackNavigator(
    {
    CoffeeListScreen: CoffeeList,
    CoffeeDetailScreen: CoffeeDetail,
    },
    {
        navigationOptions: {
            tabBarIcon: () => <Icon name="cart" />
        }
        }
)

export default CoffeeTab;
