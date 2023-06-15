import { Link } from "react-router-dom";
import { Country } from "../../types/types";
import { useContext } from "react";
import BucketListContext from "../../contexts/BucketListContext";

interface Props {
  country: Country;
}

export default function CountryListItem({ country }: Props) {
  const { name, region, capital, languages, cca3, flags } = country;
  const { addCountry } = useContext(BucketListContext);

  const renderLanguages = () => {
    return Object.values(languages).join(", ");
  };

  const handleAddToBucketList = () => {
    addCountry(country);
  };

  return (
    <li className="hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm">
      <img className="mb-5" src={flags.svg} alt={flags.alt} />
      <h2 className="text-xl font-semibold">{name.common}</h2>
      <p className="text-slate-500">Region: {region}</p>
      <p className="text-slate-500">Capital: {capital}</p>
      <p className="text-slate-500 mb-8">
        Official languages: {renderLanguages()}
      </p>
      <Link
        className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
        to={`country/${cca3}`}
      >
        Details
      </Link>
      <button
        onClick={handleAddToBucketList}
        className="mt-3 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        Add to list
      </button>
    </li>
  );
}
