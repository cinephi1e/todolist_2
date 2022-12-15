import { List, DoneList, Date, ButtonArea, Button } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo, updateTodo } from "../../redux/modules/manageTodo";
import { useRef } from "react";

const Todolist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const thisTodo = useRef();
  const list = useSelector((state) => state.manageTodo.initialList);

  // 투두리스트 delete 버튼
  const delBtn = (event, id) => {
    // const choice = list.filter((todo) => todo.id !== thisTodo);
    // console.log(id);
    event.stopPropagation();
    if (window.confirm("정말 삭제하시겠습니까?")) {
      // return dispatch(deleteTodo(list.filter((todo) => todo.id !== id)));
    }
  };

  return (
    <>
      {list.map((item, i) => {
        if (!item.isDone) {
          return (
            <List
              key={i}
              onClick={() => {
                navigate("/" + i);
              }}
            >
              <Date>{item.date}</Date>
              {item.todo}
              <ButtonArea>
                <Button>{item.isDone ? "cancel" : "done"}</Button>
                <Button
                  ref={thisTodo}
                  id={console.log(item.id)}
                  onClick={delBtn}
                >
                  delete
                </Button>
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
              onClick={() => {
                navigate("/" + i);
              }}
            >
              <Date>{item.date}</Date>
              {item.todo}
              <ButtonArea>
                <Button>{item.isDone ? "cancel" : "done"}</Button>
                <Button ref={thisTodo} onClick={delBtn}>
                  delete
                </Button>
              </ButtonArea>
            </DoneList>
          );
        }
      })}
    </>
  );
};

export default Todolist;
