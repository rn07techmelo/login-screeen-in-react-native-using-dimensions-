import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const window = Dimensions.get("window");
const Mybutton = (props) => {
  return (
    <LinearGradient colors={["#FF2C17", "#FF7F72"]} style={styles.button}>
      <TouchableOpacity onPress={props.customClick}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    // padding: window.height * 0.3,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
    padding: 20,
  },
  text: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "uppercase",
    includeFontPadding: false,
  },
});
export default Mybutton;
