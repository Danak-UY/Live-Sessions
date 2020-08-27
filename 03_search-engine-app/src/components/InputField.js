import React from "react";
import { Input } from "antd";
import {
  SearchOutlined,
  AudioOutlined,
  CloseOutlined,
} from "@ant-design/icons";

function InputField({ handleChange, searchItem }) {
  return (
    <Input
      size="large"
      prefix={<SearchOutlined />}
      suffix={
        searchItem ? (
          <CloseOutlined onClick={() => handleChange("")} />
        ) : (
          <AudioOutlined />
        )
      }
      value={searchItem}
      onChange={(ev) => handleChange(ev.target.value)}
    />
  );
}

export default InputField;
