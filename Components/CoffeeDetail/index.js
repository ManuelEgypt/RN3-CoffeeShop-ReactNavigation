import React, { Component } from "react";
import { observer } from "mobx-react";

//Components
import Cart from "../Cart";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";

// Style
import styles from "./styles";

// Data
import cafes from "../../data/cafes";

class CoffeeDetail extends Component {
  state = {
    drink: "Cappuccino",
    option: "Small"
  };

  changeDrink = value => {
    this.setState({
      drink: value
    });
  };

  changeOption = value => {
    this.setState({
      option: value
    });
  };

  cart = () => {
    return <Icon name="trash" style={{ color: "white", fontSize: 21 }} />;
  };

  render() {
    if (!cafes) return <Content />;
    const cafeID = this.props.navigation.getParam("coffeeID");
    const cafe = cafes.find(cafe => cafeID === cafe.id);

    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {cafe.name + "\n"}
                <Text note>{cafe.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: cafe.img }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.drink}
                onValueChange={this.changeDrink}
              >
                <Picker.Item label="Cappuccino" value="Cappuccino" />
                <Picker.Item label="Latte" value="Latte" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>
          <Button full danger>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

export default observer(CoffeeDetail);

CoffeeDetail.navigationOptions = ({ navigation }) => {
  const cafeID = navigation.getParam("coffeeID");
  const cafe = cafes.find(cafe => cafeID === cafe.id);
  return {
    title: cafe.name,
    headerRight: <Cart />
  };
};
