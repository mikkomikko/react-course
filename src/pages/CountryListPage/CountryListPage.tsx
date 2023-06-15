import BucketList from "../../components/BucketList/BucketList";
import CountryList from "../../components/CountryList/CountryList";

function CountryListPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <CountryList />
        </div>
        <div>
          <BucketList />
        </div>
      </div>
    </div>
  );
}

export default CountryListPage;
