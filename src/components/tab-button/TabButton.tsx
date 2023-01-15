import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { TextM } from "../../theme/typography";

interface ITabButton {
  label: string;
  background: string;
  color: string;
  link?: string;
  onClick: () => void;
}

const TabButton = ({ label, background, color, link, onClick }: ITabButton) => {
  return (
    <Link to={link || ""}>
      <Root background={background} onClick={onClick}>
        <Label color={color}>{label}</Label>
      </Root>
    </Link>
  );
};

const Root = styled.button<{ background: string }>`
  ${({ background }) => `background-color: ${background}`}
  background: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 8px;
  ${TextM}
`;

const Label = styled.text<{ color: string }>`
  ${({ color }) => `color: ${color}`}
`;

export default TabButton;
