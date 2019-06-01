// example Layout.js
import React from "react";

export default ({ children }) => {
  console.log(this);
  return (
    <main
      style={{
        width: "90vw",
      }}
    >
      <div>{children}</div>
    </main>
  );
};
