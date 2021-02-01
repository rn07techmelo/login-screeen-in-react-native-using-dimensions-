import React, { Component } from "react";
import {
  View,
  ImageBackground,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import Mytextinput from "../../components/Mytextinput";
import Mytextinputpassword from "../../components/Mytextinputpassword";
import Mybutton from "../../components/Mybutton";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const image = require("../../assets/images/screenbg.png");

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      email: "",
      validate: false,
      hidePassword: true,
    };
  }
  managePasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  };

  validate = (email) => {
    console.log(email);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      console.log("Email is Not Correct");
      this.setState({ email: email });
      return false;
    } else {
      this.setState({ email: email });
      console.log("Email is Correct");
    }
  };
  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView enabled>
            <ImageBackground source={image} style={styles.backgroundImage}>
              <View style={styles.textinputEmail}>
                <Mytextinput
                  placeholder="Enter Email"
                  onChangeText={(email) => this.validate(email)}
                  value={this.state.email}
                  keyboardType="email-address"
                />
              </View>
              <View style={styles.mytextinputpassword}>
                <Mytextinputpassword
                  placeholder="Enter Password"
                  onChangeText={(text) => this.setState({ text })}
                  secureTextEntry={this.state.hidePassword}
                />
                <View>
                  <TouchableOpacity
                    style={styles.passwordvisibility}
                    onPress={this.managePasswordVisibility}
                  >
                    <Image
                      source={
                        this.state.hidePassword
                          ? require("../../assets/images/hide.png")
                          : require("../../assets/images/view.png")
                      }
                      style={styles.passwordtextInputIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Mybutton title="LogIn" />
              </View>

              <View style={styles.socialicons}>
                <TouchableOpacity style={styles.googleplusIcon}>
                  <Icon
                    name="google-plus"
                    size={40}
                    color="#000"
                    style={styles.googleplusIconStyle}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.twitterIcon}>
                  <Icon
                    name="twitter"
                    size={40}
                    color="#000"
                    style={styles.twitterIconStyle}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.instagramIcon}>
                  <Icon
                    name="instagram"
                    size={40}
                    color="#000"
                    style={styles.instagramIconStyle}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
