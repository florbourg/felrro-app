import styled from "styled-components";

function App() {
  return (
    <Container>
      <p>Felrro App Productos</p>
    </Container>
  );
}

const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: #fff;
  text-align: center;
`;

export default App;
