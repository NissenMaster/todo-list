import React, { memo, FC } from 'react';
import styled from 'styled-components';

const CheckBox = styled.input`
  width: 24px;
  height: 24px;
`;

const Text = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
  width: calc(50vw - 100px);
`;

const CloseBtn = styled.div`
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    color: #f29090;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export interface ItemProps {
  text: string;
}

const Item: FC<ItemProps> = (props: ItemProps) => {
  const { text } = props;
  return (
    <Wrapper>
      <div style={{ display: 'flex' }}>
        <CheckBox type="checkbox" />
        <Text>{text}</Text>
        <CloseBtn>关闭</CloseBtn>
      </div>
    </Wrapper>
  );
};

export default memo(Item);
