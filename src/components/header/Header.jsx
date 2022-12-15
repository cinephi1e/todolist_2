import { Content, Title, Input, InputDate, InputTodo, InputBtn } from "./style";
import { v4 as uuid } from "uuid";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/modules/manageTodo";

const Header = () => {
  const list = useSelector((state) => state.manageTodo.initialList);
  const dispatch = useDispatch();

  const inputDate = useRef();
  const inputTodo = useRef();

  // const [date, setDate] = useState("");
  // const [todo, setTodo] = useState("");

  const addBtn = () => {
    if (inputDate && inputTodo) {
      // setDate("");
      // setTodo("");
      dispatch(
        addTodo({
          id: uuid(),
          date: inputDate.current.value,
          todo: inputTodo.current.value,
          isDone: false,
        })
      );
    }
    if (inputDate === null) {
      alert("빠트린 내용이 없나 확인해보세요.");
    }
  };
  return (
    <Content>
      <Title>Todolist</Title>
      <Input>
        <InputDate placeholder="date" ref={inputDate} />
        <InputTodo placeholder="Do your job!" ref={inputTodo} />
        <InputBtn onClick={addBtn}>add</InputBtn>
      </Input>
    </Content>
  );
};

export default Header;
