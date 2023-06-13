import { useMemo, useState } from "react";
import CountryListItem from "../CountryListItem/CountryListItem";
import TextInput from "../TextInput/TextInput";
import { Country } from "../../types/types";
import { Checkbox } from "../Checkbox/Checkbox";
import { useCountryData } from "../../hooks/useCountryData";

export default function CountryList() {
  const [filterValue, setFilterValue] = useState("");
  const [shouldFilterLandlocked, setShouldFilterLandlocked] = useState(false);
  const { isLoading, countryData } = useCountryData(
    "https://restcountries.com/v3.1/all?fields=cca3,name,flags,capital,currencies,region,languages,capitalInfo,landlocked"
  );

  const filteredCountries = useMemo(() => {
    if (!countryData.length) {
      return [];
    }

    let result: Country[] = countryData;
    if (shouldFilterLandlocked) {
      result = countryData.filter((country) => country.landlocked);
    }

    if (!filterValue.trim()) {
      return result;
    }

    return result
      .filter((country) =>
        country.name.common.toLowerCase().includes(filterValue.toLowerCase())
      )
      .sort((a, b) => a.name.common.localeCompare(b.name.common));
  }, [countryData, filterValue, shouldFilterLandlocked]);

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="p-4">
        <TextInput onChange={handleFilterChange} />
        <Checkbox
          label="Show only land locked"
          onChange={(value) => setShouldFilterLandlocked(value)}
        />
      </div>
      <ul className="p-4 grid grid-cols-4 gap-4 text-sm leading-6">
        {filteredCountries.map((country) => {
          return <CountryListItem key={country.cca3} country={country} />;
        })}
      </ul>
    </div>
  );
}
