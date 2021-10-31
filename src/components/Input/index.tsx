import React, { memo, FC, CSSProperties } from 'react';
import styled from 'styled-components';

interface InputProps {
  className?: string;
  placeholder?: string;
  style?: CSSProperties;
}

const Input = styled.input`
  display: block;
  width: 50vw;
  box-sizing: border-box;
  border: 1px solid transparent;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  height: 52px;
  margin-bottom: 32px;
  padding: 4px;
  border-radius: 4px;
  &:focus {
    border-color: #6772e5;
    outline: none;
    box-shadow: 0 1px 6px rgba(103, 114, 229, 0.5);
  }
`;

const BaseInput: FC<InputProps> = (props: InputProps) => {
  const { className, placeholder, style } = props;
  return <Input className={className} style={style} placeholder={placeholder} />;
};

BaseInput.defaultProps = {
  placeholder: '请输入待办事项',
};

export default memo(BaseInput);
