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
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: space-between;
`;
