import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Content, Todolist, Date, Todo, Bottom, Id, PrevBtn } from "./style";

const TodolistPages = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { initialList } = useSelector((state) => state.manageTodo);
  const filteredList = initialList.filter((item) => item.id === params.id);
  const item = filteredList[0];

  return (
    <Content>
      <Todolist>
        <Id>ID: {item.id.slice(0, 8)}</Id>
        <Date>{item.date}</Date>
        <Todo>{item.todo}</Todo>
      </Todolist>

      <Bottom>
        {item.isDone === false ? "늦기 전에 완료해주세요." : "완료"}
        <PrevBtn
          onClick={() => {
            navigate("/");
          }}
        >
          back
        </PrevBtn>
      </Bottom>
    </Content>
  );
};

export default TodolistPages;
