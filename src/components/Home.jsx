import Header from "./header/Header";
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
