import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid salmon",
        height: "700px",
        marginLeft: "22px",
        float: "left",

        // marginBottom: "25px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
