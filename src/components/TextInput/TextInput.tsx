import { ChangeEvent, useState } from "react";

interface Props {
  onChange: (value: string) => void;
}

export default function TextInput({ onChange }: Props) {
  const [currentText, setCurrentText] = useState("");

  const handleTextInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentText(event.target.value);
    // We can't use currentText here
    onChange(event.target.value);
  };

  return (
    <div className="mt-4 mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="filter"
      >
        Filter
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        id="filter"
        type="text"
        onChange={handleTextInputChange}
        value={currentText}
      />
    </div>
  );
}
