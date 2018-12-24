import React, { useState, useEffect } from "react";

const ChildCount2 = ({ globalInc }) => {
  const [count, setCount] = useState(0);
  useEffect(
    () => {
      count > 0 && globalInc();
    },
    [count]
  );

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>Child 2 count is: {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>add</button>
      </div>
    </div>
  );
};

export default ChildCount2;
