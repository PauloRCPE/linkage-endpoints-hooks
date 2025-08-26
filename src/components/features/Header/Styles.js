import styled from "styled-components/native";
import { colors } from "../../../styles/styleVariables";

export const Container = styled.View`
  background-color: ${colors.yellow};
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

export const MenuItem = styled.Text`
  font-size: 20px;
`;
