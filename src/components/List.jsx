import React from "react";
import { List } from "antd";

const AppList = ({ dataSource, header, footer, renderItem, ...rest }) => {
  return (
    <List
      header={header}
      footer={footer}
      dataSource={dataSource}
      renderItem={renderItem}
      {...rest}
      //   (item) => (
      //     <List.Item>
      //       <Typography.Text mark>[ITEM]</Typography.Text> {item}
      //     </List.Item>
      //   )}
    />
  );
};

export default AppList;
