import { useState } from "react";
import CountryListItem from "../CountryListItem/CountryListItem";
import TextInput from "../TextInput/TextInput";
import { Country } from "../../types/types";

export default function CountryList() {
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
  };

  const countries: Country[] = [
    {
      cca3: "fin",
      name: "Finland",
      capital: "Helsinki",
      region: "Europe",
      languages: ["Finnish", "Swedish"],
    },
    {
      cca3: "swe",
      name: "Sweden",
      capital: "Stockholm",
      region: "Europe",
      languages: ["Swedish"],
    },
    {
      cca3: "nor",
      name: "Norway",
      capital: "Helsinki",
      region: "Oslo",
      languages: ["Nynorsk", "Bokmål"],
    },
  ];

  return (
    <div>
      <TextInput onChange={handleFilterChange} />
      <ul className="p-4 grid grid-cols-4 gap-4 text-sm leading-6">
        {countries.map((country) => {
          return <CountryListItem key={country.cca3} country={country} />;
        })}
      </ul>
    </div>
  );
}
