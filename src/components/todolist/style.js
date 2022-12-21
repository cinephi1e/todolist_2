import styled from "styled-components";

const List = styled.div`
  display: flex;
  border-bottom: 1px dashed;
  padding: 16px 6px 14px 10px;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;

const Done = styled.div`
  text-decoration: line-through;
  text-decoration-color: red;
  text-decoration-thickness: 0.15rem;
`;

const Date = styled.span`
  font-weight: 600;
  margin-right: 7px;
`;

const ButtonArea = styled.div`
  margin-left: auto;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

export { List, Done, Date, ButtonArea, Button };
