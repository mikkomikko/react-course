import { ChangeEvent, useState } from "react";
import CountryList from "./components/CountryList/CountryList";

function App() {
  const [isOn, setIsOn] = useState(false);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsOn(event.target.checked);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <CountryList />
      <div className="mb-4">
        <div className="flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            checked={isOn}
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="default-checkbox"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Switch the lights
          </label>
        </div>
        <p>Lights are {isOn ? "ON" : "OFF"}.</p>
      </div>
    </div>
  );
}

export default App;
