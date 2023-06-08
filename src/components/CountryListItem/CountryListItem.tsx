interface Props {
  name: string;
  region: string;
  capital: string;
  languages?: string[];
}

export default function CountryListItem(props: Props) {
  const { name, region, capital, languages } = props;

  return (
    <li className="hover:ring-blue-500 hover:shadow-md group rounded-md p-3 bg-white ring-1 ring-slate-200 shadow-sm">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-slate-500">Region: {region}</p>
      <p className="text-slate-500">Capital: {capital}</p>
    </li>
  );
}
