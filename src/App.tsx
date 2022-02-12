import styled from "styled-components";
import { Welcome } from "./Welcome";
import { PROJECTS } from "./constants/projects";
import { Card } from "./Card";
import { About } from "./About";
import { ColorPills } from "./ColorPills";
import { CONTAINER_WIDTH } from "./constants/style";

const StyledAppContainer = styled.div``;

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
      <Welcome />
      <ColorPills />
      <About />
      <CardFlexContainer>
        {PROJECTS.map((project) => (
          <Card key={project.title} project={project} />
        ))}
      </CardFlexContainer>
    </StyledAppContainer>
  );
}

export default App;
