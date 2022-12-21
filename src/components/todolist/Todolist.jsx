import { List, Done, Date, ButtonArea, Button } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  getTodos,
  deleteTodo,
  updateTodo,
} from "../../redux/modules/manageTodo";

const Todolist = ({ isActive }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, initialList } = useSelector(
    (state) => state.manageTodo
  );

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

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

  if (isLoading) {
    return <>Loading...</>;
  }
  if (error) {
    return <>{error.message}</>;
  }

  return (
    <>
      {initialList
        .filter((item) => item.isDone === !isActive)
        .map((item) => {
          return (
            <List
              key={item.id}
              todo={item}
              isActive={isActive}
              onClick={() => {
                navigate(`/${item.id}`);
              }}
            >
              {isActive === true ? (
                <>
                  <Date>{item.date}</Date>
                  {item.todo}
                </>
              ) : (
                <Done>
                  <Date>{item.date}</Date>
                  {item.todo}
                </Done>
              )}
              <ButtonArea>
                <Button onClick={(event) => updateBtn(event, item.id)}>
                  {isActive === true ? "done" : "cancel"}
                </Button>
                <Button onClick={(event) => delBtn(event, item.id)}>
                  delete
                </Button>
              </ButtonArea>
            </List>
          );
        })}
    </>
  );
};

export default Todolist;
