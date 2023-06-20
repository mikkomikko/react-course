import { Routes, Route } from "react-router-dom";
import CountryListPage from "./pages/CountryListPage/CountryListPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import Layout from "./pages/Layout";
import CountryDetailsPage from "./pages/CountryDetailsPage/CountryDetailsPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CountryListPage />} />
        <Route path="country/:cca3" element={<CountryDetailsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
