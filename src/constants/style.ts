import styled, { keyframes } from "styled-components";

export const BORDER_RADIUS = 16;
export const CONTAINER_WIDTH = 1024;

export const ROTATE = keyframes`
  0% {
    transform: rotate(0deg) scale(0.8);
  }

  50% {
    transform: rotate(180deg) scale(1.8);
  }

  100% {
    transform: rotate(360deg) scale(0.8);
  }
`;

export const FLOAT = keyframes`
  0% {
    transform: translateY(5px);
  }

  50% {
    transform: translateY(-5px);
  }

  100% {
    transform: translateY(5px);
  }`;

export const StyledBox = styled.div`
  border-radius: ${BORDER_RADIUS}px;
  max-width: ${CONTAINER_WIDTH}px;
  box-shadow: 0px 0px 60px 0px rgb(0 0 0 / 20%);
  margin: 25px auto;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: space-between;
  @media (max-width: ${CONTAINER_WIDTH}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledHeader = styled.p`
  font-family: "Roboto Condensed";
  font-weight: 400;
  font-size: 36px;
  margin: 16px 0 8px;
`;

export const StyledRainbowSpan = styled.span`
  color: #3a3f5e;
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
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledParagraph = styled.p`
  font-size: 14px;
  color: #555;
`;
