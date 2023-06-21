import { useState } from "react";

interface Props {
  count: number;
}

export default function Counter({ count }: Props) {
  const [internalCount, setInternalCount] = useState(0);

  return (
    <div className="text-5xl font-bold" data-testid="counter">
      <h2>Heading</h2>
      {count}
      <button onClick={() => setInternalCount((prev) => prev + 1)}>
        Increase
      </button>
      <div data-testid="internalCount">{internalCount}</div>
    </div>
  );
}
