import { Content, Title, Input, InputDate, InputTodo, InputBtn } from "./style";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/modules/manageTodo";

const Header = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState("");
  const [todo, setTodo] = useState("");

  // 투두리스트 추가
  const addBtn = () => {
    if (!date || !todo) {
      return alert("빠진 내용이 없나 확인해보세요.");
    } else {
      setDate("");
      setTodo("");
      dispatch(
        addTodo({
          id: uuid(),
          date,
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
        <InputDate
          placeholder="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <InputTodo
          placeholder="Do your job!"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <InputBtn onClick={addBtn}>add</InputBtn>
      </Input>
    </Content>
  );
};

export default Header;
