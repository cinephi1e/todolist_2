import { List, Date, ButtonArea, Button } from "./style";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Todolist = ({ isDone, index }) => {
  const list = useSelector((state) => state.manageTodo.initialList);
  const navigate = useNavigate();

  return (
    <>
      {list.map((item, index) => {
        return (
          <List
            key={index}
            onClick={() => {
              navigate("/" + index);
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
      })}
    </>
  );
};

export default Todolist;
