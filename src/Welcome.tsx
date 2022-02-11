import styled from "styled-components";
import { TechChart } from "./Chart";
import { StyledBox } from "./constants/style";

const StyledContainer = styled.div`
  padding: 50px;
  width: 100%;
  max-width: 400px;
`;
const StyledSubHeader = styled.h2`
  opacity: 0.5;
  font-size: 16px;
  margin: 0;
`;

export function Welcome() {
  return (
    <StyledBox>
      <StyledContainer>
        <h1>Yulia Kuchina</h1>
        <StyledSubHeader>Senior Front End Developer</StyledSubHeader>
      </StyledContainer>
      <TechChart />
    </StyledBox>
  );
}
