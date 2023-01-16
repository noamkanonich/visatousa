import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TabButton from "../../components/tab-button/TabButton";
import { Spacing } from "../../theme/layout";
import Spacer from "../../components/spacer/Spacer";
import { HeadingXL, HeadingXXL, TextM, TextS } from "../../theme/typography";
import {
  Gray1,
  Gray2,
  Gray4,
  Gray6,
  Light,
  Primary,
  White,
} from "../../theme/colors";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import ImgSrc from "../../assets/images/new-york.jpg";
import ThumbsUpUrl from "../../assets/icons/like.png";
import { CSSTransition } from "react-transition-group";
import { useTranslation } from "react-i18next";

const appearDuration = 2000;
const transitionName = `box`;

const HomeScreen = () => {
  const [fading, setFading] = useState(false);
  setInterval(() => setFading(!fading), 1000);
  const { t } = useTranslation();
  return (
    <Root>
      <Spacer direction="vertical" size="xs" />
      {/* <BackgroundImage> */}
      <Spacer direction="vertical" size="xl" />
      <Section>
        {/* <MainTitle>ויזה לארצות הברית פשוט, קל ומהיר</MainTitle> */}
        <MainTitle>{t("home.title")}</MainTitle>
        <Spacer direction="vertical" size="xl" />
        <Divider />
        <Spacer direction="vertical" size="xl" />
        <SubTitle>התחילו עכשיו את תהליך הוצאת הויזה לארה"ב</SubTitle>
        <Spacer direction="vertical" size="xl" />
        <SendEmailContainer>
          <Button
            label="שליחה"
            color={Light}
            background={Primary}
            onClick={() => null}
          />
          <Spacer direction="horizontal" size="l" />
          <InputContainer>
            <Input placeholder="כתובת אימייל" />
          </InputContainer>
        </SendEmailContainer>
      </Section>
      {/* </BackgroundImage> */}
      <Spacer direction="vertical" size="xxl-8" />

      {/* <ImageSection></ImageSection> */}
      <CenteredSection>
        <ShadowContainer></ShadowContainer>
      </CenteredSection>
      <Spacer direction="vertical" size="xxl-8" />

      <Section>
        <Row>
          <LeftColumn>
            <BoxGrid>
              <Box>
                <IconContainer>
                  <ThumbsUpIcon />
                </IconContainer>
                <Spacer direction="vertical" size="xs" />
                <Title>סיבה 1</Title>
                <Spacer direction="vertical" size="xs" />
                <Text>הסבר לסיבה מספר 1</Text>
              </Box>

              <Box>
                <Title>dsadas</Title>
              </Box>
              <Box>
                <Title>dsadas</Title>
              </Box>
            </BoxGrid>
          </LeftColumn>
          <Spacer direction="horizontal" size="xl" />
          <RightColumn>
            <Title>הסיבות שיגרמו לכם להבין מדוע לבחור בנו</Title>
            <Spacer direction="vertical" size="xl" />
            <Text>לחצו עכשיו והתחילו את תהליך הוצאות הויזה במהירות!</Text>{" "}
            <Spacer direction="vertical" size="xl" />
            <Button
              label="התחילו עכשיו"
              color="red"
              background="white"
              onClick={() => null}
            />
          </RightColumn>
        </Row>
      </Section>
      <Spacer direction="vertical" size="xxl-8" />

      <Footer></Footer>
    </Root>
  );
};

const Root = styled.div`
  flex: 1;
  max-with: 1200px;
  margin-left: 40px;
  margin-right: 40px;
`;

const Section = styled.div`
  display: block;
  padding: 10px;
  text-align: center;
`;

const CenteredSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageSection = styled.div`
  display: block;
  height: 300px;
  text-align: center;
  background-image: linear-gradient(
      to top right,
      rgba(255, 255, 255, 0.1),
      rgba(1, 1, 1, 0.1)
    ),
    linear-gradient(
      to bottom left,
      rgba(255, 255, 255, 0.1),
      rgba(1, 1, 1, 0.1)
    );
`;

const MainTitle = styled.text`
  ${HeadingXXL};
`;

const Title = styled.text`
  ${HeadingXL};
`;

const SubTitle = styled.text`
  ${TextM};
  color: ${Gray1};
`;

const Divider = styled.div`
  height: 2px;
  background: ${White};
  width: 5%;
  margin: auto;
`;

const InputContainer = styled.div`
  overflow: hidden;
  border: 0px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-shadow: -2px 4px 8px rgba(0, 0, 0, 0.25);
`;

const Input = styled.input.attrs({ type: "text" })`
  ${TextS};
  width: 240px;
  color: ${Primary};
  margin-bottom: 0;
  text-transform: uppercase;
  border-radius: 8px;
  height: 32px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  border: 1px solid ${Gray2};
  padding: 10px 20px;
  text-align: right;
  &:active {
    background-color: ${Gray6};
  }
  &:hover {
    border: 1px solid ${Primary};
  }
`;

const Text = styled.text`
  ${TextM}
  color: green;
`;

const SendEmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const Row = styled.div`
  @media (max-width: 900px) {
  }
  @media (min-width: 900px) {
    display: flex;
  }
`;

const BoxGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem;
`;

const RightColumn = styled.div`
  flex: 0.3;
  margin: auto;
  text-align: right;
  @media (min-width: 900px) {
    margin: 20px;
  }
`;

const LeftColumn = styled.div`
  flex: 0.7;
  display: flex;
  justify-content: flex-start;
  @media (min-width: 900px) {
    padding: 20px;
  }
`;

const Box = styled.div`
  flex: 0.5;
  border: 1px solid black;
  border-radius: 16px;
  padding: 24px;
  text-align: right;
`;

const FadingBox = styled.section`
  width: 300px;
  height: 300px;
  background: red;
  transition: opacity 0.3s;

  // enter from
  &.fade-enter {
    opacity: 0;
  }

  // enter to
  &.fade-enter-active {
    opacity: 1;
  }

  // exit from
  &.fade-exit {
    opacity: 1;
  }

  // exit to
  &.fade-exit-active {
    opacity: 0;
  }
`;

const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 480px 200px 100px;
  grid-template-areas:
    "main main main"
    "content content content"
    "footer footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "main"
      "content"
      "footer";
  }
  color: white;
`;

const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 480px;
  background-size: contain;
  background-image: url(${ImgSrc});
  background-repeat: no-repeat;
  -webkit-background-size: 100% 100%;
  -moz-background-size: 100% 100%;
  -o-background-size: 100% 100%;
  background-size: 100% 100%;
`;

const IconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

const ThumbsUpIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${ThumbsUpUrl});
  -webkit-background-size: 100% 100%;
`;

const ShadowContainer = styled.div`
  position: relative;
  background: white;
  height: 320px;
  width: 80%;
  border-radius: 16px;
  :after {
    content: "";
    position: absolute;
    inset: -0.625em;
    background: linear-gradient(
        to top right,
        rgba(49, 185, 252, 0.4),
        rgba(0, 0, 0, 0.2)
      ),
      linear-gradient(
        to bottom left,
        rgba(255, 255, 255, 0.2),
        rgba(49, 185, 252, 0.4)
      );
    filter: blur(5em);
    z-index: -1;
  }
`;

const Footer = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`;

export default HomeScreen;
