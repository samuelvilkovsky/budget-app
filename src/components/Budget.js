import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

// Creating a new component
const Budget = () => {
  const { budget } = useContext(AppContext);

  return (
    // using bootstrap
    <div className="alert alert-secondary">
      <span>Budget: € {budget}</span>
    </div>
  );
};

export default Budget;
