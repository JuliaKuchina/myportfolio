import styled from "styled-components";
import {
  CONTAINER_WIDTH,
  StyledBox,
  StyledH2,
  StyledParagraph,
  StyledRainbowSpan,
} from "./helpers/style";

const StyledContainer = styled.div`
  padding: 50px;
  width: 100%;
  @media (max-width: ${CONTAINER_WIDTH}px) {
    padding: 16px;
  }
`;

const StyledLink = styled.a`
  font-size: 16px;
  padding: 16px;
  text-decoration: none;
  text-transform: uppercase;
`;

export function InspiredBy() {
  return (
    <StyledBox>
      <StyledContainer>
        <StyledH2>Inspired By</StyledH2>
        <StyledParagraph>
          Beautiful website by
          <StyledLink href="https://acerarbuckle.com/" target="_blank">
            <StyledRainbowSpan>Acer Arbuckle</StyledRainbowSpan>
          </StyledLink>
          <br />
          My favourite data-visualisation library
          <StyledLink href="https://d3js.org/" target="_blank">
            <StyledRainbowSpan>D3</StyledRainbowSpan>
          </StyledLink>
          <br />
          Typescript logo
          <StyledLink href="http://www.onlinewebfonts.com">
            <StyledRainbowSpan>oNline Web Fonts</StyledRainbowSpan>
          </StyledLink>
        </StyledParagraph>
      </StyledContainer>
    </StyledBox>
  );
}
