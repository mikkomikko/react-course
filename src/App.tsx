import { Routes, Route } from "react-router-dom";
import CountryListPage from "./pages/CountryListPage/CountryListPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Layout from "./pages/Layout";
import CountryDetailsPage from "./pages/CountryDetailsPage/CountryDetailsPage";
import CountriesByPopulationPage from "./pages/CountriesByPopulationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CountryListPage />} />
        <Route path="country/:cca3" element={<CountryDetailsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="most-populous" element={<CountriesByPopulationPage />} />
      </Route>
    </Routes>
  );
}

export default App;
