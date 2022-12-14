import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Content, Todolist, Date, Todo, Bottom, Id, PrevBtn } from "./style";
const TodolistPages = () => {
  const list = useSelector((state) => state.manageTodo.initialList);
  const i = Object.values(useParams());
  const navigate = useNavigate();

  return (
    <Content>
      <Todolist>
        <Id>ID: {list[i].id.slice(0, 8)}</Id>
        <Date>{list[i]["date"]}</Date>
        <Todo>{list[i]["todo"]}</Todo>
      </Todolist>

      <Bottom>
        <input type="checkbox" /> 완료
        <PrevBtn
          onClick={() => {
            navigate("/");
          }}
        >
          이전페이지
        </PrevBtn>
      </Bottom>
    </Content>
  );
};

export default TodolistPages;
