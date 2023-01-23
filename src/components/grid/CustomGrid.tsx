import React from "react";
import styled from "styled-components";

interface ICustomGrid {
  rows: number;
  columns: number;
  background?: string;
}

export const CustomGrid = ({ rows, columns, background }: ICustomGrid) => {
  return <Root>CustomGrid</Root>;
};

const Root = styled.div`
  flex: 1;
  display: flex;
`;
