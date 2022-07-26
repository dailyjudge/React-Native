import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
`;

const StyleText = styled.Text`
  font-size: 30px;
  color: #111111;
`;

const SignUp = () => {
  return (
    <Container>
      <StyleText>Sign Up</StyleText>
    </Container>
  );
};

export default SignUp;
