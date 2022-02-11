import styled from "styled-components";
import { PROJECTS } from "./constants/projects";
import { Card } from "./Card";
import { About } from "./About";
import { CONTAINER_WIDTH } from "./constants/style";
import { Welcome } from "./Welcome";

const StyledAppContainer = styled.div`
  font-family: "Poppins", serif;
  letter-spacing: 0.05em;
`;

const CardFlexContainer = styled.div`
  max-width: ${CONTAINER_WIDTH + 36}px;
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

function App() {
  return (
    <StyledAppContainer>
      <About />
      <Welcome />
      <CardFlexContainer>
        {PROJECTS.map((project) => (
          <Card project={project} />
        ))}
      </CardFlexContainer>
    </StyledAppContainer>
  );
}

export default App;
