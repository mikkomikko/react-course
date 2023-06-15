import { useContext } from "react";
import BucketListContext from "../../contexts/BucketListContext";

export default function BucketList() {
  const { selectedCountries } = useContext(BucketListContext);

  return (
    <div>
      <h2>Bucket list</h2>
      <ul>
        {selectedCountries.map((country) => {
          return <div key={country.cca3}>{country.name.common}</div>;
        })}
      </ul>
    </div>
  );
}
