import { Checkbox } from "antd";
import React from "react";

const AppCheckbox = ({ onChange, label, id, value, ...rest }) => {
  return (
    <Checkbox onChange={onChange} id={id} value={value} {...rest}>
      {label}
    </Checkbox>
  );
};

export default AppCheckbox;
