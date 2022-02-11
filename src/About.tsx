import styled from "styled-components";
import { StyledBox } from "./constants/style";
import { StarryNight } from "./StarryNight";

const StyledText = styled.div`
  width: 100%;
  max-width: 550px;
  padding: 36px 48px;
  font-size: 1rem;
`;

export function About() {
  return (
    <StyledBox>
      <StarryNight />
      <StyledText>
        <p>
          I am a Front End Engineer with more than 4 years of experience with
          React and Typescript and more than 8 years’ experience in web
          technologies.
        </p>
        <p>
          I love to design and build UI for applications. There is some magic in
          how small changes in colours, element position, image or animation can
          cause a huge impact on user experience. I write simple code that is
          easy to use and maintain. I have a lifelong passion for geometry and
          maps, enjoy challenges, end-of-edge technologies and wonderful people.
        </p>
        <p>I have a masters degree in mathematics and computer science.</p>
      </StyledText>
    </StyledBox>
  );
}
