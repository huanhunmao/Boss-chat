import React from "react";
import { List } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
export function Test(props) {
  var state = ["ppx", "clg", "xxs"];

  console.log(state);
  return (
    <div>
      test1
      <h2>{props.others}</h2>
      <List renderHeader={"姓名列表"} renderFooter={"结束列表"}>
        {state.map((item) => (
          <List.Item key={item}>{item}</List.Item>
        ))}
      </List>
      {/* <ul>
        {state.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul> */}
    </div>
  );
}
