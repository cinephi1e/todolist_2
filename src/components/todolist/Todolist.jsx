import { List, Date, ButtonArea, Button } from "./style";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Todolist = (value) => {
  const navigate = useNavigate();
  const list = useSelector((state) => state.manageTodo.initialList);

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
                <Button>delete</Button>
              </ButtonArea>
            </List>
          );
        }
      })}

      {list.map((item, i) => {
        if (item.isDone) {
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
                <Button>delete</Button>
              </ButtonArea>
            </List>
          );
        }
      })}
    </>
  );
};

export default Todolist;
