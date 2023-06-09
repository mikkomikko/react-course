import { useEffect, useMemo, useState } from "react";
import CountryListItem from "../CountryListItem/CountryListItem";
import TextInput from "../TextInput/TextInput";
import { Country } from "../../types/types";
import axios from "axios";
import { Checkbox } from "../Checkbox/Checkbox";

export default function CountryList() {
  const [filterValue, setFilterValue] = useState("");
  const [shouldFilterLandlocked, setShouldFilterLandlocked] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=cca3,name,flags,capital,currencies,region,languages,capitalInfo,landlocked"
      )
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const filteredCountries = useMemo(() => {
    if (!countries.length) {
      return [];
    }

    let result: Country[] = countries;
    if (shouldFilterLandlocked) {
      result = countries.filter((country) => country.landlocked);
    }

    if (!filterValue.trim()) {
      return result;
    }

    return result
      .filter((country) =>
        country.name.common.toLowerCase().includes(filterValue.toLowerCase())
      )
      .sort((a, b) => a.name.common.localeCompare(b.name.common));
  }, [countries, filterValue, shouldFilterLandlocked]);

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
  };

  return (
    <div>
      <TextInput onChange={handleFilterChange} />
      <Checkbox
        label="Show only land locked"
        onChange={(value) => setShouldFilterLandlocked(value)}
      />
      <ul className="p-4 grid grid-cols-4 gap-4 text-sm leading-6">
        {filteredCountries.map((country) => {
          return <CountryListItem key={country.cca3} country={country} />;
        })}
      </ul>
    </div>
  );
}
