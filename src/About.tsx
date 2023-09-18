import styled from "styled-components";
import {
  CONTAINER_WIDTH,
  StyledBox,
  StyledH2,
  StyledParagraph,
} from "./helpers/style";
import { StarryNight } from "./StarryNight";

const StyledText = styled.div`
  width: 100%;
  max-width: 574px;
  padding: 36px 48px;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${CONTAINER_WIDTH}px) {
    max-width: 100%;
  }
`;

const COMPANIES: string[] = [
  "Rural Fire Service NSW",
  "Revenue NSW",
  "ABC",
  "Centennial Coal",
  "Kablamo",
  "Anditi",
  "Polemos",
];

export function About() {
  const format = new Intl.ListFormat();
  return (
    <StyledBox>
      <StarryNight />
      <StyledText>
        <div>
          <StyledH2>ABOUT</StyledH2>
          <StyledParagraph>
            React • React Native • Redux • Typescript • GraphQL • REST •
            Material-UI • D3 • Three.js • Web3 ...
          </StyledParagraph>
        </div>
        <StyledParagraph>
          I am a React & React Native developer with a passion for front-end
          projects, clean code, functional programming and data visualisations.
          I have 5 years of React + Typescript experience, 9 years of experience
          in web development and a master's degree in mathematics and computer
          science.
        </StyledParagraph>
        <StyledParagraph>
          I have extensive experience building web applications for both desktop
          and mobile devices. I worked on projects for companies like{" "}
          <b>{format.format(COMPANIES)}</b>.
        </StyledParagraph>
      </StyledText>
    </StyledBox>
  );
}
