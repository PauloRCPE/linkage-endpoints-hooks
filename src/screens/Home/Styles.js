import styled from "styled-components/native";
import { colors } from "../../styles/styleVariables";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.black};
  width: 100%;
  align-items: center;
  gap: 20px;
`;

export const PlaceHolder = styled.Text`
  color: ${colors.white};
  font-size: 20px;
`;
