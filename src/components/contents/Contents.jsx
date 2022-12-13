import styled from "styled-components";
import { useSelector } from "react-redux";
import Todolist from "../todolist/Todolist";
import TodolistPages from "../todolistpages/TodolistPages";

const Content = styled.div`
  min-height: 700px;
`;

const Contents = ({ value }) => {
  const list = useSelector((state) => state.manageTodo.initialList);
  const component = value === "todolist" ? true : false;
  console.log(component);

  return (
    <Content>
      {list
        .filter((item) => component === !item.isDone)
        .map((item, index) => {
          return <Todolist key={index} />;
        })}
      <TodolistPages />
    </Content>
  );
};

export default Contents;
