import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li style={{ listStyleType: "disc", marginLeft: "20px" }}>{props.text}</li>
      </div>
  );
}

export default ToDoItem;
