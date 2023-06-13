import axios from "axios";
import { useState, useEffect } from "react";
import { WeatherLocation } from "../types/types";

export function useWeatherData(latlng: [number, number]) {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherLocation | null>(null);

  useEffect(() => {
    if (!latlng) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latlng[0]}&longitude=${latlng[1]}&current_weather=true`
        );
        setWeatherData(response.data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLoading, weatherData };
}
