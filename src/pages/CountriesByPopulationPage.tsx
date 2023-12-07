import CountryTable from "../components/CountryTable";

const CountriesByPopulationPage = () => {
  return (
    <div className="max-w-3xl mx-auto pt-9">
      <h1 className="font-bold text-4xl mb-4">Most populous countries</h1>
      <CountryTable />
    </div>
  );
};

export default CountriesByPopulationPage;
