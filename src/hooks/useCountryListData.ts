import { useEffect, useState } from "react";
import { Country } from "../types/types";
import axios from "axios";

export function useCountryListData() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://restcountries.com/v3.1/all?fields=cca3,name,flags,capital,currencies,region,languages,capitalInfo,landlocked"
      )
      .then((response) => {
        setCountries(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    countries,
    isLoading
  }
}