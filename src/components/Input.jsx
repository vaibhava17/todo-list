import React from "react";
import { Input } from "antd";

const AppInput = ({
  name,
  className,
  value,
  label,
  onChange,
  onPressEnter,
  ...rest
}) => {
  return (
    <Input
      name={name}
      className={className}
      value={value}
      label={label}
      onChange={onChange}
      onPressEnter={onPressEnter}
      {...rest}
    />
  );
};

export default AppInput;
