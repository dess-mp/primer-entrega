import { useState } from "react";

function useCount(initialCount = 0) {
  const [count, setCount] = useState(initialCount);

  const less = () => {
    if (count > 0) setCount(count - 1);
  };

  const add = () => {
    setCount(count + 1);
  };

  return { count, add, less };
}

export default useCount;
