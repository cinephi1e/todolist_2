import { Content, Title, Input, InputDate, InputTodo, InputBtn } from "./style";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const list = useSelector((state) => state.manageTodo.initialList);
  console.log(list);
  const dispatch = useDispatch();

  const [date, setDate] = useState("");
  const [todo, setTodo] = useState("");

  const onClickAdd = () => {
    const newList = {
      id: uuid(),
      date,
      todo,
      isDone: false,
    };
    if (date && todo) {
      setDate("");
      setTodo("");
    } else {
      alert("빠트린 내용이 없나 확인해보세요.");
    }
  };
  return (
    <Content>
      <Title>Todolist</Title>
      <Input>
        <InputDate />
        <InputTodo />
        <InputBtn
          onClick={() => {
            dispatch({ type: "ADD_TODO" });
          }}
        >
          add
        </InputBtn>
      </Input>
    </Content>
  );
};

export default Header;
