import { useEffect, useState } from "react";
import { Country } from "../types/types";
import axios from "axios";

export function useCountryDetailsData(cca3: string | undefined) {
  const [country, setCountry] = useState<Country>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!cca3) {
      return;
    }

    setIsLoading(true);
    axios
      .get(
        `https://restcountries.com/v3.1/alpha/${cca3}?fields=cca3,name,flags,capital,currencies,region,languages,capitalInfo,landlocked`
      )
      .then((response) => {
        setCountry(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [cca3]);

  return {
    country,
    isLoading
  }
}