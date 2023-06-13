import axios from "axios";
import { useState, useEffect } from "react";
import { Country } from "../types/types";

export function useCountryData(url: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [countryData, setCountryData] = useState<Country[]>([]);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setCountryData(response.data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, countryData };
}
