import { useState } from "react";
import CountryListItem from "../CountryListItem/CountryListItem";
import TextInput from "../TextInput/TextInput";

export default function CountryList() {
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
  };

  return (
    <div>
      <TextInput onChange={handleFilterChange} />
      <ul className="p-4 grid grid-cols-4 gap-4 text-sm leading-6">
        <CountryListItem
          name="Finland"
          capital="Helsinki"
          region="Europe"
          languages={["Finnish", "Swedish"]}
        />
        <CountryListItem
          name="Sweden"
          capital="Stockholm"
          region="Europe"
          languages={["Swedish"]}
        />
        <CountryListItem
          name="Norway"
          capital="Oslo"
          region="Europe"
          languages={["Nynorsk", "Bokmål"]}
        />
      </ul>
    </div>
  );
}
