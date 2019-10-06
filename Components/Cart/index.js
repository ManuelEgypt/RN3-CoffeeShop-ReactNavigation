import React from "react";
import { Icon } from "native-base";
import { withNavigation } from "react-navigation";

const Cart = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("CoffeeCartScreen");
  };
  return <Icon onPress={handlePress} name="cart"></Icon>;
};

export default withNavigation(Cart);
