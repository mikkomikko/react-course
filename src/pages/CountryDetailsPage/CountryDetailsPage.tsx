import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Country } from "../../types/types";
import axios from "axios";

export default function CountryDetailsPage() {
  const { cca3 } = useParams();
  const [countryData, setCountryData] = useState<Country>();

  useEffect(() => {
    axios
      .get(
        `https://restcountries.com/v3.1/alpha/${cca3}?fields=cca3,name,flags,capital,currencies,region,languages,capitalInfo,landlocked`
      )
      .then((response) => {
        setCountryData(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [cca3]);

  return (
    <div className="p-7">
      <div className="mb-7">
        <Link to="/">⬅️ Back to countries</Link>
      </div>
      <h1 className="text-6xl font-semibold">{countryData?.name.common}</h1>
      <img src={countryData?.flags.svg} alt={countryData?.flags.alt} />
    </div>
  );
}
