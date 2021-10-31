import React, { FC, memo } from 'react';
import Input from '../components/Input';
import Item, { Wrapper } from './Item';
import { useTodoList } from './store';

const Content: FC = () => {
  const [list = [], setList]: [Record<string, any>[], any] = useTodoList('nissen');
  console.log(`list`, list);
  return (
    <section>
      <Wrapper>
        <Input />
      </Wrapper>
      {list.map((item: Record<string, any>) => {
        const { key, text } = item;
        return <Item key={key} text={text} />;
      })}
      <Item text="131313131313" />
      <Item text="141414141414" />
      <Item text="151515151515" />
      <Item text="1616161161616" />
    </section>
  );
};

export default memo(Content);
