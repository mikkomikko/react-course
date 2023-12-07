import axios from "axios";
import { useState, useEffect } from "react";
import { Country } from "../types/types";

export function useCountryListData() {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/independent?status=true&fields=cca3,name,flags,capital,currencies,region,languages,capitalInfo,landlocked,population"
        );
        setCountries(response.data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, countries };
}
