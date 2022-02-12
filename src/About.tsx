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

export function About() {
  return (
    <StyledBox>
      <StarryNight />
      <StyledText>
        <div>
          <StyledH2>ABOUT</StyledH2>
          <StyledParagraph>
            React • React Native • Redux • Typescript • GraphQL • REST •
            Material-UI • D3 • Three.js • ...
          </StyledParagraph>
        </div>
        <StyledParagraph>
          I am a React & React Native developer with a passion for front-end
          projects, clean code, functional programming and data visualisations.
          I have 4 years of React + Typescript experience, 8 years of experience
          in web development and a master's degree in mathematics and computer
          science.
        </StyledParagraph>
      </StyledText>
    </StyledBox>
  );
}
