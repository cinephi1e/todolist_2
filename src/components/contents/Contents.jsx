import styled from "styled-components";
import { useSelector } from "react-redux";
import Todolist from "../todolist/Todolist";

const Content = styled.div`
  min-height: 700px;
`;

const Contents = () => {
  const list = useSelector((state) => state.manageTodo.initialList);
  const listState = list.filter((item) => item.isDone === false);
  console.log("listState", listState);

  return (
    <Content>
      <Todolist />
      {/* {list
        .filter((item) => item.isDone === true)
        .map((item, i) => {
          return <Todolist key={i} />;
        })} */}
    </Content>
  );
};

export default Contents;
