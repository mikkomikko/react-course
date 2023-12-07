import { Link } from "react-router-dom";
import { useCountryListData } from "../hooks/useCountryListData";
import { useMemo } from "react";
import classNames from "classnames";

const CountryTable = () => {
  const { countries } = useCountryListData();

  const countriesByPopulation = useMemo(() => {
    return countries.slice().sort((a, b) => b.population - a.population);
  }, [countries]);

  const getPopulationClasses = (population: number) => {
    return classNames({
      "font-bold": population > 100000000,
      "text-red-600": population > 200000000,
    });
  };

  return (
    <div className="py-8">
      <div className="text-gray-600 mb-4">{countries.length} countries</div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="pl-5 py-3">
                #
              </th>
              <th scope="col"></th>
              <th scope="col" className="px-2 py-3">
                Country
              </th>
              <th scope="col" className="px-2 py-3">
                Region
              </th>
              <th scope="col" className="px-2 py-3 text-right">
                Population
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {countriesByPopulation.map((country, index) => (
              <tr
                key={country.cca3}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="pl-5 py-2">{index + 1}</td>
                <td className="px-2 py-2">
                  <img
                    src={country.flags.svg}
                    alt={country.flags.alt}
                    height={40}
                    width={30}
                  />
                </td>
                <td className="px-2 py-2">{country.name.common}</td>
                <td className="px-2 py-2">{country.region}</td>
                <td className="px-2 py-2 text-right tabular-nums">
                  <span className={getPopulationClasses(country.population)}>
                    {new Intl.NumberFormat().format(country.population)}
                  </span>
                </td>
                <td className="pl-10 py-2">
                  <Link
                    to={`/country/${country.cca3}`}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Details →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountryTable;
