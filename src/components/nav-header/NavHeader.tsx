import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TabButton from "../tab-button/TabButton";
import Spacer from "../spacer/Spacer";
import { HeadingM } from "../../theme/typography";
import { Gray2, White } from "../../theme/colors";
import useMedia from "../../theme/useMedia";
import Dropdown from "react-dropdown";
import "./dropdown.css";
import "react-dropdown/style.css";
import i18n, { resources } from "../../i18n";
import { useTranslation } from "react-i18next";

export const NavHeader = () => {
  const { t } = useTranslation();
  const media = useMedia();
  const [openMenu, setOpenMenu] = useState(false);
  const [defauleLanguage, setDefauleLanguage] = useState<string | undefined>();
  const languages = Object.entries(resources).map((resource) => ({
    value: resource[0],
    label: resource[1].displayName,
  }));

  useEffect(() => {
    const currentLanguage = languages.find(
      (language) => language.value === i18n.language
    );
    setDefauleLanguage(currentLanguage?.label);
  }, []);

  const onChangeLanguage = async (language: any) => {
    await i18n.changeLanguage(language.value);
    setDefauleLanguage(language.label);
  };

  return (
    <Root>
      <NavBar>
        <Title>VISA TO USA</Title>
        <LanguageButton onClick={() => null}>{i18n.language}</LanguageButton>
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

        <TabsContainer>
          <TabButton
            label={t("navbar.home")}
            background="white"
            color="black"
            link="/"
            onClick={() => null}
          />
          <Spacer direction="horizontal" size="xl" />
          <TabButton
            label={t("navbar.about")}
            background="white"
            color="black"
            link="/about"
            onClick={() => null}
          />
        </TabsContainer>

        <Dropdown
          className="dropdown-main"
          options={languages}
          onChange={(value) => onChangeLanguage(value)}
          value={i18n.language}
          placeholder="Select language"
        />
      </NavBar>
      {openMenu && <MenuContainer></MenuContainer>}
    </Root>
  );
};

const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
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

const LanguageButton = styled.button`
  background: white;
  border: none;
  &:hover {
    color: ${Gray2};
  }
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
