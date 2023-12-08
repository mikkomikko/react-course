import { useEffect, useState } from "react";
import { WeatherLocation } from "../types/types";
import axios from "axios";

export function useWeatherData(lat: number, lon: number) {
  const [currentWeatherData, setCurrentWeatherData] = useState<WeatherLocation>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
      )
      .then((response) => {
        setCurrentWeatherData(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [lat, lon]);

  return {
    currentWeatherData,
    isLoading
  }
}