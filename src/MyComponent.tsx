import { ChangeEvent, useState } from "react";

export default function MyComponent() {
  const [text, setText] = useState("");
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    alert("Hello");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    setIsOn(event.target.checked);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} value={text} />
      <input type="checkbox" checked={isOn} onChange={handleCheckboxChange} />
      <button onClick={handleClick}>Click this</button>
    </div>
  );
}
