import Header from "./header/Header";
import Contents from "./contents/Contents";
import Todolist from "./todolist/Todolist";
import TodolistPages from "./todolistpages/TodolistPages";
import { Main, Footer } from "./style";
import { Date } from "../components/todolist/style";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const list = useSelector((state) => state.manageTodo.initialList);
  const navigate = useNavigate();

  return (
    <Main>
      <Header />
      <Contents>
        <Todolist name="todolist" />
        <Todolist name="donelist" />
      </Contents>
      <Footer>cinephile</Footer>
    </Main>
  );
};

export default Home;
