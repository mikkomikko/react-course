import axios from "axios";
import { useState, useEffect } from "react";
import { Country } from "../types/types";

export function useCountryDetailsData(cca3: string | undefined) {
  const [isLoading, setIsLoading] = useState(false);
  const [countryData, setCountryData] = useState<Country | null>(null);

  useEffect(() => {
    if (!cca3) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${cca3}?fields=cca3,name,flags,capital,currencies,region,languages,capitalInfo,landlocked`
        );
        setCountryData(response.data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [cca3]);

  return { isLoading, countryData };
}
