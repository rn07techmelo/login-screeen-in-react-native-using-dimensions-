import { Dimensions, StyleSheet } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const styles = StyleSheet.create({
  mainContainer: {
    height: window.height,
    width: window.width,
    alignItems: "center",
    justifyContent: "center",
    //flex: 1,
  },
  backgroundImage: {
    width: screen.width,
    height: screen.height,
  },
  textstyle: {
    width: window.width * 0.9,
    textAlign: "center",
    margin: 50,
  },
  mytextinputpassword: {
    marginVertical: 20,
  },
  textinput: {
    marginVertical: 5,
  },
  textinputEmail: {
    marginTop: window.height * 0.2,
  },
  passwordtextInputIcon: {
    flex: 1,
    resizeMode: "contain",
    width: 20,
    height: 20,
  },
  passwordvisibility: {
    position: "absolute",
    right: window.width * 0.15,
    bottom: window.width * 0.04,
    height: window.height * 0.07,
    width: window.width * -1,
  },

  socialicons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: window.width * 0.11,
    top: window.height * 0.07,
    // backgroundColor: "#000000",
    // height: window.height * 0.1,
  },
  googleplusIcon: {
    backgroundColor: "#fff",
    height: 70,
    width: 70,
    borderRadius: 60,
  },
  twitterIcon: {
    backgroundColor: "#29b6f6",
    height: 70,
    width: 70,
    borderRadius: 60,
  },
  instagramIcon: {
    backgroundColor: "#FF7F77",
    height: 70,
    width: 70,
    borderRadius: 60,
  },
  googleplusIconStyle: {
    marginTop: 15,
    marginLeft: 10,
  },
  twitterIconStyle: {
    marginTop: 15,
    marginLeft: 16,
  },
  instagramIconStyle: {
    marginTop: 15,
    marginLeft: 16,
  },
});

export default styles;
