import { useContext } from "react";
import BucketListContext from "../../contexts/BucketListContext";
import { Link } from "react-router-dom";

export default function BucketList() {
  const { selectedCountries, removeCountry } = useContext(BucketListContext);

  return (
    <div className="sticky top-0">
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 mt-8">
        <h2 className="block text-gray-700 text-lg font-semibold mb-6">
          Bucket list
        </h2>
        {selectedCountries.length === 0 && (
          <p className="text-sm text-gray-500">No countries yet</p>
        )}
        <ul>
          {selectedCountries.map((country) => {
            return (
              <li
                key={country.cca3}
                className="flex justify-between cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2"
              >
                <Link
                  to={`country/${country.cca3}`}
                  className="grow flex items-center"
                >
                  <div className="basis-8 mr-3">
                    <img src={country.flags.svg} alt="" />
                  </div>
                  <div>{country.name.common}</div>
                </Link>
                <button
                  className="text-sm font-normal text-gray-500 hover:text-gray-800 tracking-wide px-2"
                  onClick={() => removeCountry(country.cca3)}
                >
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
