import React from "react";

const Test = ({ desp }) => {
  const handleClick = () => {
    alert("測試成功!");
  };
  return (
    <div>
      <button onClick={handleClick}>{desp}</button>
    </div>
  );
};

export default Test;
