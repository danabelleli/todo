import styled from "styled-components";
import Content from "../features/Content";
import Title from "../features/Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  // height: calc(100vh - 10rem);
  height: 100vh;
  padding: 10rem 20rem;
  overflow: hidden;
  background-color: #faf9f7;
`;

function AppLayout() {
  return (
    <Container>
      <Title />
      <Content />
    </Container>
  );
}

export default AppLayout;
