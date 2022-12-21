import styled from "styled-components";
import Todolist from "../components/todolist/Todolist";

const Content = styled.div`
  min-height: 700px;
`;

const Main = () => {
  return (
    <Content>
      <Todolist isActive={true} />
      <Todolist isActive={false} />
    </Content>
  );
};

export default Main;
