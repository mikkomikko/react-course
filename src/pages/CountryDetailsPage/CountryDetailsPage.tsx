import { Link, useParams } from "react-router-dom";

export default function CountryDetailsPage() {
  const { cca3 } = useParams();

  return (
    <div className="p-7">
      <div className="mb-7">
        <Link to="/">⬅️ Back to countries</Link>
      </div>
      <h1 className="text-6xl font-semibold">{cca3}</h1>
    </div>
  );
}
