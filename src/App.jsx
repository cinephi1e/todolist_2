import styled from "styled-components";
import Router from "./shared/Router";

const Main = styled.div`
  width: 800px;
  min-height: 800px;
  padding: 10px 50px 20px 50px;
  margin: 50px auto;
  border: 2px solid;
`;

function App() {
  return (
    <Main>
      <Router />
    </Main>
  );
}

export default App;
