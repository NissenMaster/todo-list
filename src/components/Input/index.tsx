import React, { memo, FC } from 'react';

interface InputProps {
  className?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = (props: InputProps) => {
  const { className, placeholder } = props;
  return <input className={className} placeholder={placeholder} />;
};

Input.defaultProps = {
  placeholder: '请输入待办事项',
};

export default memo(Input);
