// example Layout.js
import React from "react";

export default ({ children, column }) => {
  console.log(column);
  return (
    <main
      style={{
        width: "90vw",
        height: "90vh",
        fontSize: "1rem"
      }}
    >
      <div className={`w-100 h-100 d-flex ${column ? 'flex-column':''}`}>{children}</div>
    </main>
  );
};
