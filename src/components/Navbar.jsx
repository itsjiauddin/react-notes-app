import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <Link to={`/`}>
        <h2 className="text-2xl font-bold">Notes</h2>
      </Link>
      <Link to={`/create-note`}>
        <button className="bg-yellow-300 px-4 py-2 rounded-md">
          Create Note
        </button>
      </Link>
    </div>
  );
}
