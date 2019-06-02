// example Layout.js
import React from "react";

export default ({ children }) => {
  console.log(this);
  return (
    <main
      style={{
        width: "90vw",
        height: "90vh",
        fontSize: "1rem"
      }}
    >
      <div className="w-100 h-100 d-flex">{children}</div>
    </main>
  );
};
