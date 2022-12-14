import Header from "./header/Header";
import Contents from "./contents/Contents";
import Todolist from "./todolist/Todolist";
import { Main, Footer } from "./style";

const Home = ({ children }) => {
  return (
    <Main>
      <Header />
      {children}
      <Footer>cinephile</Footer>
    </Main>
  );
};

export default Home;
