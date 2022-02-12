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
  font-size: 16px;
  padding: 16px;
  text-decoration: none;
  text-transform: uppercase;
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
        <StyledParagraph></StyledParagraph>
      </StyledContainer>
    </StyledBox>
  );
}
