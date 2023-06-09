import { useEffect, useState } from "react";
import CountryListItem from "../CountryListItem/CountryListItem";
import TextInput from "../TextInput/TextInput";
import { Country } from "../../types/types";
import axios from "axios";

export default function CountryList() {
  const [filterValue, setFilterValue] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    console.log("effect");
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=cca3,name,flags,capital,currencies,region,languages,capitalInfo,landlocked"
      )
      .then((response) => {
        console.log("promise fulfilled");
        setCountries(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  console.log("render", countries.length, "countries");

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
  };

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
