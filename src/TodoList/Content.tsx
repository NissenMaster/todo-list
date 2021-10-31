import React, { memo } from 'react';
import Input from '../components/Input';

const Content = () => {
  return (
    <div>
      <div>
        <Input />
      </div>
      <div>输入框</div>
      <div>输入框</div>
      <div>输入框</div>
    </div>
  );
};

export default memo(Content);
