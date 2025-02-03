import styled from "styled-components";
import Content from "../features/Content";
import Title from "../features/Title";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-height: 100vh;
  padding: 10rem 20rem;
  overflow: hidden;
  // background-color: #faf9f7;

  background: hsla(40, 23%, 97%, 1);

  background: radial-gradient(
    circle,
    hsla(40, 23%, 97%, 1) 25%,
    hsla(351, 88%, 97%, 1) 100%
  );

  background: -moz-radial-gradient(
    circle,
    hsla(40, 23%, 97%, 1) 25%,
    hsla(351, 88%, 97%, 1) 100%
  );

  background: -webkit-radial-gradient(
    circle,
    hsla(40, 23%, 97%, 1) 25%,
    hsla(351, 88%, 97%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#FAF9F7", endColorstr="#FEF0F2", GradientType=1 );

  @media (max-width: 1024px) {
    padding: 5rem 8rem;
    overflow: visible;
  }

  @media (max-width: 600px) {
    padding: 2rem 2rem;
  }
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
