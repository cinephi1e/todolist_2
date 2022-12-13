import styled from "styled-components";

const Content = styled.div`
  display: flex;
  border-bottom: 2px solid;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
`;

const Input = styled.div`
  margin: 40px 0 0 auto;
`;

const InputDate = styled.input`
  width: 90px;
  height: 20px;
  margin-right: 7px;
`;

const InputTodo = styled.input`
  width: 200px;
  height: 20px;
`;

const InputBtn = styled.button`
  height: 26px;
  margin-left: 7px;
`;

export { Content, Title, Input, InputDate, InputTodo, InputBtn };
