import { useWeatherData } from "../../hooks/useWeatherData";
import { Country } from "../../types/types";

interface Props {
  country: Country;
}

const CurrentWeather = ({ country }: Props) => {
  const lat = country.capitalInfo.latlng[0];
  const lon = country.capitalInfo.latlng[1];
  const { currentWeatherData } = useWeatherData(lat, lon);

  return (
    <div className="mt-5">
      <div className="text-slate-500">{country.capital}</div>
      <div className="text-5xl font-bold">
        {currentWeatherData?.current_weather.temperature} °C
      </div>
    </div>
  );
};

export default CurrentWeather;
