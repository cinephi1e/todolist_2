import { List, DoneList, Date, ButtonArea, Button } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo, updateTodo } from "../../redux/modules/manageTodo";
import { useRef } from "react";

const Todolist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.manageTodo.initialList);

  const delBtn = (event) => {
    const { value } = event.target;
    console.log(value);
    event.stopPropagation();
    if (window.confirm("정말 삭제하시겠습니까?")) {
      return dispatch(deleteTodo(list.filter(event)));
    }
  };

  // const updateBtn = (id) => {
  //   id.stopPropagation();
  //   dispatch(
  //     updateTodo({
  //       isDone: true,
  //     })
  //   );
  // };

  return (
    <>
      {list.map((item, i) => {
        if (!item.isDone) {
          return (
            <List
              key={i}
              id={item.id}
              onClick={(event) => {
                navigate("/" + i);
              }}
            >
              <Date>{item.date}</Date>
              {item.todo}
              <ButtonArea>
                <Button>{item.isDone ? "cancel" : "done"}</Button>
                <Button onClick={delBtn}>delete</Button>
              </ButtonArea>
            </List>
          );
        }
      })}

      {list.map((item, i) => {
        if (item.isDone) {
          return (
            <DoneList
              key={i}
              id={item.id}
              onClick={() => {
                navigate("/" + i);
              }}
            >
              <Date>{item.date}</Date>
              {item.todo}
              <ButtonArea>
                <Button>{item.isDone ? "cancel" : "done"}</Button>
                <Button onClick={delBtn}>delete</Button>
              </ButtonArea>
            </DoneList>
          );
        }
      })}
    </>
  );
};

export default Todolist;
