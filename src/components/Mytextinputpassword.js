import React from "react";
import { View, TextInput, Dimensions } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const Mytextinputpassword = (props) => {
  return (
    <View
      style={{
        marginLeft: window.width * 0.09,
        marginRight: window.width * 0.09,
        height: 80,
        backgroundColor: "#fafafa",
        paddingTop: 25,
        borderWidth: 0.5,
        borderRadius: 10,
        paddingLeft: 5,
      }}
    >
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#000a12"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
      />
    </View>
  );
};
export default Mytextinputpassword;
