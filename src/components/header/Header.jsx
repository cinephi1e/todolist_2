import { Content, Title, Input, InputTodo, InputBtn } from "./style";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/manageTodo";

const Header = () => {
  const dispatch = useDispatch();

  // 인풋 지역상태 관리
  const [todo, setTodo] = useState("");

  // 투두리스트 추가
  const addBtn = () => {
    if (!todo) {
      alert("빠진 내용이 없나 확인해보세요.");
    } else {
      setTodo("");
      dispatch(
        addTodo({
          id: uuid(),
          date: new Date().toLocaleDateString(),
          todo,
          isDone: false,
        })
      );
    }
  };

  return (
    <Content>
      <Title>Todolist</Title>
      <Input>
        <InputTodo
          placeholder="Do your job!"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          autoFocus
        />
        <InputBtn onClick={addBtn}>add</InputBtn>
      </Input>
    </Content>
  );
};

export default Header;
