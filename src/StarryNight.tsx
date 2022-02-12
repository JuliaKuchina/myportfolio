import styled from "styled-components";
import photo from "./assets/images/me.jpeg";
import reactLogo from "./assets/images/logo.svg";
import typescriptLogo from "./assets/images/typescript.svg";
import {
  BORDER_RADIUS,
  ROTATE,
  FLOAT,
  CONTAINER_WIDTH,
} from "./constants/style";

const StyledImageContainer = styled.div`
  width: 100%;
  max-width: 450px;
  min-width: 320px;
  min-height: 450px;
  position: relative;
  background-color: #3a3f5e;
  background-color: #3a3f5e;
  background-image: radial-gradient(
      white,
      rgba(255, 255, 255, 0.2) 2px,
      transparent 10px
    ),
    radial-gradient(white, rgba(255, 255, 255, 0.5) 1px, transparent 0px),
    radial-gradient(white, rgba(255, 255, 255, 0.8) 4px, transparent 1px),
    radial-gradient(
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.5) 2px,
      transparent 0px
    );
  background-size: 1000px 2000px, 350px 350px, 250px 250px, 150px 150px;
  background-position: 150px 150px;
  @media (max-width: ${CONTAINER_WIDTH}px) {
    max-width: 100%;
  }
`;
const StyledImageBorder = styled.div`
  position: absolute;
  top: 80px;
  left: 80px;
  width: 180px;
  height: 180px;
  padding: ${BORDER_RADIUS / 1.5}px;
  border-radius: 50%;
  animation: ${FLOAT} 6s infinite;
  background: rgb(213, 34, 122);
  background: linear-gradient(
    223deg,
    rgba(213, 34, 122, 1) 0%,
    rgba(246, 157, 136, 1) 100%
  );
`;
const StyledImage = styled.img`
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
`;
const StyledReactLogo = styled.img`
  position: absolute;
  bottom: 70px;
  left: 50px;
  width: 130px;
  animation: ${ROTATE} 10s infinite;
`;
const StyledTypescriptLogo = styled.img`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 100px;
  animation: ${FLOAT} 7s infinite;
`;

const StyledCss = styled.div`
  position: absolute;
  right: 30px;
  top: 80px;
  font-size: 36px;
  font-weight: 600;
  background: rgb(251, 228, 131);
  background: linear-gradient(
    110deg,
    rgba(251, 228, 131, 1) 0%,
    rgba(248, 165, 126, 1) 47%,
    rgba(237, 44, 124, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${FLOAT} 8s infinite;
`;

const StyledHtml = styled.div`
  position: absolute;
  right: 30px;
  top: 40px;
  font-size: 40px;
  font-weight: 600;
  color: rgba(251, 228, 131, 1);
  transform: rotate(45deg);
  animation: ${FLOAT} 12s infinite;
  span:nth-child(2) {
    color: rgba(248, 165, 126, 1);
  }
  span:nth-child(3) {
    color: rgba(237, 44, 124, 1);
  }
  span:nth-child(4) {
    color: #a82171;
  }
  span:nth-child(5) {
    color: #61dafb;
  }
`;

export function StarryNight() {
  return (
    <StyledImageContainer>
      <StyledImageBorder>
        <StyledImage
          src={photo}
          alt="Yulia Kuchina, senior front end developer"
        />
      </StyledImageBorder>
      <StyledReactLogo src={reactLogo} alt="react" />
      <StyledTypescriptLogo src={typescriptLogo} alt="typescript" />
      <StyledCss>CSS4</StyledCss>
      <StyledHtml>
        <span>H</span>
        <span>T</span>
        <span>M</span>
        <span>L</span>
        <span>5</span>
      </StyledHtml>
    </StyledImageContainer>
  );
}
