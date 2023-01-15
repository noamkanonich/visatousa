import React from "react";
import styled from "styled-components";
import { TextM } from "../../theme/typography";
import { Light, Primary } from "../../theme/colors";

interface IButton {
  label: string;
  background: string;
  color: string;
  onClick: () => void;
}

const Button = ({ label, background, color, onClick }: IButton) => {
  return (
    <Root background={background} onClick={onClick}>
      <Label color={color}>{label}</Label>
    </Root>
  );
};
//   ${({ background }) => `background: ${background ? "Primary" : "red"}`}

const Root = styled.button<{ background: string }>`
  background-color: ${Primary};
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 15px 30px;
  ${TextM}
  &:hover {
    background-color: ${Light};
  }
`;

const Label = styled.text<{ color: string }>`
  ${({ color }) => `color: ${color}`}
`;

export default Button;
