import React from "react";

const ClickCounter = ({ count }) => {
  return (
    <div>
      <h2 className="clicks">Clicks: {count}</h2>
    </div>
  );
};

export default ClickCounter;
