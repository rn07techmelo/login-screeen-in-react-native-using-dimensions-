import React, { Component } from "react";
import { View, Text } from "react-native";
import LoginScreen from "./src/screens/LoginScreens";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <LoginScreen />
      </View>
    );
  }
}
