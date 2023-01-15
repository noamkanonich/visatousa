import React from "react";
import styled from "styled-components";

type TextAlign = "left" | "right";

interface ICard {
  label: string;
  color: string;
  background: string;
  textAlign: TextAlign;
}

const Card = ({ label, color, background, textAlign }: ICard) => {
  return (
    <Root textAlign={textAlign} background={background}>
      <Label color={color}>dasdas</Label>
    </Root>
  );
};

const Root = styled.div<{ textAlign: TextAlign; background: string }>`
  height: 80px;
  width: 200px;
  border: 1px solid black;
  border-radius: 16px;
  text-align: ${({ textAlign }) => textAlign};
  backgroun: ${({ background }) => background};
`;

const Label = styled.div<{ color: string }>`
  color: ${({ color }) => color};
`;
export default Card;
