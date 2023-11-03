import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import BSText from "../components/Text";
import Button from "../components/Button";

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Welcome 💫</Header>
      <BSText>Congratulations you are logged in.</BSText>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "StartScreen" }],
          })
        }
      >
        Sign out
      </Button>
    </Background>
  );
}
