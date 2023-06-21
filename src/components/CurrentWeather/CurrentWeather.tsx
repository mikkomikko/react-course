import { useWeatherData } from "../../hooks/useWeatherData";
import { Country } from "../../types/types";

interface Props {
  country: Country;
}

export default function CurrentWeather({ country }: Props) {
  const { weatherData } = useWeatherData([
    country.capitalInfo.latlng[0],
    country.capitalInfo.latlng[1],
  ]);

  return (
    <div className="mt-6">
      {weatherData && (
        <div className="font-bold text-4xl">
          {weatherData.current_weather.temperature} °C
        </div>
      )}
      <div className="text-slate-500" data-testid="capital">
        {country.capital}
      </div>
    </div>
  );
}
