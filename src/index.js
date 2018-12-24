import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useCounter } from "./hooks";
import ChildCount1 from "./components/ChildCount1";
import ChildCount2 from "./components/ChildCount2";

function App() {
  const { globalCount, globalAdd } = useCounter(0);

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", width: "30rem" }}
      >
        <p>Global count is {globalCount} </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "30rem"
        }}
      >
        <ChildCount1 globalInc={globalAdd} />
        <ChildCount2 globalInc={globalAdd} />
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
