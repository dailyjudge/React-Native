import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "styled-components/native";
import styled from "styled-components/native";
import { Button, Image, Input } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 0 20px;
  padding-top: ${({ insets: { top } }) => top}px;
  padding-bottom: ${({ insets: { bottom } }) => bottom}px;
`;

const StyleText = styled.Text`
  font-size: 30px;
  color: #111111;
`;
const Logo =
  "https://firebasestorage.googleapis.com/v0/b/rn-chat-7f25d.appspot.com/o/logo.png?alt=media";

const SignIn = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const theme = useContext(ThemeContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const refPassword = useRef(null);

  const _handleSigninBtnPress = () => {
    console.log("signin");
  };
  return (
    <Container insets={insets}>
      <Image url={Logo} />

      <Input
        label="Email"
        placeholder="Email"
        returnKeyType="next"
        value={email}
        onChangeText={setEmail}
        onSubmitEditing={() => refPassword.current.focus()}
      />
      <Input
        ref={refPassword}
        label="Password"
        placeholder="Password"
        returnKeyType="done"
        value={password}
        onChangeText={setPassword}
        isPassword={true}
        onSubmitEditing={_handleSigninBtnPress}
      />
      <Button title="Sign in" onPress={_handleSigninBtnPress} />
      <Button
        title="or Sign up"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
        containerStyle={{ marginTop: 0, backgroundColor: "transparent" }}
        textStyle={{ color: theme.btnTextLink, fontSize: 18 }}
      />
    </Container>
  );
};

export default SignIn;
