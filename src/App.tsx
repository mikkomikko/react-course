import { ChangeEvent, useState } from "react";
import Counter from "./components/Counter/Counter";
import CountryListItem from "./components/CountryListItem/CountryListItem";

function App() {
  const [currentCount, setCurrentCount] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");

  const handleCountClick = () => {
    // setCurrentCount(currentCount + 1);
    setCurrentCount((prev) => prev + 1);
  };

  const handleTextInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentText(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <ul className="p-4 grid grid-cols-4 gap-4 text-sm leading-6">
        <CountryListItem
          name="Finland"
          capital="Helsinki"
          region="Europe"
          languages={["Finnish", "Swedish"]}
        />
        <CountryListItem
          name="Sweden"
          capital="Stockholm"
          region="Europe"
          languages={["Swedish"]}
        />
        <CountryListItem
          name="Norway"
          capital="Oslo"
          region="Europe"
          languages={["Nynorsk", "Bokmål"]}
        />
      </ul>
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCountClick}
        >
          Add count
        </button>
        <Counter count={currentCount} />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          id="new-password"
          type="text"
          onChange={handleTextInputChange}
          value={currentText}
        />
        <p className="mt-3">{currentText}</p>
      </div>
    </div>
  );
}

export default App;
