import React from "react";

export function Test(props) {
  var state = ["ppx", "clg", "xxs"];

  console.log(state);
  return (
    <div>
      test1
      <h2>{props.others}</h2>
      <ul>
        {state.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
