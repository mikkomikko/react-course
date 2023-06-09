import { Country } from "../../types/types";

interface Props {
  country: Country;
}

export default function CountryListItem({ country }: Props) {
  const { name, region, capital, languages } = country;

  const renderLanguages = () => {
    return Object.values(languages).join(", ");
  };

  return (
    <li className="hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm">
      <h2 className="text-xl font-semibold">{name.common}</h2>
      <p className="text-slate-500">Region: {region}</p>
      <p className="text-slate-500">Capital: {capital}</p>
      <p className="text-slate-500">Official languages: {renderLanguages()}</p>
    </li>
  );
}
