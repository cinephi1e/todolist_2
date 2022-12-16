import styled from "styled-components";

const Content = styled.div`
  min-height: 670px;
`;

const Todolist = styled.div`
  height: 190px;
  text-align: center;
  margin-top: 50px;
`;

const Id = styled.div`
  font-weight: lighter;
  margin-bottom: 10px;
`;

const Date = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 15px;
`;

const Todo = styled.div`
  font-size: 40px;
`;

const Bottom = styled.div`
  display: flex;
  border-top: 2px solid;
  padding: 10px 0;
`;

const PrevBtn = styled.div`
  margin-left: auto;
  border: none;
  background: none;
  cursor: pointer;
`;

export { Content, Todolist, Date, Todo, Bottom, Id, PrevBtn };
