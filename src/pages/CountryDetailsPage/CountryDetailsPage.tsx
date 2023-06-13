import { Link, useParams } from "react-router-dom";
import { useCountryDetailsData } from "../../hooks/useCountryDetailsData";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";

export default function CountryDetailsPage() {
  const { cca3 } = useParams();
  const { countryData, isLoading } = useCountryDetailsData(cca3);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-7">
      <div className="mb-7">
        <Link to="/">⬅️ Back to countries</Link>
      </div>
      {countryData && (
        <>
          <h1 className="text-6xl font-semibold">{countryData.name.common}</h1>
          <img src={countryData.flags.svg} alt={countryData.flags.alt} />
          <CurrentWeather country={countryData} />
        </>
      )}
    </div>
  );
}
