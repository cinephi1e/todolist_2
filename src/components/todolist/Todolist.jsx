import { List, DoneList, Date, ButtonArea, Button } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo, updateTodo } from "../../redux/modules/manageTodo";

const Todolist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector((state) => state.manageTodo.initialList);

  // delete 버튼
  const delBtn = (event, id) => {
    event.stopPropagation();
    if (window.confirm("정말 삭제하시겠습니까?")) {
      return dispatch(deleteTodo(id));
    }
  };

  // done/cancel 버튼
  const updateBtn = (event, id) => {
    event.stopPropagation();
    dispatch(updateTodo(id));
  };

  return (
    <>
      {list.map((item, i) => {
        if (!item.isDone) {
          return (
            <List
              key={item.id}
              onClick={() => {
                navigate("/" + i);
              }}
            >
              <Date>{item.date}</Date>
              {item.todo}
              <ButtonArea>
                <Button onClick={(event) => updateBtn(event, item.id)}>
                  done
                </Button>
                <Button onClick={(event) => delBtn(event, item.id)}>
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
              key={item.id}
              onClick={() => {
                navigate("/" + i);
              }}
            >
              <Date>{item.date}</Date>
              {item.todo}
              <ButtonArea>
                <Button onClick={(event) => updateBtn(event, item.id)}>
                  cancel
                </Button>
                <Button onClick={(event) => delBtn(event, item.id)}>
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
