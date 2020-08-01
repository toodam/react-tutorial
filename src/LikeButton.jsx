import React, { useState, useEffect } from "react";

const LikeButton = (props) => {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document
      .getElementById("counter")
      .addEventListener("click", () => countUp());
    if (count > 10) {
      setCount(0);
    }
  });
  return <button id="counter">いいね数: {count}</button>;
};

export default LikeButton;
