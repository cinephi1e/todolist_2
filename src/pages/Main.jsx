import styled from "styled-components";
import Todolist from "../components/todolist/Todolist";

const Content = styled.div`
  min-height: 700px;
`;

const Contents = () => {
  return (
    <Content>
      <Todolist />
    </Content>
  );
};

export default Contents;