import React from "react";
import useMouseLocation from "../hooks/useMouseLocation";

const TestBox = () => {
  const location = useMouseLocation();
  console.log(location);
  return (
    <div
      style={{
        height: "100",
        width: "100",
        backgroundColor: location.y > 200 ? "green" : "red",
        transition: "all 1s",
      }}
    >
      testbox
    </div>
  );
};

export default TestBox;
