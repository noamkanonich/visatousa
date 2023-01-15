import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TabButton from "../tab-button/TabButton";
import { Link } from "react-router-dom";
import Spacer from "../spacer/Spacer";
import { HeadingM } from "../../theme/typography";
import { White } from "../../theme/colors";
import useTheme from "../../theme/useTheme";
import useMedia from "../../theme/useMedia";

export const NavHeader = () => {
  const media = useMedia();
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    console.log(media.isBreak1);
  }, [window]);

  return (
    <Root>
      {/* <Spacer direction="vertical" size="xxl-8" /> */}

      <NavBar>
        <Title>VISA TO USA</Title>
        {/* {media.isBreak1 ? ( */}
        <MenuIconContainer>
          {!openMenu ? (
            <TabButton
              label="|||"
              background="none"
              color="black"
              onClick={() => setOpenMenu(true)}
            />
          ) : (
            <TabButton
              label="X"
              background="none"
              color="black"
              onClick={() => setOpenMenu(false)}
            />
          )}
        </MenuIconContainer>

        {/* ) : ( */}
        <TabsContainer>
          <TabButton
            label="אודות"
            background="white"
            color="black"
            link="/about"
            onClick={() => null}
          />
          <Spacer direction="horizontal" size="xl" />
          <TabButton
            label="דף הבית"
            background="white"
            color="black"
            link="/"
            onClick={() => null}
          />
        </TabsContainer>
        {/* )} */}
      </NavBar>
      {openMenu && <MenuContainer></MenuContainer>}
    </Root>
  );
};

const Root = styled.div`
  flex: 1;
  width: 100%;
  background: ${White};
  margin-vertical: 16px;
`;

const MenuContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 200px;
  background: red;
  bottom: 10;
`;

const Row = styled.div`
  display: grid;
  grid-template-rows: 0.2fr 0fr 0.5fr 0.5fr;
  grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content content content"
    "sidebar footer footer footer";
  text-align: center;
  grid-gap: 0.25rem;
`;

const MenuIconContainer = styled.div`
  @media (max-width: 900px) {
    align-items: flex-start;
  }
  @media (min-width: 900px) {
    display: none;
  }
`;

const TabsContainer = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
  @media (min-width: 900px) {
    flex-direction: column;
    display: grid;
    grid-template-areas: "nav nav nav nav nav";
  }
`;

const NavBar = styled.nav`
  grid-area: nav;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Title = styled.text`
  ${HeadingM}
`;
