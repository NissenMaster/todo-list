import React, { FC, memo } from 'react';
import styled from 'styled-components';
import TodoListContent from './Content';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TodoList: FC = () => {
  return (
    <Main>
      <section>
        <header>TodoList</header>
        <TodoListContent />
        <footer>todolist-demo</footer>
      </section>
    </Main>
  );
};

export default memo(TodoList);
