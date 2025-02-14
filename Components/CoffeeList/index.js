import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

//Components
import CoffeeItem from "./CoffeeItem";
import Cart from "../Cart";

// Data
import cafes from "../../data/cafes";

class CoffeeList extends Component {
  render() {
    let shops;
    if (cafes) {
      shops = cafes.map(cafe => <CoffeeItem cafe={cafe} key={cafe.id} />);
    }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

export default observer(CoffeeList);

CoffeeList.navigationOptions = {
  title: "Coffee List",
  headerLeft: null,
  headerRight: <Cart />
};
