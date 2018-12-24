import React, { useState } from "react";
import ReactDOM from "react-dom";

export const useCounter = initialState => {
  const [globalCount, setGlobalCount] = useState(initialState);
  const globalAdd = () => setGlobalCount(globalCount + 1);
  return { globalCount, globalAdd };
};
