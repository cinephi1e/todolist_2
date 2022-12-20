import { Content, Title, Input, InputDate, InputTodo, InputBtn } from "./style";
import { v4 as uuid } from "uuid";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { __addTodo } from "../../redux/modules/manageTodo";

const Header = () => {
  const dispatch = useDispatch();

  // 인풋 자동 포커싱
  const focusDate = useRef();
  const focusTodo = useRef();

  // 인풋 지역상태 관리
  const [date, setDate] = useState("");
  const [todo, setTodo] = useState("");

  // 투두리스트 추가
  const addBtn = () => {
    if (!date) {
      alert("빠진 내용이 없나 확인해보세요.");
      focusDate.current.focus();
    } else if (!todo) {
      alert("빠진 내용이 없나 확인해보세요.");
      focusTodo.current.focus();
    } else {
      setDate("");
      setTodo("");
      dispatch(
        __addTodo({
          id: uuid(),
          date,
          todo,
          isDone: false,
        })
      );
      focusDate.current.focus();
    }
  };

  return (
    <Content>
      <Title>Todolist</Title>
      <Input>
        <InputDate
          placeholder="date"
          value={date}
          ref={focusDate}
          onChange={(e) => setDate(e.target.value)}
          autoFocus
        />
        <InputTodo
          placeholder="Do your job!"
          value={todo}
          ref={focusTodo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <InputBtn onClick={addBtn}>add</InputBtn>
      </Input>
    </Content>
  );
};

export default Header;
