import { List, DoneList, Date, ButtonArea, Button } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo } from "../../redux/modules/manageTodo";

const Todolist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.manageTodo.initialList);

  const delBtn = (id) => {
    id.stopPropagation();
    const newList = list.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: true,
        };
      } else {
        return { ...todo };
      }
    });
    dispatch(deleteTodo({ newList }));
  };

  return (
    <>
      {list.map((item, i) => {
        if (!item.isDone) {
          return (
            <List
              key={i}
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
