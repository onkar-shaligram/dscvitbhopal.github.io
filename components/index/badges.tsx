import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { Section, Container } from "../global";

import { lightTheme } from "../../styles/theme";

const Badges = () => {
  return (
    <Wrapper>
      <Container>
        <TextGroup>
          <Title>Badges</Title>
          <Info>
            The students who complete tasks in our events are rewarded with
            badges.
            <br /> Wanna be featured on this page? Stay tuned for the next event
            and make sure you get that badge..!!
          </Info>
          <Flex>
            <Link href="/badges">
              <Button>Badges</Button>
            </Link>
          </Flex>
        </TextGroup>
      </Container>
    </Wrapper>
  );
};
export default Badges;

const Wrapper = styled(Section)`
  background-color: ${(props) => props.theme.color.background};
  clip-path: polygon(0 3vw, 100% 0, 100% 100%, 0 100%);
  padding: 10rem 0;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    align-items: flex-start;
  }
`;

const Title = styled.div`
  font-size: 45px;
  font-weight: bolder;
  margin-bottom: 2rem;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    font-size: 38px;
  }
  @media (max-width: ${(props) => props.theme.screen.xs}) {
    font-size: 30px;
  }
`;

const Info = styled.div`
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  margin-bottom: 3rem;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    text-align: left;
    font-size: 16px;
    line-height: 24px;
  }
`;

const Button = styled.div`
  background: ${lightTheme.color.background};
  color: ${lightTheme.color.text};

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px 15px;
  height: 60px;

  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;

  cursor: pointer;

  border-radius: 4px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  width: 260px;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-content: flex-start;
  }
`;
