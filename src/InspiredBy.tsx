import styled from "styled-components";
import {
  StyledBox,
  StyledH2,
  StyledParagraph,
  StyledRainbowSpan,
} from "./constants/style";

const StyledContainer = styled.div`
  padding: 50px;
  width: 100%;
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
          and my favourite data-visualisation library
          <StyledLink href="https://d3js.org/" target="_blank">
            <StyledRainbowSpan>D3</StyledRainbowSpan>
          </StyledLink>
        </StyledParagraph>
        <StyledParagraph>
          Typescript logo
          <StyledLink href="http://www.onlinewebfonts.com">
            <StyledRainbowSpan>oNline Web Fonts</StyledRainbowSpan>
          </StyledLink>
        </StyledParagraph>
      </StyledContainer>
    </StyledBox>
  );
}
