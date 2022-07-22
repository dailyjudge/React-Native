import React from "react";
import styled from "styled-components/native";
import { theme } from "../theme";
import { Dimensions, useWindowDimensions } from "react-native";
import PropTypes from "prop-types";
const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main,
}))`
  width: ${({ width }) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 25px;
  background-color: ${({ theme }) => theme.itemBackground};
  color: ${({ theme }) => theme.text};
`;

const Input = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
  onBlur,
}) => {
  //const width = Dimensions.get("window").width; 휴대폰 크기 자동 계산
  const width = useWindowDimensions().width; // 휴대폰 회전시에도 계산
  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      maxLength={50}
      autoCapitalize="none" //첫 글자 대문자 기능
      autoCorrect={false} //자동 완성 기능
      returnKeyType="done" //iOs에서 '완료' 문자가 'return'이 아닌 'done'으로 , document 확인
      keyboardAppearance="dark" //iOs에만 적용 키보드가 어둡게
      value={value} // Input 값
      onChangeText={onChangeText} // Input의 Text를 담기 위함
      onSubmitEditing={onSubmitEditing} //완료 버튼 눌렀을 때
      onBlur={onBlur}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
};

export default Input;
