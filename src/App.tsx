import CountryListItem from "./components/CountryListItem/CountryListItem";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <ul className="bg-slate-50 p-4 grid grid-cols-4 gap-4 text-sm leading-6">
        <CountryListItem name="Finland" capital="Helsinki" region="Europe" />
        <CountryListItem name="Sweden" capital="Stockholm" region="Europe" />
        <CountryListItem name="Norway" capital="Oslo" region="Europe" />
      </ul>
    </div>
  );
}

export default App;
