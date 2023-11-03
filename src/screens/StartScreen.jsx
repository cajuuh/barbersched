import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import BSText from "../components/Text";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>React Native - Expo - Login</Header>
      <BSText>A simple React Native Expo Login template app.</BSText>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Log in
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        Create an account
      </Button>
    </Background>
  );
}
