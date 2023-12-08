import { Link, useParams } from "react-router-dom";
import { useCountryDetailsData } from "../../hooks/useCountryDetailsData";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";

const CountryDetailsPage = () => {
  const { cca3 } = useParams();
  const { country, isLoading } = useCountryDetailsData(cca3);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto py-8 px-3">
      <Link to="/" className="font-medium text-blue-600 hover:underline">
        Back to countries
      </Link>
      <div>
        {country && (
          <div className="mt-7">
            <h1 className="text-5xl font-bold mb-5">{country.name.common}</h1>
            <div className="mb-4">
              <span className="bg-purple-100 text-purple-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                {country.region}
              </span>
            </div>
            <img src={country.flags.svg} alt={country.flags.alt} width={400} />
            <CurrentWeather country={country} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetailsPage;
