import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo, updateTodo } from "../../redux/modules/manageTodo";

const Todo = ({ todo, isActive }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  return <></>;
};

export default Todo;
