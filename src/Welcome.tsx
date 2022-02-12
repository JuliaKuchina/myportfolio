import styled from "styled-components";
import { TechChart } from "./Chart";
import {
  BORDER_RADIUS,
  CONTAINER_WIDTH,
  StyledBox,
  StyledH2,
  StyledParagraph,
  StyledRainbowSpan,
} from "./constants/style";

const StyledContainer = styled.div`
  padding: 50px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${CONTAINER_WIDTH}px) {
    max-width: 100%;
  }
`;

const StyledSubHeader = styled.h2`
  opacity: 0.5;
  font-size: 18px;
  margin: 0;
  font-weight: normal;
`;

const StyledHeader = styled.h1`
  font-family: "Roboto Condensed";
  font-weight: 400;
  font-size: 40px;
  margin: 16px 0 8px;
`;

const StyledLink = styled.a`
  color: #555;
  background: white;
  font-size: 16px;
  padding: 16px;
  text-decoration: none;
  border-radius: ${BORDER_RADIUS * 2}px;
  display: block;
`;

const StyledLinkContainer = styled.div`
  padding: 3px;
  text-align: center;
  width: 205px;
  text-decoration: none;
  margin: 16px 0 8px;
  border-radius: ${BORDER_RADIUS * 2.5}px;
  background-image: linear-gradient(
    to right,
    #b8cbb8 0%,
    #b8cbb8 0%,
    #b465da 0%,
    #cf6cc9 33%,
    #ee609c 66%,
    #ee609c 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export function Welcome() {
  return (
    <StyledBox>
      <StyledContainer>
        <div>
          <StyledH2>YULIA KUCHINA</StyledH2>
          <StyledSubHeader>Senior Front End Developer</StyledSubHeader>
          <StyledParagraph>
            Contact info is in my resume.
            <br />
            P.S. Yes, you can drag and move the bubbles around :)
          </StyledParagraph>
        </div>
        <StyledLinkContainer>
          <StyledLink download href="./YuliaKuchinaResume.pdf">
            <StyledRainbowSpan>Download resume</StyledRainbowSpan>
          </StyledLink>
        </StyledLinkContainer>
      </StyledContainer>
      <TechChart />
    </StyledBox>
  );
}
