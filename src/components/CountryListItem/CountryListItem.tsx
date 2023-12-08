import { Link } from "react-router-dom";
import { Country } from "../../types/types";

interface Props {
  country: Country;
}

export default function CountryListItem({ country }: Props) {
  const { name, region, capital, languages, cca3, flags } = country;

  const renderLanguages = () => {
    return Object.values(languages).join(", ");
  };

  return (
    <li className="hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm">
      <img src={flags.svg} alt={flags.alt} />
      <h2 className="mt-3 text-xl font-semibold">{name.common}</h2>
      <p className="text-slate-500">Region: {region}</p>
      <p className="text-slate-500">Capital: {capital}</p>
      <p className="text-slate-500">Official languages: {renderLanguages()}</p>
      <Link
        to={`country/${cca3}`}
        className="font-medium text-blue-600 hover:underline"
      >
        Details
      </Link>
    </li>
  );
}
