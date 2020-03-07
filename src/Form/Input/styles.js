import styled from "styled-components/native";

import { COLORS } from "~/constants";

export const Container = styled.View`
  margin: ${({ isError }) => (isError ? "0" : "10px 0")};
`;

export const Label = styled.Text`
  color: ${({ colors }) => (colors && colors.label ? colors.label : "#000")};
  font-family: ${({ fontFamily }) =>
    fontFamily && fontFamily.label ? fontFamily.label : "Arial"};
  margin-bottom: 3px;
`;

export const ContainerInput = styled.View`
  border: ${({ border }) =>
    border && border.color && border.weight
      ? `${border.weight}px solid ${border.color}`
      : "1px solid #000"};
  border-radius: ${({ border }) =>
    border && border.radius ? `${border.radius}px` : "0px"};
  overflow: hidden;
`;

export const InputText = styled.TextInput.attrs(props => ({
  placeholderTextColor:
    props.colors && props.colors.text ? props.colors.text : "#000"
}))`
  font-family: ${({ fontFamily }) =>
    fontFamily && fontFamily.text ? fontFamily.text : "Arial"};
  font-size: 18px;
  padding: 10px;
  color: ${({ colors }) => (colors && colors.text ? colors.text : "#000")};
`;

export const MessageError = styled(Label)`
  color: ${({ colors }) => (colors && colors.text ? colors.text : "#000")};
  font-family: ${({ fontFamily }) =>
    fontFamily && fontFamily.error ? fontFamily.error : "Arial"};
  margin: 5px 10px;
  font-size: 12px;
`;
