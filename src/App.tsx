import { useState } from "react";
import Counter from "./components/Counter/Counter";
import CountryListItem from "./components/CountryListItem/CountryListItem";

function App() {
  const [currentCount, setCurrentCount] = useState<number>(0);

  const handleCountClick = () => {
    // setCurrentCount(currentCount + 1);
    setCurrentCount((prev) => prev + 1);
  };

  return (
    <div>
      <ul className="bg-slate-50 p-4 grid grid-cols-4 gap-4 text-sm leading-6">
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
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCountClick}
        >
          Add count
        </button>
        <Counter count={currentCount} />
      </div>
    </div>
  );
}

export default App;
