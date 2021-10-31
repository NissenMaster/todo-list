import React, { FC, memo } from 'react';
import styled from 'styled-components';
import TodoListContent from './Content';

const Header = styled.header`
  color: #acf0b5;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 36px;
  margin: 32px 0;
`;
const Footer = styled.footer`
  color: #acf0b5;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 24px;
  margin: 32px 0;
`;
const TodoList: FC = () => {
  return (
    <main>
      <Header>TodoList</Header>
      <TodoListContent />
      <Footer>NISSEN</Footer>
    </main>
  );
};

export default memo(TodoList);
