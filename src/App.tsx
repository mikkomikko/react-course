import { Routes, Route } from "react-router-dom";
import CountryListPage from "./pages/CountryListPage/CountryListPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CountryListPage />} />
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
}

export default App;
